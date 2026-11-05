import type { ReactNode } from "react";

/*
 * CookIEs, simplified from real screenshots of the app (Home and Add screens),
 * keeping only the big pieces so it reads well at small sizes.
 * Story: tap +, type 45, Save, and the entry appears under Today.
 * Entries and amounts are made-up sample data.
 *
 * Sizes are in em. The root sets font-size to 6cqw (6% of the phone screen's
 * width), so the screen scales with its frame. Animations are the "ck-"
 * classes in globals.css; ck-tap positions there match the layout here.
 */

const ink = "#1F1D1A";
const ink3 = "#A8A39D";
const chip = "#F1EDE6";

const icons = {
  food: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
  bus: "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z",
  bag: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z",
};

type Cat = { icon: keyof typeof icons; color: string; tile: string };
const food: Cat = { icon: "food", color: "#FF8A5B", tile: "#FFE7DC" };
const transport: Cat = { icon: "bus", color: "#5B9EFF", tile: "#E3EEFF" };
const shopping: Cat = { icon: "bag", color: "#E879B5", tile: "#FCE6F1" };

function Icon({ cat, className }: { cat: Cat; className: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={cat.color} aria-hidden>
      <path d={icons[cat.icon]} />
    </svg>
  );
}

/** Two values in the same spot: the first before saving, the second after. */
function BeforeAfter({ before, after }: { before: ReactNode; after: ReactNode }) {
  return (
    <span className="inline-grid justify-items-end">
      <span className="ck-before col-start-1 row-start-1">{before}</span>
      <span className="ck-after col-start-1 row-start-1">{after}</span>
    </span>
  );
}

function Row({ cat, title, amount }: { cat: Cat; title: string; amount: string }) {
  return (
    <div className="flex h-[3.2em] items-center gap-[0.6em]">
      <div className="grid size-[2em] shrink-0 place-items-center rounded-[0.5em]" style={{ background: cat.tile }}>
        <Icon cat={cat} className="size-[1.1em]" />
      </div>
      <span className="min-w-0 flex-1 truncate text-[0.85em]" style={{ color: ink }}>
        {title}
      </span>
      <span className="ck-mono text-[0.9em] font-semibold" style={{ color: ink }}>
        {amount}
      </span>
    </div>
  );
}

function Header({ children, total }: { children: ReactNode; total: ReactNode }) {
  return (
    <div className="flex h-[1.9em] items-center justify-between border-b border-[#EBE6DF] text-[0.8em]">
      <span className="font-semibold" style={{ color: ink }}>
        {children}
      </span>
      <span className="ck-mono" style={{ color: "#6B6660" }}>
        {total}
      </span>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[0.67em] top-[1.6em] text-[1.5em] font-semibold" style={{ color: ink }}>
        Home
      </div>

      <div className="absolute inset-x-[0.8em] top-[4.9em] h-[4.6em] rounded-[1em] bg-white">
        <div className="absolute left-[1em] top-[0.9em] text-[0.7em]" style={{ color: ink3 }}>
          This month
        </div>
        <div className="ck-mono absolute left-[0.47em] top-[1.1em] text-[1.5em] font-bold leading-none" style={{ color: ink }}>
          <BeforeAfter before="-฿1,240" after="-฿1,285" />
        </div>
      </div>

      <div className="absolute inset-x-[1em] top-[10.3em]">
        <Header total={<BeforeAfter before="-฿84" after="-฿129" />}>Today</Header>
        <div className="ck-row-added overflow-hidden">
          <Row cat={food} title="Bubble tea" amount="-45" />
        </div>
        <Row cat={food} title="Iced latte" amount="-60" />
        <Row cat={transport} title="Bus" amount="-24" />
        <div className="mt-[0.4em]">
          <Header total="-฿105">Yesterday</Header>
        </div>
        <Row cat={shopping} title="Groceries" amount="-105" />
      </div>

      <div className="ck-fab absolute right-[0.9em] top-[26.2em] grid size-[2.8em] place-items-center rounded-full bg-[#E25A55] text-white shadow-[0_0.3em_0.8em_rgba(0,0,0,0.25)]">
        <span className="text-[2em] font-light leading-none">+</span>
      </div>
    </div>
  );
}

function AddScreen() {
  const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3", ".", "0", "⌫"];
  return (
    <div className="ck-add absolute inset-0 bg-[#FAF6F1]">
      <div className="absolute left-[0.75em] top-[2.4em] text-[1.2em] leading-none" style={{ color: ink }}>
        ←
      </div>
      <div className="absolute left-1/2 top-[3.55em] -translate-x-1/2 rounded-full px-[1em] py-[0.35em] text-[0.8em] font-semibold text-white" style={{ background: ink }}>
        Expense
      </div>

      {/* the amount being typed */}
      <div className="ck-mono absolute right-[0.38em] top-[2.1em] text-[2.6em] font-bold">
        <span className="inline-grid justify-items-end">
          <span className="ck-a0 col-start-1 row-start-1" style={{ color: ink3 }}>
            0
          </span>
          <span className="ck-a4 col-start-1 row-start-1" style={{ color: ink }}>
            4
          </span>
          <span className="ck-a45 col-start-1 row-start-1" style={{ color: ink }}>
            45
          </span>
        </span>
      </div>

      <div className="absolute inset-x-[1em] top-[9.6em] flex h-[2.6em] items-center rounded-[0.6em] border-[0.06em] border-[#E2DDD6] px-[0.8em]">
        <span className="text-[0.85em]" style={{ color: ink }}>
          Bubble tea
        </span>
      </div>

      <div className="absolute left-[1em] top-[12.8em] flex h-[1.8em] items-center gap-[0.4em] rounded-full pl-[0.25em] pr-[0.8em]" style={{ background: ink }}>
        <span className="grid size-[1.3em] place-items-center rounded-full bg-[#3A2A22]">
          <Icon cat={food} className="size-[0.8em]" />
        </span>
        <span className="text-[0.75em] font-semibold text-white">Food &amp; Drink</span>
      </div>

      {/* number pad */}
      <div className="absolute inset-x-[1em] top-[15.3em] grid grid-cols-3 gap-[0.4em]">
        {keys.map((k) => (
          <div
            key={k}
            className={`grid h-[2.3em] place-items-center rounded-[0.5em] ${k === "4" ? "ck-key4" : k === "5" ? "ck-key5" : ""}`}
            style={{ background: chip, color: ink }}
          >
            <span className="ck-mono text-[1.1em]">{k}</span>
          </div>
        ))}
      </div>

      <div className="ck-save absolute inset-x-[1em] top-[26.3em] grid h-[2.5em] place-items-center rounded-[0.8em] font-semibold">
        Save
      </div>
    </div>
  );
}

export function CookiesMock() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#FAF6F1] text-[6cqw] [font-family:var(--font-gsans),system-ui,sans-serif]">
      <div className="ck-screen absolute inset-0">
        <HomeScreen />
        <AddScreen />
        {/* a fingertip showing where each tap happens */}
        <span className="ck-tap absolute z-50 size-[2em] rounded-full bg-[#1F1D1A]/20 ring-[0.15em] ring-white/70" />
      </div>
    </div>
  );
}
