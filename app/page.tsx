import { ProjectList } from "./ProjectList";
import { projects } from "./projects";

const languages = new Set(projects.flatMap((p) => p.stack));
const platforms = new Set(projects.flatMap((p) => p.platforms));

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-8">
      <header className="flex items-center justify-between py-6 text-sm">
        <span className="font-semibold tracking-tight">Kataruna</span>
        <a
          href="https://github.com/Kataruna"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted transition-colors hover:text-foreground"
        >
          GitHub ↗
        </a>
      </header>

      <section className="pt-16 pb-14 sm:pt-24">
        <p className="font-mono text-sm text-faint">Projects · Sarabunari</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Small tools that make everyday work feel lighter.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Desktop utilities for Windows and macOS, Unity editor packages, and Android apps. Most of
          them started as something I wanted and couldn&apos;t find, from a background in game and
          interactive media, now studying data science.
        </p>

        <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
          {[
            [projects.length, "projects"],
            [platforms.size, "platforms"],
            [languages.size, "technologies"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="text-sm text-faint">{label}</dt>
              <dd className="mt-1 text-3xl font-semibold tabular-nums">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <main className="pb-24">
        <ProjectList />
      </main>

      <footer className="border-t border-line py-8 text-sm text-faint">
        © {new Date().getFullYear()} Kataruna · Built with Next.js, hosted on GitHub Pages.
      </footer>
    </div>
  );
}
