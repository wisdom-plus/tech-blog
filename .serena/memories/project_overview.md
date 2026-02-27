# Project Overview
- Name: tech-blog (site title: TechAmply)
- Purpose: A Japanese technical blog built with Next.js. It fetches articles and tags from microCMS, renders article lists/details, category pages, RSS feed, sitemap, and static metadata pages.
- Primary stack: Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Sass, Biome, microcms-js-sdk.
- Content source: microCMS service domain `xbqib4kwoe` via `lib/client.js`.
- Main routes live under `src/app`, with article detail pages in `src/app/article/[id]` and list/category pages in `src/app/(lists)`.
- Shared UI components are in `src/component`, utilities in `src/lib`, API fetch wrappers in `src/api`.