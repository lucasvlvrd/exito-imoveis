export default function CatalogoLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
      <div className="flex items-baseline justify-between gap-4 border-b border-border pb-6">
        <div className="h-9 w-40 animate-pulse bg-muted sm:h-10" />
      </div>

      <div className="grid gap-10 pt-10 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="hidden space-y-3 lg:block">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-4 w-3/4 animate-pulse bg-muted" />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <div className="aspect-[4/5] w-full animate-pulse bg-muted" />
              <div className="mt-3 h-3 w-3/4 animate-pulse bg-muted" />
              <div className="mt-2 h-3 w-1/2 animate-pulse bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
