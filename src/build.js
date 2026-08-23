const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const ASSETS_SRC = path.join(ROOT_DIR, 'assets');
const ASSETS_DEST = path.join(DOCS_DIR, 'assets');

// Helper to ensure directory exists
function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

// Copy recursive helper
function copyDir(src, dest) {
    ensureDir(dest);
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Extract Front Matter
function parseFrontMatter(content) {
    let data = {};
    let body = content;
    const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (match) {
        const yaml = match[1];
        body = match[2];
        yaml.split(/\r?\n/).forEach(line => {
            const colonIndex = line.indexOf(':');
            if (colonIndex !== -1) {
                const key = line.slice(0, colonIndex).trim();
                let value = line.slice(colonIndex + 1).trim();
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                data[key] = value;
            }
        });
    }
    return { data, body };
}

// Inline formatting (bold, italic, code, links, images)
function formatInline(text) {
    if (!text) return '';
    return text
        .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>');
}

// Parse custom Notion markdown & Markdown into clean structured HTML
function markdownToHtml(markdown) {
    // 1. Normalize line endings & remove empty Notion blocks
    let raw = markdown
        .replace(/\r\n/g, '\n')
        .replace(/<empty-block\s*\/?>/gi, '');

    // 2. Preprocess custom Notion structures with placeholders
    const placeholders = [];
    function addPlaceholder(html) {
        const id = `___PLACEHOLDER_${placeholders.length}___`;
        placeholders.push(html);
        return `\n\n${id}\n\n`;
    }

    // Code blocks
    raw = raw.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
        const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return addPlaceholder(`<pre><code class="language-${lang || 'text'}">${escaped.trim()}</code></pre>`);
    });

    // Notion Callouts
    raw = raw.replace(/<callout(?:\s+icon="([^"]*)")?(?:\s+color="([^"]*)")?>([\s\S]*?)<\/callout>/gi, (match, icon, color, text) => {
        let iconEmoji = '💡';
        if (icon) {
            if (icon.includes('robot')) iconEmoji = '🤖';
            else if (icon.includes('gym') || icon.includes('sport')) iconEmoji = '🏋️';
            else if (icon.includes('info')) iconEmoji = 'ℹ️';
            else if (icon.includes('pen') || icon.includes('write')) iconEmoji = '✒️';
        }
        const innerHtml = markdownToHtml(text.trim());
        return addPlaceholder(`
            <div class="notion-callout ${color || 'gray_bg'}">
                <span class="notion-callout-icon">${iconEmoji}</span>
                <div class="notion-callout-text">${innerHtml}</div>
            </div>
        `);
    });

    // Details / Summary Accordion
    raw = raw.replace(/<details>([\s\S]*?)<\/details>/gi, (match, inner) => {
        const summaryMatch = inner.match(/<summary>([\s\S]*?)<\/summary>/i);
        let summaryText = 'Read more...';
        let bodyContent = inner;
        if (summaryMatch) {
            summaryText = summaryMatch[1];
            bodyContent = inner.replace(summaryMatch[0], '');
        }
        const innerHtml = markdownToHtml(bodyContent.trim());
        return addPlaceholder(`
            <details class="notion-details">
                <summary>${summaryText}</summary>
                <div class="details-content">${innerHtml}</div>
            </details>
        `);
    });

    // Notion Columns
    raw = raw.replace(/<columns>([\s\S]*?)<\/columns>/gi, (match, inner) => {
        const colRegex = /<column(?:\s+ratio="([^"]*)")?>([\s\S]*?)<\/column>/gi;
        let columnsHtml = '';
        let colMatch;
        while ((colMatch = colRegex.exec(inner)) !== null) {
            const ratio = colMatch[1];
            const colBody = colMatch[2];
            const flexRatio = ratio ? `style="flex: 0 1 ${ratio}%; min-width: 240px;"` : '';
            columnsHtml += `<div class="notion-column" ${flexRatio}>${markdownToHtml(colBody.trim())}</div>`;
        }
        return addPlaceholder(`<div class="notion-columns">${columnsHtml}</div>`);
    });

    // Notion Bookmarks & Unknowns
    raw = raw.replace(/<unknown\s+url="([^"]*)"(?:\s+alt="([^"]*)")?\s*\/?>/gi, (match, url, alt) => {
        let title = 'Resource Link';
        if (url.includes('notion.com') || url.includes('notion.site')) title = 'Notion Page';
        else if (url.includes('youtube.com') || url.includes('youtu.be')) title = 'Video Link';
        else if (url.includes('github.com')) title = 'GitHub Repository';
        else if (url.includes('kinderkrebsstiftung.de')) title = 'Spendenaktion - Kinderkrebsstiftung';
        else if (url.includes('team-rynkeby')) title = 'Team Rynkeby Flensburg';
        else {
            try {
                title = new URL(url).hostname;
            } catch (e) {}
        }

        return addPlaceholder(`
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="notion-bookmark-card">
                <div class="notion-bookmark-info">
                    <span class="notion-bookmark-title"><i class="fa-solid fa-arrow-up-right-from-square"></i> ${title}</span>
                    <span class="notion-bookmark-url">${url}</span>
                </div>
                <i class="fa-solid fa-chevron-right notion-bookmark-icon"></i>
            </a>
        `);
    });

    // Notion Database tags
    raw = raw.replace(/<database\s+url="([^"]*)"[^>]*>[\s\S]*?<\/database>/gi, (match, url) => {
        return addPlaceholder(`
            <a href="${url}" target="_blank" rel="noopener noreferrer" class="notion-bookmark-card">
                <div class="notion-bookmark-info">
                    <span class="notion-bookmark-title"><i class="fa-solid fa-database"></i> Notion Database View</span>
                    <span class="notion-bookmark-url">${url}</span>
                </div>
                <i class="fa-solid fa-chevron-right notion-bookmark-icon"></i>
            </a>
        `);
    });

    // Notion Embeds
    raw = raw.replace(/<embed\s+src="([^"]*)"[^>]*>[\s\S]*?<\/embed>/gi, (match, src) => {
        return addPlaceholder(`
            <div class="notion-embed-container">
                <iframe src="${src}" loading="lazy"></iframe>
            </div>
        `);
    });

    // Notion Section Badges: `# #1 Personal {color="green_bg"}` or `# 2025 Review... {color="blue_bg"}`
    raw = raw.replace(/^#\s+(.+?)\s+\{color="([^"]+)"\}/gm, (match, title, color) => {
        let icon = 'fa-solid fa-bookmark';
        if (/personal/i.test(title)) icon = 'fa-solid fa-pen-nib';
        else if (/tech|code|binary/i.test(title)) icon = 'fa-solid fa-laptop-code';
        else if (/sport|health|crossfit/i.test(title)) icon = 'fa-solid fa-heart-pulse';
        else if (/misc/i.test(title)) icon = 'fa-solid fa-robot';
        else if (/song/i.test(title)) icon = 'fa-solid fa-music';
        else if (/review|switch|anchor|brain/i.test(title)) icon = 'fa-solid fa-compass';

        return addPlaceholder(`<div class="notion-section-badge ${color}"><i class="${icon}"></i> ${title.trim()}</div>`);
    });

    // Remaining Colored Headers: `## Header {color="..."}`
    raw = raw.replace(/^(#{1,6})\s+(.+?)\s+\{color="([^"]+)"\}/gm, (match, hashes, title, color) => {
        const level = hashes.length;
        return addPlaceholder(`<h${level} class="colored-header ${color}">${formatInline(title.trim())}</h${level}>`);
    });

    // 3. Line-by-line block parsing
    const lines = raw.split('\n');
    const blocks = [];
    let currentPara = [];
    let currentList = null;
    let currentQuote = [];

    function flushPara() {
        if (currentPara.length > 0) {
            blocks.push(`<p>${currentPara.map(formatInline).join('<br>')}</p>`);
            currentPara = [];
        }
    }
    function flushList() {
        if (currentList) {
            const itemsHtml = currentList.items.map(it => `<li>${formatInline(it)}</li>`).join('');
            blocks.push(`<${currentList.type}>${itemsHtml}</${currentList.type}>`);
            currentList = null;
        }
    }
    function flushQuote() {
        if (currentQuote.length > 0) {
            blocks.push(`<blockquote>${currentQuote.map(formatInline).join('<br>')}</blockquote>`);
            currentQuote = [];
        }
    }
    function flushAll() {
        flushPara();
        flushList();
        flushQuote();
    }

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (!trimmed) {
            flushAll();
            continue;
        }

        // Placeholder match
        if (/^___PLACEHOLDER_\d+___$/.test(trimmed)) {
            flushAll();
            blocks.push(trimmed);
            continue;
        }

        // Horizontal Rule
        if (/^---+$/.test(trimmed) || /^___+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
            flushAll();
            blocks.push('<hr>');
            continue;
        }

        // Headings
        const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
        if (headingMatch) {
            flushAll();
            const level = headingMatch[1].length;
            const text = headingMatch[2];
            blocks.push(`<h${level}>${formatInline(text)}</h${level}>`);
            continue;
        }

        // Blockquotes
        if (trimmed.startsWith('>')) {
            flushPara();
            flushList();
            currentQuote.push(trimmed.replace(/^>\s?/, ''));
            continue;
        } else {
            flushQuote();
        }

        // Unordered list items: * or -
        const ulMatch = trimmed.match(/^[\*\-]\s+(.+)$/);
        if (ulMatch) {
            flushPara();
            if (!currentList || currentList.type !== 'ul') {
                flushList();
                currentList = { type: 'ul', items: [] };
            }
            currentList.items.push(ulMatch[1]);
            continue;
        }

        // Ordered list items: 1. 2.
        const olMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
        if (olMatch) {
            flushPara();
            if (!currentList || currentList.type !== 'ol') {
                flushList();
                currentList = { type: 'ol', items: [] };
            }
            currentList.items.push(olMatch[2]);
            continue;
        }

        // Indented list continuation
        if (currentList && (line.startsWith('  ') || line.startsWith('\t'))) {
            const lastIdx = currentList.items.length - 1;
            if (lastIdx >= 0) {
                currentList.items[lastIdx] += ' ' + trimmed;
                continue;
            }
        }

        // Normal paragraph line
        flushList();
        currentPara.push(trimmed);
    }

    flushAll();

    let finalHtml = blocks.join('\n\n');

    // Restore any placeholders
    finalHtml = finalHtml.replace(/___PLACEHOLDER_(\d+)___/g, (match, index) => {
        return placeholders[parseInt(index, 10)] || '';
    });

    return finalHtml;
}

// Extract topics, excerpt, and reading stats
function analyzePostContent(body) {
    const topics = [];
    if (/personal/i.test(body)) topics.push('Personal');
    if (/tech|prompt|code|copilot|ai|software|binary/i.test(body)) topics.push('Tech');
    if (/crossfit|running|sport|health|workout|hyrox|bike/i.test(body)) topics.push('Sports & Health');
    if (/misc|life|reading|inspiration/i.test(body)) topics.push('Misc');

    // Clean plain text excerpt
    let clean = body
        .replace(/<[^>]*>/g, '')
        .replace(/#[^\n]+/g, '')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/\*([^*]+)\*/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
        .replace(/\r?\n+/g, ' ')
        .trim();

    const excerpt = clean.slice(0, 175).trim() + (clean.length > 175 ? '...' : '');
    const words = clean.split(/\s+/).filter(Boolean).length;
    const readTimeMinutes = Math.max(1, Math.ceil(words / 200));

    return { topics: topics.length ? topics : ['General'], excerpt, words, readTimeMinutes };
}

// Generate the complete site
function buildSite() {
    console.log('🚀 Starting "What I Learned" static blog build for GitHub Pages...');

    ensureDir(DOCS_DIR);

    // 1. Copy Assets
    console.log('📁 Copying assets to docs/assets...');
    copyDir(ASSETS_SRC, ASSETS_DEST);

    // 2. Discover all posts in year directories (2025, 2026, etc.)
    const yearDirs = fs.readdirSync(ROOT_DIR, { withFileTypes: true })
        .filter(d => d.isDirectory() && /^[0-9]{4}$/.test(d.name))
        .map(d => d.name);

    let allPosts = [];

    yearDirs.forEach(year => {
        const yearPath = path.join(ROOT_DIR, year);
        const subDirs = fs.readdirSync(yearPath, { withFileTypes: true })
            .filter(d => d.isDirectory());

        subDirs.forEach(sub => {
            const postMdPath = path.join(yearPath, sub.name, 'index.md');
            if (fs.existsSync(postMdPath)) {
                const content = fs.readFileSync(postMdPath, 'utf-8');
                const { data, body } = parseFrontMatter(content);

                // Parse week & clean title
                let weekNum = 0;
                let folderTitle = sub.name;
                const weekMatch = sub.name.match(/^[0-9]{4}w([0-9]+)\s*-?\s*(.*)$/i);
                if (weekMatch) {
                    weekNum = parseInt(weekMatch[1], 10);
                    folderTitle = weekMatch[2].trim() || `Week ${weekNum}`;
                }

                let postTitle = data.title || folderTitle;
                const cleanTitleMatch = postTitle.match(/^[0-9]{4}w[0-9]+\s*-\s*(.+)$/i);
                if (cleanTitleMatch && cleanTitleMatch[1].trim()) {
                    postTitle = cleanTitleMatch[1].trim();
                } else if (/^[0-9]{4}w[0-9]+\s*-?$/i.test(postTitle)) {
                    postTitle = `Week ${weekNum} Reflections`;
                }

                const { topics, excerpt, words, readTimeMinutes } = analyzePostContent(body);

                // Compute numeric sort key: Year * 100 + WeekNum
                const numericYear = parseInt(year, 10);
                const sortKey = numericYear * 100 + weekNum;
                const relativeUrl = `${year}/${encodeURIComponent(sub.name)}/index.html`;

                allPosts.push({
                    year,
                    weekNum,
                    sortKey,
                    folderName: sub.name,
                    title: postTitle,
                    rawTitle: data.title || sub.name,
                    topics,
                    excerpt,
                    words,
                    readTimeMinutes,
                    relativeUrl,
                    body,
                    sourcePath: postMdPath
                });
            }
        });
    });

    // Sort posts chronologically descending (newest first)
    allPosts.sort((a, b) => b.sortKey - a.sortKey);
    console.log(`📑 Found and parsed ${allPosts.length} posts.`);

    // 3. Render Individual Post Pages
    allPosts.forEach((post, index) => {
        const prevPost = index < allPosts.length - 1 ? allPosts[index + 1] : null;
        const nextPost = index > 0 ? allPosts[index - 1] : null;

        const postHtmlContent = markdownToHtml(post.body);
        const postDestDir = path.join(DOCS_DIR, post.year, post.folderName);
        ensureDir(postDestDir);

        const pageHtml = generatePostPageHtml({
            post,
            prevPost,
            nextPost,
            postHtmlContent,
            basePath: '../../'
        });

        fs.writeFileSync(path.join(postDestDir, 'index.html'), pageHtml, 'utf-8');
    });

    // 4. Render Start / Index Page
    console.log('✨ Generating Start Page (docs/index.html)...');
    const indexHtml = generateIndexPageHtml(allPosts);
    fs.writeFileSync(path.join(DOCS_DIR, 'index.html'), indexHtml, 'utf-8');

    // 5. Create .nojekyll in docs/
    fs.writeFileSync(path.join(DOCS_DIR, '.nojekyll'), '', 'utf-8');

    console.log('✅ Build complete! All files generated in docs/ ready for GitHub Pages.');
}

// Generate Post HTML
function generatePostPageHtml({ post, prevPost, nextPost, postHtmlContent, basePath }) {
    const topicsTags = post.topics.map(t => `<span class="topic-tag">${t}</span>`).join(' ');

    const prevButton = prevPost ? `
        <a href="${basePath}${prevPost.relativeUrl}" class="pagination-btn prev">
            <span class="pagination-label">← Previous Post</span>
            <span class="pagination-title">${prevPost.year} · W${prevPost.weekNum}: ${escapeHtml(prevPost.title)}</span>
        </a>
    ` : '<div></div>';

    const nextButton = nextPost ? `
        <a href="${basePath}${nextPost.relativeUrl}" class="pagination-btn next">
            <span class="pagination-label">Next Post →</span>
            <span class="pagination-title">${nextPost.year} · W${nextPost.weekNum}: ${escapeHtml(nextPost.title)}</span>
        </a>
    ` : '<div></div>';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${escapeHtml(post.title)} - What I Learned · Christian Czupras</title>
    <meta name="description" content="${escapeHtml(post.excerpt)}">
    <link rel="icon" type="image/png" href="${basePath}assets/favicon.png">
    <link rel="stylesheet" href="${basePath}assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Left Corner: Back to czupras.de -->
    <div id="nav-left" class="glass-corner">
        <a href="https://czupras.de/" class="nav-brand" title="Back to Homepage">
            <img src="${basePath}assets/avatar.png" alt="Christian Czupras">
            <span>czupras.de</span>
        </a>
        <a href="${basePath}index.html" class="nav-tag">Blog Home</a>
    </div>

    <!-- Right Corner: Social Links -->
    <div id="nav-right" class="glass-corner">
        <a href="https://github.com/cczupras" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/christian-czupras/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/cczupras/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="mailto:christian@czupras.de" class="nav-icon-link" aria-label="Email" title="Email"><i class="fa-solid fa-envelope"></i></a>
    </div>

    <div class="background-container">
        <main class="layout-wrapper post-container">
            
            <!-- Post Header Card -->
            <header class="content-card post-header-card">
                <nav class="post-breadcrumbs">
                    <a href="${basePath}index.html"><i class="fa-solid fa-arrow-left"></i> All Posts</a>
                    <span>/</span>
                    <span>${post.year}</span>
                    <span>/</span>
                    <span>Week ${post.weekNum}</span>
                </nav>

                <div style="margin-bottom: 12px;">
                    <span class="week-badge">${post.year} · Week ${post.weekNum}</span>
                </div>

                <h1 class="post-main-title">${escapeHtml(post.title)}</h1>

                <div class="post-meta-row">
                    <div class="post-meta-item">
                        <i class="fa-regular fa-clock"></i>
                        <span>${post.readTimeMinutes} min read</span>
                    </div>
                    <div class="post-meta-item">
                        <i class="fa-solid fa-tags"></i>
                        <span>${topicsTags}</span>
                    </div>
                </div>
            </header>

            <!-- Post Content Card -->
            <article class="content-card">
                <div class="post-content">
                    ${postHtmlContent}
                </div>

                <!-- Post Navigation -->
                <div class="post-pagination">
                    ${prevButton}
                    ${nextButton}
                </div>
            </article>

            <!-- Author Card -->
            <section class="content-card author-card">
                <img src="${basePath}assets/avatar.png" alt="Christian Czupras" class="avatar">
                <div class="author-info">
                    <h3>Christian Czupras</h3>
                    <p>Software developer, tech explorer & lifelong learner. Documenting weekly discoveries in code, AI workflows, fitness, and life.</p>
                    <div class="author-socials">
                        <a href="https://czupras.de/" target="_blank"><i class="fa-solid fa-globe"></i> Website</a>
                        <a href="https://github.com/cczupras" target="_blank"><i class="fa-brands fa-github"></i> GitHub</a>
                        <a href="https://www.linkedin.com/in/christian-czupras/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
                    </div>
                </div>
            </section>

            <footer class="site-footer">
                <p>&copy; ${new Date().getFullYear()} <a href="https://czupras.de/">Christian Czupras</a> · What I Learned</p>
            </footer>

        </main>
    </div>

</body>
</html>`;
}

// Generate Index / Start Page HTML
function generateIndexPageHtml(posts) {
    const postCardsHtml = posts.map(post => {
        const topicsTags = post.topics.map(t => `<span class="topic-tag">${t}</span>`).join(' ');
        const topicsAttr = post.topics.join(',');

        return `
        <a href="${post.relativeUrl}" class="post-card" data-year="${post.year}" data-topics="${topicsAttr}">
            <div>
                <div class="post-card-header">
                    <span class="week-badge">${post.year} · W${post.weekNum}</span>
                    <span class="post-date"><i class="fa-regular fa-clock"></i> ${post.readTimeMinutes} min</span>
                </div>
                <h2 class="post-card-title">${escapeHtml(post.title)}</h2>
                <p class="post-card-excerpt">${escapeHtml(post.excerpt)}</p>
            </div>
            <div class="post-card-footer">
                <div class="post-topics">${topicsTags}</div>
                <span class="read-more-link">Read <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        </a>`;
    }).join('\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What I Learned · Christian Czupras Blog</title>
    <meta name="description" content="Weekly insights, software engineering, AI exploration, fitness, and lifelong learning notes by Christian Czupras.">
    <link rel="icon" type="image/png" href="assets/favicon.png">
    <link rel="stylesheet" href="assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Left Corner: Back to czupras.de -->
    <div id="nav-left" class="glass-corner">
        <a href="https://czupras.de/" class="nav-brand" title="Back to Homepage">
            <img src="assets/avatar.png" alt="Christian Czupras">
            <span>czupras.de</span>
        </a>
    </div>

    <!-- Right Corner: Social Links -->
    <div id="nav-right" class="glass-corner">
        <a href="https://czupras.de/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="Website" title="Personal Website"><i class="fa-solid fa-globe"></i></a>
        <a href="https://github.com/cczupras" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.linkedin.com/in/christian-czupras/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://www.instagram.com/cczupras/" target="_blank" rel="noopener noreferrer" class="nav-icon-link" aria-label="Instagram" title="Instagram"><i class="fa-brands fa-instagram"></i></a>
        <a href="mailto:christian@czupras.de" class="nav-icon-link" aria-label="Email" title="Email"><i class="fa-solid fa-envelope"></i></a>
    </div>

    <div class="background-container">
        <main class="layout-wrapper">

            <!-- Hero Card -->
            <header class="content-card hero-card">
                <img src="assets/avatar.png" alt="Christian Czupras" class="avatar">
                <h1 class="hero-title">What I <span>Learned</span> This Week</h1>
                <p class="hero-subtitle">
                    A weekly log of insights, AI experiments, software craftsmanship, endurance training, and personal growth by Christian Czupras.
                </p>
                <div class="hero-stats">
                    <div class="stat-pill">
                        <i class="fa-solid fa-book-open"></i>
                        <span id="posts-count">${posts.length} posts</span>
                    </div>
                    <div class="stat-pill">
                        <i class="fa-solid fa-calendar-check"></i>
                        <span>Weekly updates</span>
                    </div>
                    <div class="stat-pill">
                        <i class="fa-solid fa-code"></i>
                        <span>Tech & Life</span>
                    </div>
                </div>
            </header>

            <!-- Search and Filter Controls Card -->
            <section class="content-card controls-card">
                <div class="search-box">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="search-input" class="search-input" placeholder="Search posts by keyword, title, or topic..." aria-label="Search posts">
                </div>

                <div class="filter-row">
                    <div class="year-tabs" role="tablist" aria-label="Filter by Year">
                        <button class="year-tab-btn active" data-year="all">All Years</button>
                        <button class="year-tab-btn" data-year="2026">2026</button>
                        <button class="year-tab-btn" data-year="2025">2025</button>
                    </div>

                    <div class="topic-filters" aria-label="Filter by Topic">
                        <button class="topic-btn active" data-topic="all"><i class="fa-solid fa-layer-group"></i> All Topics</button>
                        <button class="topic-btn" data-topic="Tech"><i class="fa-solid fa-laptop-code"></i> Tech</button>
                        <button class="topic-btn" data-topic="Personal"><i class="fa-solid fa-pen-nib"></i> Personal</button>
                        <button class="topic-btn" data-topic="Sports & Health"><i class="fa-solid fa-heart-pulse"></i> Sports</button>
                        <button class="topic-btn" data-topic="Misc"><i class="fa-solid fa-robot"></i> Misc</button>
                    </div>
                </div>
            </section>

            <!-- Posts Grid -->
            <section class="posts-grid" id="posts-grid">
                ${postCardsHtml}
                
                <div id="no-results" class="no-results" style="display: none;">
                    <i class="fa-regular fa-face-frown-open"></i>
                    <p>No matching posts found. Try another search term or filter.</p>
                </div>
            </section>

            <footer class="site-footer">
                <p>&copy; ${new Date().getFullYear()} <a href="https://czupras.de/">Christian Czupras</a> · Published via GitHub Pages</p>
            </footer>

        </main>
    </div>

    <script src="assets/main.js"></script>
</body>
</html>`;
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

// Execute build
buildSite();
