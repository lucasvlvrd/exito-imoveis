export default function ImovelLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
      <div className="h-3 w-32 animate-pulse bg-muted" />

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="aspect-[4/5] w-full animate-pulse bg-muted" />

        <div>
          <div className="h-3 w-40 animate-pulse bg-muted" />
          <div className="mt-3 h-9 w-3/4 animate-pulse bg-muted" />
          <div className="mt-3 h-4 w-1/2 animate-pulse bg-muted" />
          <div className="mt-6 h-7 w-32 animate-pulse bg-muted" />
          <div className="mt-8 h-24 w-full animate-pulse bg-muted" />
          <div className="mt-6 h-16 w-full animate-pulse bg-muted" />
        </div>
      </div>
    </div>
  );
}
