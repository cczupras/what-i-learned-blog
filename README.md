# What I Learned This Week 🚀

A weekly personal and tech blog by **Christian Czupras**, documenting learnings across software development, AI workflows, fitness, and life.

Design aesthetics and visual styling mirror [czupras.de](https://czupras.de/) with a sleek dark glassmorphism UI.

---

## 📁 Repository Structure

```
what-i-learned-blog/
├── assets/                    # Shared assets (background.png, avatar.png, favicon.png, style.css, main.js)
├── 2025/                      # Weekly Markdown posts for 2025
│   └── 2025w11 - Prompt Week/ # Post folder with index.md
├── 2026/                      # Weekly Markdown posts for 2026
├── _layouts/                  # Layout templates
├── src/
│   └── build.js               # Static generator that parses Markdown & Notion tags into docs/
├── docs/                      # Generated static site served directly by GitHub Pages
│   ├── index.html             # Start page (Search, Year tabs, Topic filters, Post cards)
│   ├── assets/                # Compiled stylesheets, scripts, and images
│   ├── 2025/                  # Compiled post pages
│   └── 2026/                  # Compiled post pages
└── package.json
```

---

## 🛠️ Adding a New Post

1. Create a new folder inside `2026/` (or current year), e.g. `2026/2026w1 - New Horizons/`.
2. Add an `index.md` with front matter:

```markdown
---
layout: default
title: "2026w1 - New Horizons"
---

# #1 Personal {color="green_bg"}
## Personal Note ✒️
Your weekly personal note...

# #2 Tech {color="blue_bg"}
## Interesting Learnings 💻
Your tech learnings...

# #3 Sports, Food & Health {color="orange_bg"}
## Training Summary 🏋️‍♀️
Fitness & health updates...

# #4 Misc {color="gray_bg"}
## Reflections 🤖
Other thoughts...
```

---

## 🏗️ Building and Publishing

### Build the static site to `docs/`:
```bash
npm run build
```

### Preview locally:
```bash
npm run dev
# or
npx serve docs
```

### Deploying to GitHub Pages:
1. Push your changes and the `docs/` folder to GitHub.
2. In your GitHub repository settings, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Select the **Branch**: `main` (or default branch) and folder: `/docs`.
5. Save. Your blog will be live!
