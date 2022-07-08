export function ClientCard({ name, children }) {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-orange-400 to-orange-500 min-w-[90vw] sm:min-w-[300px] text-center items-center p-4 rounded border border-zinc-400">
      <h1 className="font-bold text-xl text-zinc-100">{name}</h1>
      <div className="h-[1px] bg-zinc-100 w-5/6 mb-4" />
      {children}
    </div>
  );
}
