import type { ReactNode } from "react";

/*
 * CookIEs, simplified from real screenshots of the app (Home and Add screens).
 * Story: tap +, type 45, Save, and the entry appears under Today.
 * Entries and amounts are made-up sample data.
 *
 * Sizes are in em. The root sets font-size to 4cqw (4% of the phone screen's
 * width), so the screen scales with its frame. Animations are the "ck-"
 * classes in globals.css.
 */

const ink = "#1F1D1A";
const ink2 = "#6B6660";
const ink3 = "#A8A39D";
const chip = "#F1EDE6";

const icons = {
  food: "M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z",
  bus: "M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z",
  bag: "M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2z",
  gift: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 12 7.4l3.38 4.6L17 10.83 14.92 8H20v6z",
};

type Cat = { icon: keyof typeof icons; color: string; tile: string; name: string };
const food: Cat = { icon: "food", color: "#FF8A5B", tile: "#FFE7DC", name: "Food & Drink" };
const transport: Cat = { icon: "bus", color: "#5B9EFF", tile: "#E3EEFF", name: "Transport" };
const shopping: Cat = { icon: "bag", color: "#E879B5", tile: "#FCE6F1", name: "Shopping" };
const gift: Cat = { icon: "gift", color: "#F0A8D8", tile: "#FCEDF6", name: "Gift" };

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
    <span className="inline-grid">
      <span className="ck-before col-start-1 row-start-1">{before}</span>
      <span className="ck-after col-start-1 row-start-1">{after}</span>
    </span>
  );
}

function Row({ cat, title, time, amount }: { cat: Cat; title: string; time: string; amount: string }) {
  return (
    <div className="flex h-[4.1em] items-center gap-[0.75em]">
      <div className="grid size-[2.4em] shrink-0 place-items-center rounded-[0.55em]" style={{ background: cat.tile }}>
        <Icon cat={cat} className="size-[1.25em]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[0.86em]" style={{ color: ink }}>
          {title}
        </div>
        <div className="mt-[0.15em] text-[0.72em]" style={{ color: ink3 }}>
          {cat.name} · {time}
        </div>
      </div>
      <div className="ck-mono text-[0.9em]" style={{ color: amount.startsWith("+") ? "#3F7D52" : ink }}>
        {amount}
      </div>
    </div>
  );
}

function DayHeader({ date, label, total }: { date: string; label: string; total: ReactNode }) {
  return (
    <div className="flex h-[2.3em] items-center border-b border-[#EBE6DF] text-[0.75em]">
      <span className="w-[4.4em]" style={{ color: ink3 }}>
        {date}
      </span>
      <span className="flex-1 font-semibold" style={{ color: ink }}>
        {label}
      </span>
      <span className="ck-mono" style={{ color: ink2 }}>
        {total}
      </span>
    </div>
  );
}

function HomeScreen() {
  return (
    <div className="absolute inset-0">
      <div className="absolute left-[1.25em] top-[2.6em] text-[0.78em]" style={{ color: ink3 }}>
        November 2026
      </div>
      <div className="absolute left-[0.69em] top-[2.25em] text-[1.8em] font-semibold leading-none" style={{ color: ink }}>
        Home
      </div>
      <div
        className="absolute right-[1.25em] top-[3.9em] flex h-[2.4em] items-center gap-[0.45em] rounded-full px-[0.9em]"
        style={{ background: chip }}
      >
        <span className="size-[0.45em] rounded-full bg-[#C8553D]" />
        <span className="text-[0.8em]" style={{ color: ink2 }}>
          Personal
        </span>
      </div>

      {/* Net this month */}
      <div className="absolute inset-x-[1.22em] top-[7em] h-[9.3em] rounded-[1.2em] bg-white">
        <div className="absolute left-[1.25em] top-[1.6em] text-[0.72em]" style={{ color: ink3 }}>
          Net this month
        </div>
        <div className="ck-mono absolute left-[0.6em] top-[1.17em] text-[2.05em] font-bold leading-none" style={{ color: ink }}>
          <BeforeAfter before="-฿1,240.50" after="-฿1,285.50" />
        </div>
        <div className="ck-mono absolute left-[1.6em] top-[7.4em] flex h-[2.75em] items-center rounded-full bg-[#E6F0E7] px-[1em] text-[0.78em] font-bold text-[#3F7D52]">
          ↑ ฿6,500
        </div>
        <div
          className="ck-mono absolute left-[9.6em] top-[7.4em] flex h-[2.75em] items-center gap-[0.4em] rounded-full px-[1em] text-[0.78em] font-bold"
          style={{ background: chip, color: ink }}
        >
          ↓ <BeforeAfter before="฿7,740.50" after="฿7,785.50" />
        </div>
      </div>

      {/* Transactions, grouped by day */}
      <div className="absolute inset-x-[1.22em] top-[17.2em]">
        <DayHeader date="4 Nov" label="Today" total={<BeforeAfter before="-฿84" after="-฿129" />} />
        <div className="ck-row-added overflow-hidden">
          <Row cat={food} title="Bubble tea" time="14:20" amount="-45" />
        </div>
        <Row cat={food} title="Iced latte" time="12:18" amount="-60" />
        <Row cat={transport} title="Bus to campus" time="08:45" amount="-24" />
        <div className="mt-[0.5em]">
          <DayHeader date="3 Nov" label="Yesterday" total="-฿164" />
        </div>
        <Row cat={food} title="Pad thai" time="12:59" amount="-45" />
        <Row cat={shopping} title="Groceries" time="11:30" amount="-105" />
        <Row cat={gift} title="Birthday money" time="09:12" amount="+1,000" />
      </div>

      <div className="ck-fab absolute right-[1.5em] top-[49.8em] grid size-[3.4em] place-items-center rounded-full bg-[#E25A55] text-white shadow-[0_0.3em_0.8em_rgba(0,0,0,0.25)]">
        <span className="text-[2.4em] font-light leading-none">+</span>
      </div>
    </div>
  );
}

function AddScreen() {
  const keys = ["7", "8", "9", "÷", "4", "5", "6", "×", "1", "2", "3", "−", ".", "0", "⌫", "+"];
  return (
    <div className="ck-add absolute inset-0 bg-[#FAF6F1]">
      <div className="absolute left-[1.15em] top-[2.6em] text-[1.4em] leading-none" style={{ color: ink }}>
        ←
      </div>
      <div className="absolute left-[4.1em] top-[3.4em] h-[2.2em] w-[13.8em] rounded-full" style={{ background: chip }}>
        <div
          className="absolute flex items-center justify-center rounded-full text-[0.78em] font-semibold text-white"
          style={{ background: ink, height: `${1.8 / 0.78}em`, width: `${6.75 / 0.78}em`, left: `${0.2 / 0.78}em`, top: `${0.2 / 0.78}em` }}
        >
          Expense
        </div>
      </div>

      <div className="absolute inset-x-0 top-[10.2em] text-center text-[0.72em]" style={{ color: ink3 }}>
        This Month • <span className="font-semibold text-[#C8553D]">1,240.50</span>
      </div>

      {/* the amount being typed */}
      <div className="ck-mono absolute right-[0.55em] top-[8.2em] text-[2.3em] font-bold">
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

      <div
        className="absolute flex items-center rounded-[0.7em] border-[0.06em] border-[#E2DDD6] px-[1em] text-[0.9em]"
        style={{ color: ink, width: `${22.5 / 0.9}em`, height: `${3.3 / 0.9}em`, left: `${1.22 / 0.9}em`, top: `${26.2 / 0.9}em` }}
      >
        Bubble tea
      </div>

      {/* categories */}
      <div className="absolute inset-x-[1.22em] top-[30.7em] flex gap-[0.5em]">
        {[food, transport].map((cat, i) => (
          <div
            key={cat.name}
            className="flex h-[1.95em] items-center gap-[0.4em] rounded-full pl-[0.25em] pr-[0.8em]"
            style={{ background: i === 0 ? ink : chip }}
          >
            <span className="grid size-[1.45em] place-items-center rounded-full" style={{ background: i === 0 ? "#3A2A22" : cat.tile }}>
              <Icon cat={cat} className="size-[0.85em]" />
            </span>
            <span className="text-[0.78em] font-semibold" style={{ color: i === 0 ? "#fff" : ink2 }}>
              {cat.name}
            </span>
          </div>
        ))}
      </div>

      {/* keypad */}
      <div className="absolute inset-x-[1.22em] top-[34.2em] grid grid-cols-4 gap-[0.52em]">
        {keys.map((k, i) => {
          const op = i % 4 === 3;
          return (
            <div
              key={k}
              className={`grid h-[3.33em] place-items-center rounded-[0.55em] ${op ? "border-[0.08em] border-[#F4C0BE] bg-white" : ""} ${
                k === "4" ? "ck-key4" : k === "5" ? "ck-key5" : ""
              }`}
              style={op ? { color: "#E25A55" } : { background: chip, color: ink }}
            >
              <span className={`text-[1.2em] ${op ? "font-bold" : "ck-mono"}`}>{k}</span>
            </div>
          );
        })}
      </div>

      <div className="ck-save absolute inset-x-[1.22em] top-[49.9em] grid h-[3.25em] place-items-center rounded-[0.9em] font-semibold">
        Save
      </div>
    </div>
  );
}

export function CookiesMock() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#FAF6F1] text-[4cqw] [font-family:var(--font-gsans),system-ui,sans-serif]">
      <div className="ck-screen absolute inset-0">
        <HomeScreen />
        <AddScreen />
        {/* a fingertip showing where each tap happens */}
        <span className="ck-tap absolute z-50 size-[2.2em] rounded-full bg-[#1F1D1A]/20 ring-[0.15em] ring-white/70" />
      </div>
    </div>
  );
}
