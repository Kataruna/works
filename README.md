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

## Adding screenshots

Every project has a showcase area. Until it has screenshots, it shows an animated mockup in a
device frame, labelled "Mockup · screenshot coming soon".

1. Put the image in `public/`, e.g. `public/windmill-ring.webp` (WebP or PNG, about 1400 px wide is plenty).
2. Add it to that project's `showcase.screenshots` in `app/projects.ts`:

   ```ts
   showcase: {
     frame: "desktop",
     mock: "windmill",
     screenshots: [
       { src: "/windmill-ring.webp", alt: "The snap ring over a window", width: 1400, height: 900, caption: "Snap ring" },
     ],
   },
   ```

As soon as the list has an entry, the mockup is replaced by the screenshot. With two or more,
small tabs (using each `caption`) let visitors switch between them. Lemon already uses this.
`width` and `height` are the image's real pixel size. Phone screenshots work too: they are fitted
inside the stage.

The mockups live in `app/showcase/Mocks.tsx` and their animations in `app/globals.css`
(the `mock-` classes). Visitors who turn on "reduce motion" see them still.

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
