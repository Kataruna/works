"use client";

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { allPlatforms, categories, projects, type Platform } from "./projects";

export function ProjectList() {
  const [platform, setPlatform] = useState<Platform | "All">("All");

  const visible =
    platform === "All" ? projects : projects.filter((p) => p.platforms.includes(platform));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by platform"
        className="flex flex-wrap gap-2"
      >
        {(["All", ...allPlatforms] as const).map((p) => {
          const active = platform === p;
          return (
            <button
              key={p}
              type="button"
              aria-pressed={active}
              onClick={() => setPlatform(p)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                active
                  ? "border-foreground bg-foreground text-background"
                  : "border-line text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          );
        })}
      </div>

      {categories.map((category) => {
        const items = visible.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className="mt-14">
            <h2 className="flex items-baseline gap-3 text-sm font-medium uppercase tracking-widest text-faint">
              {category}
              <span className="h-px flex-1 bg-line" />
              <span className="font-mono">{items.length}</span>
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
