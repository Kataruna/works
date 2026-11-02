import Image from "next/image";
import type { Project } from "./projects";
import { Stage } from "./showcase/Stage";

// next/image does not prepend basePath to src, so do it here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function Logo({ project, size = 48 }: { project: Project; size?: number }) {
  const style = { width: size, height: size };
  if (!project.logo) {
    return (
      <div
        aria-hidden
        className="grid shrink-0 place-items-center rounded-2xl font-display text-xl font-semibold text-white"
        style={{ ...style, background: project.accent }}
      >
        {project.name.charAt(0)}
      </div>
    );
  }
  return (
    <div
      className={`grid shrink-0 place-items-center overflow-hidden rounded-2xl ${project.logoFullBleed ? "" : "bg-surface-sunken p-1.5"}`}
      style={style}
    >
      <Image
        src={`${basePath}${project.logo}`}
        alt=""
        width={size}
        height={size}
        className={`h-full w-full object-contain ${project.logoDark ? "dark:hidden" : ""}`}
      />
      {project.logoDark && (
        <Image
          src={`${basePath}${project.logoDark}`}
          alt=""
          width={size}
          height={size}
          className="hidden h-full w-full object-contain dark:block"
        />
      )}
    </div>
  );
}

/** One project: a showcase stage and its description, side by side on wide screens. */
export function ProjectCard({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article
      id={project.slug}
      className="reveal grid scroll-mt-24 items-center gap-8 md:grid-cols-2 md:gap-12"
    >
      <div className={`tilt ${flip ? "md:order-2" : ""}`}>
        <Stage project={project} />
      </div>

      <div>
        <header className="flex items-center gap-4">
          <div className="wiggle-on-hover">
            <Logo project={project} />
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-3xl font-semibold tracking-tight">{project.name}</h3>
            <span
              className="mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{ background: `color-mix(in oklab, ${project.accent} 22%, transparent)` }}
            >
              {project.status}
            </span>
          </div>
        </header>

        <p className="mt-4 font-display text-xl italic leading-snug text-muted">{project.tagline}</p>
        <p className="mt-4 leading-relaxed">{project.description}</p>

        <ul className="mt-5 space-y-2 text-[15px]">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span
                aria-hidden
                className="mt-[8px] size-2 shrink-0 rounded-full"
                style={{ background: project.accent }}
              />
              <span className="text-muted">{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full bg-surface-sunken px-2.5 py-1 text-xs font-semibold text-muted">
              {s}
            </span>
          ))}
        </div>

        <footer className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          {project.isPrivate ? (
            <span className="rounded-full border border-dashed border-line px-3 py-1.5 text-faint">
              🔒 Private repository
            </span>
          ) : (
            project.links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bouncy rounded-full px-4 py-2 font-semibold ${
                  i === 0 ? "bg-foreground text-background" : "border border-line hover:border-foreground"
                }`}
              >
                {l.label} ↗
              </a>
            ))
          )}
          <span className="ml-auto text-xs text-faint">{project.platforms.join(" · ")}</span>
        </footer>
      </div>
    </article>
  );
}
