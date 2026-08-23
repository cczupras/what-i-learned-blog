// Client-side interactions for What I Learned Blog

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const yearBtns = document.querySelectorAll('.year-tab-btn');
    const topicBtns = document.querySelectorAll('.topic-btn');
    const postCards = document.querySelectorAll('.post-card');
    const postsCountEl = document.getElementById('posts-count');
    const noResultsEl = document.getElementById('no-results');

    let currentYear = 'all';
    let currentTopic = 'all';
    let currentSearch = '';

    function filterPosts() {
        let visibleCount = 0;

        postCards.forEach(card => {
            const postYear = card.getAttribute('data-year');
            const postTopics = card.getAttribute('data-topics') || '';
            const postTitle = (card.querySelector('.post-card-title')?.innerText || '').toLowerCase();
            const postExcerpt = (card.querySelector('.post-card-excerpt')?.innerText || '').toLowerCase();
            const postWeek = (card.querySelector('.week-badge')?.innerText || '').toLowerCase();

            const matchesYear = (currentYear === 'all' || postYear === currentYear);
            const matchesTopic = (currentTopic === 'all' || postTopics.toLowerCase().includes(currentTopic.toLowerCase()));
            
            const searchLower = currentSearch.toLowerCase().trim();
            const matchesSearch = !searchLower || 
                postTitle.includes(searchLower) || 
                postExcerpt.includes(searchLower) || 
                postWeek.includes(searchLower);

            if (matchesYear && matchesTopic && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        if (postsCountEl) {
            postsCountEl.innerText = `${visibleCount} ${visibleCount === 1 ? 'post' : 'posts'}`;
        }

        if (noResultsEl) {
            if (visibleCount === 0) {
                noResultsEl.style.display = 'block';
            } else {
                noResultsEl.style.display = 'none';
            }
        }
    }

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value;
            filterPosts();
        });
    }

    // Year Tabs Listener
    yearBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            yearBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentYear = btn.getAttribute('data-year');
            filterPosts();
        });
    });

    // Topic Filters Listener
    topicBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('active') && btn.getAttribute('data-topic') !== 'all') {
                btn.classList.remove('active');
                currentTopic = 'all';
                document.querySelector('.topic-btn[data-topic="all"]')?.classList.add('active');
            } else {
                topicBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentTopic = btn.getAttribute('data-topic');
            }
            filterPosts();
        });
    });
});
