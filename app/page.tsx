import { Logo } from "./ProjectCard";
import { ProjectList } from "./ProjectList";
import { projects } from "./projects";

const technologies = new Set(projects.flatMap((p) => p.stack));
const platforms = new Set(projects.flatMap((p) => p.platforms));

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* soft floating blobs behind the hero */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px]">
        <span className="blob left-[-8%] top-[-6%] size-[420px] bg-[#f6c99b]" />
        <span className="blob right-[-10%] top-[8%] size-[360px] bg-[#e9a3a0]" style={{ animationDelay: "-6s" }} />
        <span className="blob left-[35%] top-[40%] size-[300px] bg-[#cfe3b0]" style={{ animationDelay: "-11s" }} />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-8">
        <header className="flex items-center justify-between py-6">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid size-8 place-items-center rounded-xl bg-foreground text-background">K</span>
            Kataruna
          </a>
          <a
            href="https://github.com/Kataruna"
            target="_blank"
            rel="noopener noreferrer"
            className="bouncy rounded-full border border-line bg-surface-card px-4 py-1.5 text-sm font-semibold"
          >
            GitHub ↗
          </a>
        </header>

        <section id="top" className="grid items-center gap-12 pt-12 pb-20 sm:pt-20 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="fade-up inline-flex items-center gap-2 rounded-full bg-surface-card px-3 py-1 text-sm font-semibold text-muted shadow-sm">
              <span className="wave inline-block">👋</span> Hi, I&apos;m Kataruna
            </p>
            <h1
              className="fade-up mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
              style={{ animationDelay: "0.08s" }}
            >
              Little apps,
              <br />
              made with{" "}
              <span className="relative whitespace-nowrap">
                care
                <svg
                  aria-hidden
                  viewBox="0 0 200 20"
                  preserveAspectRatio="none"
                  className="draw-underline absolute -bottom-2 left-0 h-4 w-full text-[#ee9a63]"
                >
                  <path d="M3 14 C 40 4, 70 18, 105 9 S 170 6, 197 12" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
            <p
              className="fade-up mt-8 max-w-xl text-lg leading-relaxed text-muted"
              style={{ animationDelay: "0.16s" }}
            >
              Cozy desktop tools for Windows and macOS, helpers for the Unity editor, and Android apps.
              Most of them began as something I wished existed, so I made it. Come have a look around!
            </p>

            <dl className="fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: "0.24s" }}>
              {[
                [projects.length, "projects", "🧺"],
                [platforms.size, "platforms", "🪴"],
                [technologies.size, "technologies", "🧰"],
              ].map(([value, label, emoji]) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl bg-surface-card px-4 py-3 shadow-sm">
                  <span className="text-2xl" aria-hidden>
                    {emoji}
                  </span>
                  <div>
                    <dd className="font-display text-2xl font-semibold leading-none tabular-nums">{value}</dd>
                    <dt className="mt-1 text-xs text-faint">{label}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* a little shelf of app icons, gently bobbing */}
          <div className="fade-up grid grid-cols-4 gap-4 justify-self-center sm:gap-5" style={{ animationDelay: "0.3s" }}>
            {projects.map((p, i) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                title={p.name}
                className="bob bouncy rounded-[1.4rem] bg-surface-card p-2.5 shadow-[0_10px_24px_-10px_rgba(60,35,20,0.35)]"
                style={{ animationDelay: `${i * -0.45}s`, rotate: `${[-4, 3, -2, 5, 2, -5, 4, -3][i % 8]}deg` }}
              >
                <Logo project={p} size={56} />
                <span className="sr-only">{p.name}</span>
              </a>
            ))}
          </div>
        </section>

        <main className="pb-28">
          <ProjectList />
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-line py-10 text-sm text-faint">
          <span>Made with ☕ and curiosity · © {new Date().getFullYear()} Kataruna</span>
          <a href="#top" className="bouncy rounded-full bg-surface-card px-4 py-1.5 font-semibold text-muted shadow-sm">
            Back to top ↑
          </a>
        </footer>
      </div>
    </div>
  );
}
