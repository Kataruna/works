import type { ReactNode } from "react";
import type { Frame } from "../projects";

/** Device chrome around a mockup. Each frame fills its stage proportionally. */
export function DeviceFrame({ frame, title, children }: { frame: Frame; title: string; children: ReactNode }) {
  switch (frame) {
    case "phone":
      return (
        <div className="relative mx-auto aspect-[9/20] h-[94%] rounded-[2rem] bg-[#2b211b] p-[7px] shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)]">
          <div className="@container relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#fffaf3]">
            <div className="absolute left-1/2 top-1.5 z-20 h-3 w-14 -translate-x-1/2 rounded-full bg-[#2b211b]" />
            {children}
          </div>
        </div>
      );
    case "tablet":
      return (
        <div className="relative mx-auto aspect-[4/3] w-[86%] rounded-[1.4rem] bg-[#2b211b] p-2.5 shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)]">
          <div className="relative h-full w-full overflow-hidden rounded-[0.9rem] bg-[#121614]">{children}</div>
        </div>
      );
    case "unity":
      return (
        <div className="relative mx-auto flex aspect-[4/3] w-[88%] flex-col overflow-hidden rounded-lg bg-[#282828] shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)]">
          <div className="flex h-6 shrink-0 items-end gap-1 bg-[#191919] px-2 text-[9px] text-[#c4c4c4]">
            <span className="rounded-t bg-[#383838] px-2 py-0.5">{title}</span>
            <span className="px-2 py-0.5 text-[#8a8a8a]">Project</span>
          </div>
          <div className="relative min-h-0 flex-1">{children}</div>
        </div>
      );
    case "mac":
      return (
        <div className="relative mx-auto flex aspect-[4/3] w-[90%] flex-col overflow-hidden rounded-xl bg-[#fffaf3] shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)] ring-1 ring-black/5">
          <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-black/5 bg-[#f4ead9] px-2.5">
            <span className="size-2 rounded-full bg-[#ee6a5f]" />
            <span className="size-2 rounded-full bg-[#f5bd4f]" />
            <span className="size-2 rounded-full bg-[#61c454]" />
            <span className="ml-2 text-[9px] font-semibold text-[#6f5a48]">{title}</span>
          </div>
          <div className="relative min-h-0 flex-1">{children}</div>
        </div>
      );
    case "desktop":
    default:
      return (
        <div className="relative mx-auto aspect-[16/10] w-[94%] overflow-hidden rounded-xl shadow-[0_18px_40px_-12px_rgba(60,35,20,0.45)] ring-1 ring-black/5">
          {children}
        </div>
      );
  }
}
