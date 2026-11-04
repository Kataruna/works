import type { CSSProperties } from "react";
import type { Project } from "../projects";
import { DeviceFrame } from "./Frames";
import { Mock } from "./Mocks";

/** The showcase area of a project: its animated illustration in a device frame. */
export function Stage({ project }: { project: Project }) {
  return (
    <figure className="m-0">
      {/* phones get a taller stage so the screen is big enough to read */}
      <div
        aria-hidden
        className={`stage relative grid ${project.showcase.frame === "phone" ? "aspect-[4/5]" : "aspect-[4/3]"} place-items-center overflow-hidden rounded-[1.75rem] p-4 sm:p-6`}
        style={{ "--accent": project.accent } as CSSProperties}
      >
        <DeviceFrame frame={project.showcase.frame} title={project.name}>
          <Mock kind={project.showcase.mock} />
        </DeviceFrame>
      </div>
      <figcaption className="mt-2.5 text-center text-xs text-faint">
        ✨ Animated illustration of {project.name}
      </figcaption>
    </figure>
  );
}
