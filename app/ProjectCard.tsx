import Image from "next/image";
import type { Project } from "./projects";

// next/image does not prepend basePath to src, so do it here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function Logo({ project }: { project: Project }) {
  if (!project.logo) {
    return (
      <div
        aria-hidden
        className="grid size-12 shrink-0 place-items-center rounded-xl text-lg font-semibold text-white"
        style={{ background: project.accent }}
      >
        {project.name.charAt(0)}
      </div>
    );
  }
  return (
    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-surface-sunken p-1.5">
      <Image
        src={`${basePath}${project.logo}`}
        alt=""
        width={40}
        height={40}
        className={project.logoDark ? "size-9 dark:hidden" : "size-9"}
      />
      {project.logoDark && (
        <Image
          src={`${basePath}${project.logoDark}`}
          alt=""
          width={40}
          height={40}
          className="hidden size-9 dark:block"
        />
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface-card p-6 transition-shadow hover:shadow-lg"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity group-hover:opacity-100"
        style={{ background: project.accent }}
      />
      <header className="flex items-start gap-4">
        <Logo project={project} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <span className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
              {project.status}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
      </header>

      <p className="mt-5 text-[15px] leading-relaxed">{project.description}</p>

      <ul className="mt-5 space-y-2 text-sm">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5">
            <span
              aria-hidden
              className="mt-[7px] size-1.5 shrink-0 rounded-full"
              style={{ background: project.accent }}
            />
            <span className="text-muted">{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="rounded-md bg-surface-sunken px-2 py-1 font-mono text-xs text-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <footer className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm">
        <span className="mr-auto text-xs text-faint">{project.platforms.join(" · ")}</span>
        {project.isPrivate ? (
          <span className="text-xs text-faint">Private repository</span>
        ) : (
          project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline decoration-line underline-offset-4 transition-colors hover:decoration-current"
            >
              {l.label} ↗
            </a>
          ))
        )}
      </footer>
    </article>
  );
}
