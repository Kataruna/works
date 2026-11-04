import type { CSSProperties } from "react";
import type { MockKind } from "../projects";
import { CookiesMock } from "./CookiesMock";

/*
 * Animated illustrations of each app's main idea. They are drawn with plain
 * elements and CSS keyframes (see globals.css, "mock-" prefix), so they need
 * no JavaScript and stay sharp at any size.
 */

const d = (seconds: number): CSSProperties => ({ animationDelay: `${seconds}s` });

function WindmillMock() {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,#f6c99b,#e9a3a0_45%,#a7b8de)]">
      {/* other windows */}
      <div className="absolute left-[8%] top-[12%] h-[40%] w-[34%] rounded-md bg-white/50" />
      <div className="absolute right-[10%] bottom-[20%] h-[36%] w-[30%] rounded-md bg-white/40" />
      {/* the window being snapped */}
      <div className="mock-windmill-window absolute overflow-hidden rounded-md bg-[#fffaf3] shadow-lg">
        <div className="flex h-3.5 items-center justify-end gap-1 bg-[#f4ead9] px-1.5">
          <span className="h-0.5 w-1.5 bg-[#a08a74]" />
          <span className="size-1.5 border border-[#a08a74]" />
          <span className="text-[7px] leading-none text-[#a08a74]">✕</span>
        </div>
        <div className="space-y-1 p-2">
          <div className="h-1.5 w-3/4 rounded bg-[#eadcc6]" />
          <div className="h-1.5 w-1/2 rounded bg-[#eadcc6]" />
          <div className="h-1.5 w-2/3 rounded bg-[#eadcc6]" />
        </div>
      </div>
      {/* the radial ring */}
      <div className="mock-windmill-ring absolute left-1/2 top-1/2 aspect-square w-[24%] max-w-28 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full border-[6px] border-white/80 bg-white/25 backdrop-blur-sm" />
        <div className="mock-windmill-aim absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5b9bd5] shadow" />
      </div>
      {/* taskbar */}
      <div className="absolute inset-x-0 bottom-0 flex h-[7%] items-center justify-center gap-1.5 bg-white/55">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="size-2.5 rounded-sm bg-[#6f5a48]/40" />
        ))}
      </div>
    </div>
  );
}

function FileTile({ name, color, ext }: { name: string; color: string; ext: string }) {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative h-8 w-6 rounded-[3px] shadow-sm" style={{ background: color }}>
        <span className="absolute right-0 top-0 size-2 rounded-bl-[3px] bg-white/60" />
        <span className="absolute inset-x-0 bottom-1 text-center text-[5px] font-bold text-white">{ext}</span>
      </div>
      <span className="text-[7px] text-[#6f5a48]">{name}</span>
    </div>
  );
}

function LemonMock() {
  // Six formats around the wheel, starting at the top and going clockwise.
  const formats = ["PNG", "JPG", "WEBP", "PDF", "GIF", "TIFF"];
  return (
    <div className="absolute inset-0 bg-[#fbf5ec]">
      <div className="flex h-[14%] items-center gap-1.5 border-b border-black/5 px-2.5 text-[8px] font-semibold text-[#6f5a48]">
        <span>‹ ›</span> 📁 Holiday photos
      </div>
      {/* files in the folder */}
      <div className="absolute left-[8%] top-[20%]"><FileTile name="Beach.heic" color="#7fb3d5" ext="HEIC" /></div>
      <div className="absolute left-[30%] top-[20%]"><FileTile name="Trip.mov" color="#a77bd6" ext="MOV" /></div>
      <div className="absolute left-[52%] top-[20%]"><FileTile name="Notes.md" color="#8bb83a" ext="MD" /></div>
      <div className="absolute left-[74%] top-[20%]"><FileTile name="Sunset.heic" color="#ee9a63" ext="HEIC" /></div>
      {/* the converted copy that appears next to the original */}
      <div className="mock-lemon-new absolute left-[74%] top-[52%]">
        <FileTile name="Sunset.jpg" color="#f2b632" ext="JPG" />
      </div>

      {/* the conversion wheel */}
      <div className="mock-lemon-wheel absolute left-1/2 top-[62%] aspect-square w-[34%]">
        <div className="absolute inset-0 rounded-full bg-[#3a2a1e]/90 shadow-xl" />
        {formats.map((f, i) => {
          const angle = ((i * 60 - 90) * Math.PI) / 180;
          return (
            <span
              key={f}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-1.5 py-0.5 text-[7px] font-bold text-[#f5e9da] ${f === "JPG" ? "mock-lemon-target" : ""}`}
              style={{ left: `${50 + 36 * Math.cos(angle)}%`, top: `${50 + 36 * Math.sin(angle)}%` }}
            >
              {f}
            </span>
          );
        })}
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base">🍋</span>
      </div>

      {/* the file being dragged, with the pointer */}
      <div className="mock-lemon-drag absolute">
        <div className="relative -translate-x-1/2 -translate-y-1/2 opacity-90">
          <div className="relative h-8 w-6 rounded-[3px] bg-[#ee9a63] shadow-lg">
            <span className="absolute right-0 top-0 size-2 rounded-bl-[3px] bg-white/60" />
          </div>
          <svg viewBox="0 0 12 16" className="absolute -bottom-2 -right-2 h-3.5 w-3">
            <path d="M1 1 L1 13 L4 10 L6.5 15 L8.5 14 L6 9 L10.5 9 Z" fill="#fff" stroke="#3a2a1e" strokeWidth="1" />
          </svg>
        </div>
        <span className="mock-lemon-shake absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-1.5 py-0.5 text-[7px] font-bold text-[#3a2a1e] shadow">
          shake!
        </span>
      </div>
    </div>
  );
}

function TeleMock() {
  const bars = [0.55, 0.8, 0.35, 0.7, 0.45, 0.9, 0.6, 0.4];
  return (
    <div className="absolute inset-0 grid grid-cols-3 grid-rows-[auto_1fr_1fr] gap-2 p-3 font-mono text-[9px] text-[#9fe0c3]">
      <div className="col-span-3 flex items-center justify-between text-[#5fbf98]">
        <span>● LIVE · 1 Hz</span>
        <span>192.168.1.20:7878</span>
      </div>
      <div className="col-span-2 flex flex-col rounded-md bg-[#1c2420] p-2">
        <div className="flex justify-between">
          <span>CPU</span>
          <span className="mock-blink">23%</span>
        </div>
        <div className="relative mt-1 flex-1 overflow-hidden">
          <svg className="mock-tele-wave absolute inset-y-0 left-0 h-full w-[200%]" viewBox="0 0 200 40" preserveAspectRatio="none">
            <path
              d="M0 22 Q6.25 8 12.5 22 T25 22 T37.5 22 T50 22 T62.5 22 T75 22 T87.5 22 T100 22 T112.5 22 T125 22 T137.5 22 T150 22 T162.5 22 T175 22 T187.5 22 T200 22"
              vectorEffect="non-scaling-stroke"
              fill="none"
              stroke="#3fae8c"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col rounded-md bg-[#1c2420] p-2">
        <span>RAM</span>
        <span className="mt-auto text-lg text-white">11.2</span>
        <span className="text-[#5fbf98]">of 32 GB</span>
      </div>
      <div className="col-span-2 flex items-end gap-1 rounded-md bg-[#1c2420] p-2">
        {bars.map((h, i) => (
          <span
            key={i}
            className="mock-tele-bar flex-1 rounded-sm bg-[#3fae8c]"
            style={{ height: `${h * 100}%`, ...d(i * -0.27) }}
          />
        ))}
      </div>
      <div className="space-y-1 rounded-md bg-[#1c2420] p-2">
        <span>TOP</span>
        {["game.exe", "chrome", "obs64"].map((n, i) => (
          <div key={n} className="flex justify-between text-[8px]">
            <span className="text-white/80">{n}</span>
            <span>{[31, 9, 4][i]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuaestioMock() {
  const columns = ["Bug", "Feature", "Task"];
  return (
    <div className="absolute inset-0 bg-[#fbf5ec] p-2.5">
      <div className="mb-2 flex gap-1">
        {["acme/web", "acme/api", "me/notes"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-2 py-0.5 text-[8px] ${i === 0 ? "bg-[#8bb83a] text-white" : "bg-[#f0e6d6] text-[#6f5a48]"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="relative grid h-[82%] grid-cols-3 gap-2">
        {columns.map((c, ci) => (
          <div key={c} className="rounded-lg bg-[#f2e8d8] p-1.5">
            <div className="mb-1.5 text-[8px] font-bold text-[#6f5a48]">{c}</div>
            {[0, 1].slice(0, ci === 2 ? 1 : 2).map((k) => (
              <div key={k} className="mb-1.5 space-y-1 rounded-md bg-white p-1.5 shadow-sm">
                <div className="h-1.5 w-4/5 rounded bg-[#e3d4bd]" />
                <div className="flex gap-1">
                  <span className="h-1.5 w-4 rounded-full bg-[#f5bd4f]/70" />
                  <span className="h-1.5 w-3 rounded-full bg-[#a7b8de]" />
                </div>
              </div>
            ))}
          </div>
        ))}
        {/* the card that travels between columns */}
        <div className="mock-quaestio-card absolute top-[52%] w-[29%] space-y-1 rounded-md bg-white p-1.5 shadow-md ring-2 ring-[#8bb83a]">
          <div className="h-1.5 w-4/5 rounded bg-[#e3d4bd]" />
          <div className="flex gap-1">
            <span className="h-1.5 w-4 rounded-full bg-[#ee6a5f]/70" />
            <span className="h-1.5 w-5 rounded-full bg-[#8bb83a]/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

function UnityField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-[42%] truncate text-[#c4c4c4]">{label}</span>
      <span className="flex-1 truncate rounded-sm bg-[#2a2a2a] px-1 py-px text-[#d8d8d8]">{value}</span>
    </div>
  );
}

function AttributorMock() {
  return (
    <div className="absolute inset-0 space-y-1.5 overflow-hidden bg-[#383838] p-2 text-[8px]">
      <div className="flex items-center gap-1.5 border-b border-black/30 pb-1.5 text-[9px] font-bold text-[#d8d8d8]">
        <span className="size-2.5 rounded-sm bg-[#a77bd6]" /> Player (Script)
      </div>
      <div className="rounded border border-[#4a4a4a] p-1.5">
        <div className="mb-1 font-bold text-[#d8d8d8]">Movement</div>
        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
          <UnityField label="Speed" value="6.5" />
          <UnityField label="Jump" value="12" />
          <UnityField label="Gravity" value="-24" />
          <UnityField label="Air ctl" value="0.4" />
        </div>
      </div>
      <div className="rounded border border-[#4a4a4a] p-1.5">
        <div className="flex items-center gap-1 font-bold text-[#d8d8d8]">
          <span className="mock-attr-caret inline-block">▸</span> Events
        </div>
        <div className="mock-attr-fold space-y-1 overflow-hidden">
          <UnityField label="On Jump" value="Audio.Play" />
          <UnityField label="On Land" value="Dust.Emit" />
        </div>
      </div>
      <div className="opacity-70">
        <UnityField label="Id (ReadOnly)" value="1042" />
      </div>
      <div className="flex gap-1.5 pt-0.5">
        <span className="mock-attr-button rounded bg-[#585858] px-2 py-0.5 text-[#eee]">Fire</span>
        <span className="rounded bg-[#585858] px-2 py-0.5 text-[#eee]">Add 1 Hour</span>
      </div>
    </div>
  );
}

function TrackpadMock() {
  const face = "absolute inset-0 border border-white/50";
  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(#cfd9e6,#e9e2d6_60%)]">
      <div className="absolute inset-x-[-50%] bottom-[-10%] h-[55%] [transform:perspective(220px)_rotateX(60deg)] bg-[linear-gradient(#0000_95%,#8a7b6b55_95%),linear-gradient(90deg,#0000_95%,#8a7b6b55_95%)] bg-[length:22px_22px]" />
      <div className="absolute left-1/2 top-[42%] size-14 -translate-x-1/2 -translate-y-1/2 [perspective:300px]">
        <div className="mock-trackpad-cube relative size-full [transform-style:preserve-3d]">
          <div className={`${face} bg-[#e5677d]/85 [transform:translateZ(28px)]`} />
          <div className={`${face} bg-[#c9566a]/85 [transform:rotateY(180deg)_translateZ(28px)]`} />
          <div className={`${face} bg-[#f0899a]/85 [transform:rotateY(90deg)_translateZ(28px)]`} />
          <div className={`${face} bg-[#b84b5e]/85 [transform:rotateY(-90deg)_translateZ(28px)]`} />
          <div className={`${face} bg-[#f7a9b5]/85 [transform:rotateX(90deg)_translateZ(28px)]`} />
          <div className={`${face} bg-[#9e3f50]/85 [transform:rotateX(-90deg)_translateZ(28px)]`} />
        </div>
      </div>
      {/* trackpad with two fingers */}
      <div className="absolute bottom-2 right-2 h-[26%] w-[30%] rounded-md bg-white/70 shadow-sm ring-1 ring-black/10">
        <div className="mock-trackpad-fingers absolute left-1/2 top-1/2 flex -translate-y-1/2 gap-1">
          <span className="size-2.5 rounded-full bg-[#e5677d]/70" />
          <span className="size-2.5 rounded-full bg-[#e5677d]/70" />
        </div>
      </div>
      <div className="absolute left-2 top-2 rounded bg-black/40 px-1.5 py-0.5 text-[8px] text-white">Orbit</div>
    </div>
  );
}

function TodoMock() {
  const cards: [string, string, string][] = [
    ["Buy oat milk", "Errands", "#f5bd4f"],
    ["Finish slides", "Study", "#a77bd6"],
    ["Call grandma", "Family", "#ee9a63"],
  ];
  return (
    <div className="absolute inset-0 bg-[#fff1e0] px-3 pt-7 text-[#3a2a1e]">
      <div className="text-[11px] font-bold">Today</div>
      <div className="text-[8px] text-[#a08a74]">3 cards in your stack</div>
      <div className="relative mt-9 h-[50%]">
        {cards.map(([title, tag, color], i) => (
          <div
            key={title}
            className="mock-todo-card absolute inset-x-1 top-0 flex h-full flex-col rounded-xl bg-white p-2.5 shadow-md ring-1 ring-black/5"
            style={{ ...d(i * -2) }}
          >
            <span className="w-fit rounded-full px-1.5 py-px text-[7px] text-white" style={{ background: color }}>
              {tag}
            </span>
            <span className="mt-1.5 text-[10px] font-bold">{title}</span>
            <div className="mt-auto space-y-1">
              <div className="h-1 w-4/5 rounded bg-[#f0e6d6]" />
              <div className="h-1 w-3/5 rounded bg-[#f0e6d6]" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-[7px] text-[#a08a74]">swipe → done</div>
    </div>
  );
}

export function Mock({ kind }: { kind: MockKind }) {
  switch (kind) {
    case "windmill":
      return <WindmillMock />;
    case "lemon":
      return <LemonMock />;
    case "tele":
      return <TeleMock />;
    case "quaestio":
      return <QuaestioMock />;
    case "attributor":
      return <AttributorMock />;
    case "trackpad":
      return <TrackpadMock />;
    case "cookies":
      return <CookiesMock />;
    case "todo":
      return <TodoMock />;
  }
}
