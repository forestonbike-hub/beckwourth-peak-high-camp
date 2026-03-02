# Beckwourth Peak High Camp Website

Static website built with [Astro](https://astro.build/), deployed on [Cloudflare Pages](https://pages.cloudflare.com/).

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build for Production

```bash
npm run build
```

The built site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Deploy to Cloudflare Pages

### First-Time Setup

1. Push this repo to GitHub (if not already done)
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
3. Go to **Workers & Pages** > **Create** > **Pages** > **Connect to Git**
4. Select this repository
5. Configure the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**

Cloudflare will give you a `.pages.dev` preview URL. Use that for review before connecting your custom domain.

### Connect Custom Domain (when ready)

1. In Cloudflare Pages, go to your project > **Custom domains**
2. Add `beckwourthpeakhighcamp.com`
3. Follow the DNS instructions Cloudflare provides

### Subsequent Deploys

Every push to the `main` branch will automatically trigger a new deployment.

## Project Structure

```
src/
  layouts/        Base page layout with header, footer, tracking tags
  components/     Header, Footer, and reusable UI components
  pages/          All website pages (Astro components)
    lodging/      Individual accommodation pages
    things-to-do/ Activity and trail pages
    events/       Event landing pages
    blog/         Blog index and post template
  content/        Markdown content (blog posts)
  styles/         Global CSS with design system variables
public/
  images/         All site images (property, lodging, activities, logos)
  robots.txt      Search engine directives
  _redirects      301 redirects from old WordPress URLs
```

## Editing Content

Most page content lives directly in the `.astro` files in `src/pages/`. To edit text:

1. Open the relevant `.astro` file
2. Find the text you want to change in the HTML section (below the `---` frontmatter)
3. Save the file
4. If running locally, changes appear instantly in the browser

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
description: "A short description for SEO"
date: 2026-06-15
author: "Forest"
image: "/images/blog/your-image.jpg"
tags: ["gravel biking", "lost sierra"]
---

Your post content here in Markdown...
```

3. Commit and push to deploy

### Adding Images

1. Add image files to the appropriate folder in `public/images/`
2. Reference them in your pages as `/images/folder/filename.jpg`
3. Use descriptive filenames (e.g., `north-cabin-bedroom-view.jpg`, not `IMG_1234.jpg`)

## Tracking Tags

All tracking tags fire on every page via the base layout:

- Google Tag Manager: GTM-WW8FD2SH
- Google Analytics (GA4): GT-KDBFW85
- Google Ads: AW-17384301511
- Facebook Pixel: 1403749613613407
- Maze Analytics: d36a929f-5b85-4614-b6c3-2e52abfc30dd

## Tech Stack

- **Framework:** Astro (static site generation)
- **Fonts:** Playfair Display + Lato (self-hosted)
- **Hosting:** Cloudflare Pages
- **Booking:** ResNexus (external links)
- **Analytics:** GA4, GTM, Facebook Pixel, Maze
