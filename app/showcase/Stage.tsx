"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "../projects";
import { DeviceFrame } from "./Frames";
import { Mock } from "./Mocks";

// next/image does not prepend basePath to src, so do it here.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * The showcase area of a project: real screenshots when the project has any,
 * otherwise an animated mockup in a device frame, labelled as a mockup.
 */
export function Stage({ project }: { project: Project }) {
  const { showcase, accent } = project;
  const shots = showcase.screenshots ?? [];
  const [index, setIndex] = useState(0);
  const current = shots[index];

  return (
    <figure className="m-0">
      <div
        className="stage relative grid aspect-[4/3] place-items-center overflow-hidden rounded-[1.75rem] p-4 sm:p-6"
        style={{ "--accent": accent } as React.CSSProperties}
      >
        {current ? (
          <Image
            key={current.src}
            src={`${basePath}${current.src}`}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="(min-width: 768px) 480px, 100vw"
            className="stage-shot max-h-full w-auto rounded-xl object-contain shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)]"
          />
        ) : showcase.mock ? (
          <>
            <div className="contents" aria-hidden>
              <DeviceFrame frame={showcase.frame} title={project.name}>
                <Mock kind={showcase.mock} />
              </DeviceFrame>
            </div>
            <span className="absolute left-3 top-3 rounded-full bg-[var(--surface-card)]/85 px-2.5 py-1 text-[11px] font-semibold text-muted backdrop-blur">
              ✏️ Mockup · screenshot coming soon
            </span>
          </>
        ) : null}
      </div>

      {shots.length > 1 && (
        <div role="tablist" aria-label={`${project.name} screenshots`} className="mt-3 flex flex-wrap justify-center gap-2">
          {shots.map((s, i) => (
            <button
              key={s.src}
              role="tab"
              type="button"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`bouncy rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                i === index ? "text-white" : "bg-surface-sunken text-muted hover:text-foreground"
              }`}
              style={i === index ? { background: accent } : undefined}
            >
              {s.caption ?? `Screenshot ${i + 1}`}
            </button>
          ))}
        </div>
      )}
      {current && shots.length === 1 && current.caption && (
        <figcaption className="mt-3 text-center text-xs text-faint">{current.caption}</figcaption>
      )}
    </figure>
  );
}
