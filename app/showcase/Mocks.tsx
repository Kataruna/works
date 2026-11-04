import type { CSSProperties } from "react";
import type { MockKind } from "../projects";
import { CookiesMock } from "./CookiesMock";
import { TeleMock } from "./TeleMock";

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

/** Lemon's wheel: a dark ring split into 8 wedges, each one an output format. */
function LemonWheel() {
  // Clockwise from the top. Wedge k is centred on -90deg + 45deg * k.
  const formats = ["PNG", "JPG", "WEBP", "PDF", "AVIF", "ICO", "GIF", "TIFF"];
  const outer = 96;
  const inner = 38;
  const xy = (r: number, deg: number): [number, number] => {
    const t = (deg * Math.PI) / 180;
    return [+(100 + r * Math.cos(t)).toFixed(2), +(100 + r * Math.sin(t)).toFixed(2)];
  };
  const pt = (r: number, deg: number) => xy(r, deg).join(" ");
  const wedge = (k: number) => {
    const a0 = -112.5 + 45 * k;
    const a1 = a0 + 45;
    return `M${pt(inner, a0)} L${pt(outer, a0)} A${outer} ${outer} 0 0 1 ${pt(outer, a1)} L${pt(inner, a1)} A${inner} ${inner} 0 0 0 ${pt(inner, a0)} Z`;
  };
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 size-full overflow-visible drop-shadow-xl" aria-hidden>
      <circle cx="100" cy="100" r={outer} fill="#2c2c2e" fillOpacity="0.95" />
      {/* the wedge the file is resting on lights up */}
      <path d={wedge(1)} className="mock-lemon-target" fill="#e25a55" style={{ filter: "drop-shadow(0 0 6px #e25a55)" }} />
      {formats.map((_, k) => {
        const [x1, y1] = xy(inner, -112.5 + 45 * k);
        const [x2, y2] = xy(outer, -112.5 + 45 * k);
        return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="1.2" />;
      })}
      {formats.map((f, k) => {
        const [x, y] = xy(67, -90 + 45 * k);
        return (
          <text key={f} x={x} y={y} textAnchor="middle" dominantBaseline="central" fill="#f2f2f2" fontSize="15" fontWeight="700">
            {f}
          </text>
        );
      })}
      <circle cx="100" cy="100" r={inner - 3} fill="#3a3a3c" stroke="#1c1c1e" strokeWidth="3" />
      <text x="100" y="101" textAnchor="middle" dominantBaseline="central" fontSize="30">
        🍋
      </text>
    </svg>
  );
}

function LemonMock() {
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

      {/* the conversion wheel: a ring of 8 format wedges around the lemon */}
      <div className="mock-lemon-wheel absolute left-1/2 top-[60%] aspect-square w-[38%]">
        <LemonWheel />
        <div className="absolute left-1/2 top-[101%] flex -translate-x-1/2 items-center gap-[3px] whitespace-nowrap rounded-full bg-[#2c2c2e]/95 p-[3px] text-[7px] font-semibold text-[#d8d8d8] shadow-lg">
          <span className="rounded-full bg-[#e25a55] px-2 py-0.5 text-white">1 Convert</span>
          <span className="px-1.5">2 Cut out</span>
          <span className="px-1.5">3 Resize</span>
        </div>
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
  // Sizes are in em, from a root of 6cqw, so the screen scales with the phone.
  return (
    <div className="absolute inset-0 bg-[#fff1e0] px-[1em] pt-[2.8em] text-[6cqw] text-[#3a2a1e]">
      <div className="text-[1.5em] font-bold leading-tight">Today</div>
      <div className="text-[0.75em] text-[#a08a74]">3 cards in your stack</div>
      <div className="relative mt-[2.6em] h-[50%]">
        {cards.map(([title, tag, color], i) => (
          <div
            key={title}
            className="mock-todo-card absolute inset-x-[0.2em] top-0 flex h-full flex-col rounded-[1em] bg-white p-[1em] shadow-md ring-1 ring-black/5"
            style={{ ...d(i * -2) }}
          >
            <span className="w-fit rounded-full px-[0.7em] py-[0.15em] text-[0.7em] font-semibold text-white" style={{ background: color }}>
              {tag}
            </span>
            <span className="mt-[0.5em] text-[1.15em] font-bold">{title}</span>
            <div className="mt-auto space-y-[0.4em]">
              <div className="h-[0.4em] w-4/5 rounded bg-[#f0e6d6]" />
              <div className="h-[0.4em] w-3/5 rounded bg-[#f0e6d6]" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-[1.2em] text-center text-[0.75em] text-[#a08a74]">swipe → done</div>
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
