/*
 * Tele-Task-Monitor's "Automata" dashboard theme, reduced to its core: tabs,
 * a process list, the system capacity stack, a live wave and load bars.
 * Taken from a real screenshot; names and numbers are sample data.
 *
 * Sizes are in em. The root sets font-size to 3.4cqw of the tablet screen's
 * width (about 29em wide and 22em tall), so it scales with its frame.
 * Animations are the "tm-" classes in globals.css.
 */

const dark = "#4E4B42";
const light = "#E4DFCC";
const panel = "#DDD8C6";

// A jagged wave that repeats every 100 units, so scrolling it by half loops seamlessly.
const wave = (() => {
  const ys = [26, 17, 24, 14, 22, 28, 16, 23, 13, 21, 26, 15, 22, 18, 27, 14, 23, 19, 26];
  const step = 100 / (ys.length - 1);
  const pts: string[] = [];
  for (const offset of [0, 100]) ys.forEach((y, i) => pts.push(`${(offset + i * step).toFixed(1)},${y}`));
  return pts.join(" ");
})();

export function TeleMock() {
  const tabs = ["OVERVIEW", "CPU", "RAM", "GPU"];
  const procs: [string, string][] = [
    ["game.exe", "9%"],
    ["chrome.exe", "3%"],
    ["spotify.exe", "1%"],
    ["discord.exe", "1%"],
  ];
  const bars: [string, string, number][] = [
    ["CPU", "17%", 0],
    ["RAM", "54%", -0.9],
    ["GPU", "25%", -1.8],
  ];
  return (
    <div
      className="absolute inset-0 overflow-hidden text-[3.4cqw] [font-family:var(--font-gsans),system-ui,sans-serif]"
      style={{
        color: dark,
        background:
          "linear-gradient(#0000 95%, #0000000a 95%) 0 0 / 1.5em 1.5em, linear-gradient(90deg, #0000 95%, #0000000a 95%) 0 0 / 1.5em 1.5em, #CCC7B1",
      }}
    >
      {/* tabs */}
      <div className="absolute inset-x-[1em] top-[0.8em] flex gap-[0.35em]">
        {tabs.map((t, i) => (
          <div
            key={t}
            className={`flex h-[1.9em] items-center px-[0.7em] text-[0.7em] font-bold tracking-[0.15em] ${i === 0 ? "flex-[1.6]" : "flex-1"}`}
            style={i === 0 ? { background: dark, color: light } : { background: "#BFB9A3" }}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-[1em] top-[3em] border-t-[0.15em] border-dotted" style={{ borderColor: dark }} />

      <div className="absolute left-[0.65em] top-[2.3em] text-[1.5em] font-bold tracking-[0.18em] text-[#5B574C]">OVERVIEW</div>

      {/* process list */}
      <div className="absolute bottom-[1em] left-[1em] top-[6.2em] w-[11em]" style={{ background: panel }}>
        <div className="flex h-[1.9em] items-center justify-between px-[0.7em] text-[0.8em] font-bold" style={{ background: dark, color: light }}>
          <span>◈ CPU</span>
          <span>17%</span>
        </div>
        <div className="space-y-[0.25em] p-[0.35em]">
          {procs.map(([name, v], i) => (
            <div
              key={name}
              className="flex h-[1.9em] items-center justify-between px-[0.6em] text-[0.8em]"
              style={i === 0 ? { background: dark, color: light } : undefined}
            >
              <span>{name}</span>
              <span className="font-semibold">[{v}]</span>
            </div>
          ))}
        </div>
      </div>

      {/* system capacity stack */}
      <div className="absolute bottom-[1em] left-[12.7em] top-[6.2em] flex w-[2.8em] flex-col gap-[0.15em] border-[0.15em] p-[0.2em]" style={{ borderColor: dark }}>
        <div className="min-h-0 flex-1 bg-[repeating-linear-gradient(#6A665B_0_0.15em,#5A564C_0.15em_0.3em)]" />
        <div className="tm-seg-cpu shrink-0 bg-[#D4A090]" />
        <div className="tm-seg-ram shrink-0 bg-[#C7B99A]" />
        <div className="tm-seg-gpu shrink-0 bg-[#E9E2A6]" />
      </div>

      {/* live wave + load bars */}
      <div className="absolute left-[16.3em] right-[1em] top-[6.2em] p-[0.5em]" style={{ background: panel }}>
        <div className="flex justify-between text-[0.75em] font-semibold">
          <span>CPU WAVE</span>
          <span>17%</span>
        </div>
        <div className="relative mt-[0.35em] h-[4.6em] overflow-hidden bg-[#E6E2D2]">
          <svg className="tm-wave absolute inset-y-0 left-0 h-full w-[200%]" viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden>
            <polygon points={`0,40 ${wave} 200,40`} fill="#C9C3AD" />
            <polyline points={wave} fill="none" stroke={dark} strokeWidth="1.4" vectorEffect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[1em] left-[16.3em] right-[1em] space-y-[0.7em] p-[0.7em]" style={{ background: panel }}>
        {bars.map(([label, v, delay]) => (
          <div key={label} className="flex items-center gap-[0.6em] text-[0.75em] font-semibold">
            <span className="w-[2.4em]">{label}</span>
            <span className="relative h-[0.55em] flex-1 bg-[#C9C3AD]">
              <span className="tm-stat absolute inset-y-0 left-0" style={{ background: dark, width: v, animationDelay: `${delay}s` }} />
            </span>
            <span className="w-[2.2em] text-right">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
