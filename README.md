# works

The project showcase for [Kataruna](https://github.com/Kataruna), published at
**https://kataruna.github.io/works/**.

Built with Next.js 16 (App Router) as a static export and deployed to GitHub Pages by
`.github/workflows/nextjs.yml` on every push to `main`.

## Editing the projects

All page content lives in [`app/projects.ts`](app/projects.ts). Each entry has a name, tagline,
description, highlights, tech stack, platforms, status and links. Add, remove or reorder entries there.
Logos go in `public/` and are referenced as `/name.svg`. Entries without a logo show a coloured
monogram. Set `isPrivate: true` to describe a project without linking its repository.

## Animated illustrations

Each project is shown with a small animated illustration of its main idea, inside a device
frame. In `app/projects.ts`, `showcase.frame` picks the frame (`desktop`, `mac`, `tablet`,
`unity` or `phone`) and `showcase.mock` picks the illustration.

The illustrations are plain HTML elements in `app/showcase/Mocks.tsx`, animated with CSS
keyframes in `app/globals.css` (the `mock-` classes), so they need no JavaScript. To add one for a
new project, add a name to `MockKind`, draw it in `Mocks.tsx`, and add its keyframes. Visitors who
turn on "reduce motion" see them still.

## Develop

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint
yarn build      # writes the static site to out/
```

## How the GitHub Pages build works

`next.config.ts` sets `output: "export"`, `trailingSlash: true` and `images.unoptimized: true`
(Pages has no server). When `GITHUB_ACTIONS=true` it sets `basePath` to `/<repository name>` (read from `GITHUB_REPOSITORY`), because
the site is served from a sub-path. `next/image` does not add `basePath` to `src` on its own, so
components prefix image paths with `NEXT_PUBLIC_BASE_PATH`.

To reproduce the deployed build locally: `GITHUB_ACTIONS=true yarn build`.

Static export rules out server features: no Server Actions, dynamic Route Handlers, middleware,
or dynamic routes without `generateStaticParams`.

In the repository settings, **Pages → Source** must be set to **GitHub Actions**.
