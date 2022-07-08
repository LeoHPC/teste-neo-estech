// HOOKS
import { useAuth } from "../../hooks/auth";

export function InstallationCard({ prefix, name, installation }) {
  const { setCurrentInstallation } = useAuth();

  return (
    <div>
      <h1 className="text-zinc-100 opacity-90 -mb-1">{prefix}</h1>
      <h1 className="text-lg text-zinc-100">{name}</h1>
      <button
        className="bg-purple-600 mt-2 text-zinc-200 min-w-[180px] text-lg font-bold py-1 w-4/6 rounded hover:bg-purple-500 hover:min-w-[200px] transition-all"
        onClick={() => setCurrentInstallation(installation)}
      >
        Selecionar
      </button>
    </div>
  );
}
