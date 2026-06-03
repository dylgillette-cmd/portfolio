# dylangillette.com

Personal site + writing for Dylan Gillette — built with [Astro](https://astro.build),
hosted free on GitHub Pages.

---

## 1. Run it on your computer

You need [Node.js](https://nodejs.org) (LTS) installed. Then, in this folder:

```bash
npm install      # one time
npm run dev      # start the local preview at http://localhost:4321
```

Edit a file, save, and the browser updates instantly.

## 2. Make it yours (the only files you normally touch)

| What you want to change | File |
|---|---|
| Name, title, contact, hero line, skills, all job history | `src/data/resume.ts` |
| Your real domain (for share links + sitemap) | `astro.config.mjs` → `site` |
| The domain GitHub Pages serves | `public/CNAME` |
| Colors and fonts | top of `src/styles/global.css` |
| A new article response | add a `.md` file in `src/content/posts/` |

### Writing a new post

Create a file like `src/content/posts/my-post.md`:

```markdown
---
title: "My headline"
description: "One-sentence summary (also used for the link preview)."
pubDate: 2026-01-15
draft: false
sourceTitle: "The article I'm responding to"      # optional
sourceUrl: "https://the-article-url.com"          # optional
sourcePublication: "Where it ran"                 # optional
---

Your writing here. Plain Markdown — **bold**, _italics_, lists, > quotes, etc.
```

Set `draft: true` to keep a post hidden until you're ready.

## 3. Put it online (free)

1. Push this folder to a new GitHub repo on the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically on every push.
4. **Custom domain:** still under Settings → Pages, enter your domain and follow the DNS instructions:
   - For `www.yourdomain.com`: add a **CNAME** record pointing to `YOURUSERNAME.github.io`.
   - For the bare `yourdomain.com`: add the four GitHub **A records** (and/or an `ALIAS`/`ANAME`) — GitHub lists the exact IPs.
   - Make sure `public/CNAME` and `site` in `astro.config.mjs` match the domain you choose.
5. Tick **Enforce HTTPS** once it's available (free).

After that, every `git push` redeploys the live site in a minute or two.

## 4. Rich link previews (recommended)

Drop a **1200×630 px** image named `og-image.png` into the `public/` folder. That's
what shows up when you share a link on LinkedIn — high-leverage for a marketer.

---

Built to be fast, accessible, and cheap to run. Total recurring cost: just your domain.
