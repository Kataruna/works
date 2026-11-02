# app-pages

The project showcase for [Kataruna](https://github.com/Kataruna), published at
**https://kataruna.github.io/app-pages/**.

Built with Next.js 16 (App Router) as a static export and deployed to GitHub Pages by
`.github/workflows/nextjs.yml` on every push to `main`.

## Editing the projects

All page content lives in [`app/projects.ts`](app/projects.ts). Each entry has a name, tagline,
description, highlights, tech stack, platforms, status and links. Add, remove or reorder entries there.
Logos go in `public/` and are referenced as `/name.svg`. Entries without a logo show a coloured
monogram. Set `isPrivate: true` to describe a project without linking its repository.

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn build      # writes the static site to out/
```

## How the GitHub Pages build works

`next.config.ts` sets `output: "export"`, `trailingSlash: true` and `images.unoptimized: true`
(Pages has no server). When `GITHUB_ACTIONS=true` it also sets `basePath: "/app-pages"`, because
the site is served from a sub-path. `next/image` does not add `basePath` to `src` on its own, so
components prefix image paths with `NEXT_PUBLIC_BASE_PATH`.

To reproduce the deployed build locally: `GITHUB_ACTIONS=true yarn build`.

Static export rules out server features: no Server Actions, dynamic Route Handlers, middleware,
or dynamic routes without `generateStaticParams`.

In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
