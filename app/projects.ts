export type Platform = "Windows" | "macOS" | "Android" | "Unity" | "Web";

export type Category = "Desktop tools" | "Unity editor packages" | "Android apps";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  platforms: Platform[];
  stack: string[];
  highlights: string[];
  /** Path under /public, or null to show a monogram instead. */
  logo: string | null;
  /** Optional logo used in dark mode. */
  logoDark?: string;
  /** Accent used for the monogram and card trim. */
  accent: string;
  status: string;
  links: { label: string; href: string }[];
  /** Private repos are described but not linked. */
  isPrivate?: boolean;
};

const gh = (repo: string) => `https://github.com/Kataruna/${repo}`;

export const projects: Project[] = [
  {
    slug: "windmill",
    name: "Windmill",
    tagline: "Snap windows with a flick of the mouse.",
    description:
      "A gesture-based window snapper for Windows. Hold a key, flick the mouse toward where you want the window, and let go. Inspired by the radial gesture of Loop on macOS, built from scratch for Windows.",
    category: "Desktop tools",
    platforms: ["Windows"],
    stack: ["C#", ".NET 9", "WPF", "Inno Setup"],
    highlights: [
      "Radial snap ring under the cursor: halves, quarters, full screen",
      "Zone maps for thirds, columns, grids, plus your PowerToys FancyZones layouts",
      "Auto-arrange: click up to six windows in order and they tile themselves",
      "Uses native Windows snap for halves; works alongside komorebi",
    ],
    logo: "/windmill.svg",
    logoDark: "/windmill-white.svg",
    accent: "#3b82f6",
    status: "Released",
    links: [
      { label: "Repository", href: gh("Windmill") },
      { label: "Releases", href: `${gh("Windmill")}/releases` },
    ],
  },
  {
    slug: "lemon",
    name: "Lemon",
    tagline: "Drag, shake, drop: files converted.",
    description:
      "A drag-and-drop file converter for Windows and macOS. Drop in pictures, audio, video or documents and convert a whole batch in parallel, or shake the mouse mid-drag anywhere on your computer to pop up a wheel of formats right under the pointer.",
    category: "Desktop tools",
    platforms: ["Windows", "macOS"],
    stack: ["C#", "WinUI", "Swift", "SwiftUI"],
    highlights: [
      "Conversion wheel opens over any app while you drag files",
      "Rings for Convert, Optimize, Cut out (background removal) and Resize",
      "Your own shell commands on a Commands ring",
      "Batch queue with per-file presets and live progress",
    ],
    logo: "/lemon.png",
    accent: "#eab308",
    status: "Released · Homebrew cask",
    links: [
      { label: "Repository", href: gh("Lemon") },
      { label: "Releases", href: `${gh("Lemon")}/releases` },
    ],
  },
  {
    slug: "tele-task-monitor",
    name: "Tele-Task-Monitor",
    tagline: "Your PC's vitals, live on your iPad.",
    description:
      "A lean, windowless system-tray telemetry server that streams CPU, RAM, GPU, VRAM, per-core load and top processes to an iPad, or any browser on your network, once a second over Server-Sent Events. Dashboards are swappable full-layout themes.",
    category: "Desktop tools",
    platforms: ["Windows", "Web"],
    stack: ["Rust", "Axum", "SSE", "HTML/CSS/JS"],
    highlights: [
      "0% CPU when nobody is watching: the sampler sleeps until a viewer connects",
      "Under 0.5% CPU and 15 MB RAM while streaming, with EcoQoS priority",
      "Themes inspired by NieR:Automata and Doraemon Story of Seasons",
      "Install the dashboard on an iPad as a full-screen web app",
    ],
    logo: null,
    accent: "#10b981",
    status: "Active",
    links: [{ label: "Repository", href: gh("Tele-Task-Monitor") }],
  },
  {
    slug: "quaestio",
    name: "Quaestio",
    tagline: "GitHub Issues as a fast, offline-ready desktop board.",
    description:
      "A desktop app for managing GitHub Issues on Windows and macOS. GitHub stays the source of truth, while a local SQLite cache makes the board open instantly and readable offline. Edits go straight back to GitHub.",
    category: "Desktop tools",
    platforms: ["Windows", "macOS"],
    stack: ["Electron", "React", "TypeScript", "SQLite", "Tailwind"],
    highlights: [
      "Board grouped by issue type, with priority, labels and due dates",
      "Live sync with ETags and incremental cursors, plus offline mode",
      "Optimistic edits with rollback and edit-conflict detection",
      "Light/dark themes, custom palettes and grouped repo tabs",
    ],
    logo: "/quaestio.svg",
    accent: "#84cc16",
    status: "v1.0",
    links: [
      { label: "Repository", href: gh("Quaestio") },
      { label: "Releases", href: `${gh("Quaestio")}/releases` },
    ],
  },
  {
    slug: "attributor",
    name: "Attributor",
    tagline: "Tidier Unity inspectors with a few attributes.",
    description:
      "Inspector attributes for Unity 6: nested groups with columns, buttons drawn exactly where you declare them, and a handful of field helpers, so you get organized inspectors without writing custom editors.",
    category: "Unity editor packages",
    platforms: ["Unity"],
    stack: ["C#", "Unity 6", "UPM"],
    highlights: [
      "[Group] and [Fold] boxes that nest with '/' and lay out in columns",
      "[Button] methods with arguments, limited to Play mode or Edit mode",
      "[Show], [ReadOnly], [EnableIf], [Line] and other field helpers",
      "Install straight from the git URL in Package Manager",
    ],
    logo: null,
    accent: "#a855f7",
    status: "v0.7",
    links: [
      { label: "Repository", href: gh("Sarabunari-Attributor") },
      { label: "Manual", href: "https://kataruna.github.io/Sarabunari-Attributor/" },
    ],
  },
  {
    slug: "magic-trackpad",
    name: "Magic Trackpad",
    tagline: "Mac trackpad gestures for Unity's Scene view.",
    description:
      "Brings natural macOS trackpad gestures to the Unity Scene view through a small native plugin: two-finger scroll to orbit, pinch to zoom, and modifier keys to pan or look around.",
    category: "Unity editor packages",
    platforms: ["Unity", "macOS"],
    stack: ["C#", "Objective-C", "Native plugin", "Unity 6"],
    highlights: [
      "Two-finger scroll orbits, Shift pans, Command looks around",
      "Pinch to zoom, and no more accidental panel maximizing",
      "Remap each modifier, invert axes and tune speeds in Preferences",
      "Mice and other panels are left exactly as Unity has them",
    ],
    logo: null,
    accent: "#f43f5e",
    status: "v0.2",
    links: [{ label: "Repository", href: gh("Sarabunari-MagicTrackpad") }],
  },
  {
    slug: "cookies",
    name: "CookIEs",
    tagline: "An expense tracker that fills itself in.",
    description:
      "An Android expense tracker with pockets for separate budgets, recurring payments and quick-add presets. It can read banking notifications and scan transfer slips with OCR, so most entries are captured for you and just need a confirm.",
    category: "Android apps",
    platforms: ["Android"],
    stack: ["Kotlin", "Jetpack Compose", "Room", "ML Kit", "Tesseract"],
    highlights: [
      "Captures transactions from bank notifications, with transfer detection",
      "Thai slip OCR, including watching an album for new slips",
      "Pockets, budgets, insights, groceries and feast splitting",
      "CSV import/export, full backups and a biometric app lock",
    ],
    logo: null,
    accent: "#c2410c",
    status: "Beta",
    links: [],
    isPrivate: true,
  },
  {
    slug: "todo-stack",
    name: "ToDo Stack",
    tagline: "Your tasks as a deck of cards.",
    description:
      "A to-do app for Android that shows tasks as a stack of cards you swipe through, with color-coded categories, multiple accent themes, haptic and sound feedback, and a two-pane layout on tablets and foldables.",
    category: "Android apps",
    platforms: ["Android"],
    stack: ["Kotlin", "Jetpack Compose", "Room", "Material 3"],
    highlights: [
      "Carousel card stack with zoom-in detail",
      "Undo stack and predictive back support",
      "Accent themes, custom fonts and persistent category colors",
      "Adaptive list-detail layout for large screens",
    ],
    logo: null,
    accent: "#0ea5e9",
    status: "In development",
    links: [],
    isPrivate: true,
  },
];

export const categories: Category[] = [
  "Desktop tools",
  "Unity editor packages",
  "Android apps",
];

export const allPlatforms: Platform[] = ["Windows", "macOS", "Android", "Unity", "Web"];
