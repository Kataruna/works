"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import {
  allPlatforms,
  categories,
  categoryEmoji,
  platformEmoji,
  projects,
  type Platform,
} from "./projects";

export function ProjectList() {
  const [platform, setPlatform] = useState<Platform | "All">("All");

  const visible =
    platform === "All" ? projects : projects.filter((p) => p.platforms.includes(platform));

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="mr-1 text-sm text-faint">Show me:</span>
        <div role="group" aria-label="Filter by platform" className="contents">
          {(["All", ...allPlatforms] as const).map((p) => {
            const active = platform === p;
            return (
              <button
                key={p}
                type="button"
                aria-pressed={active}
                onClick={() => setPlatform(p)}
                className={`bouncy rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
                  active
                    ? "border-foreground bg-foreground text-background"
                    : "border-line bg-surface-card text-muted hover:border-foreground hover:text-foreground"
                }`}
              >
                {p === "All" ? "✨ All" : `${platformEmoji[p]} ${p}`}
              </button>
            );
          })}
        </div>
      </div>

      {categories.map((category) => {
        const items = visible.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <section key={`${category}-${platform}`} className="mt-20">
            <h2 className="reveal flex items-center gap-3 font-display text-2xl font-semibold">
              <span className="bob text-3xl" aria-hidden>
                {categoryEmoji[category]}
              </span>
              {category}
              <span className="squiggle-line h-3 flex-1" aria-hidden />
              <span className="rounded-full bg-surface-sunken px-2.5 py-0.5 text-sm text-muted">
                {items.length}
              </span>
            </h2>
            <div className="mt-10 space-y-20 md:space-y-24">
              {items.map((p, i) => (
                <ProjectCard key={p.slug} project={p} flip={i % 2 === 1} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
