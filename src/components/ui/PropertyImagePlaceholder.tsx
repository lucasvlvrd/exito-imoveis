const GRADIENTES = [
  "from-slate-200 to-slate-300",
  "from-blue-100 to-slate-200",
  "from-sky-100 to-slate-200",
  "from-slate-300 to-blue-100",
  "from-slate-200 to-sky-100",
  "from-blue-50 to-slate-200",
];

interface PropertyImagePlaceholderProps {
  seed: number;
  className?: string;
}

export default function PropertyImagePlaceholder({
  seed,
  className = "",
}: PropertyImagePlaceholderProps) {
  const gradiente = GRADIENTES[seed % GRADIENTES.length];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${gradiente} ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-10 w-10 text-foreground/20 sm:h-12 sm:w-12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path
          d="M10 28 L32 10 L54 28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 24 V52 H48 V24"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 52 V38 H37 V52"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
