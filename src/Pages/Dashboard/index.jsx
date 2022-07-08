import { ClientCard } from "../../components/ClientCard";
import { InstallationCard } from "../../components/InstallationCard";
import { useAuth } from "../../hooks/auth";

export function Dashboard() {
  const { user, currentInstallation } = useAuth();

  return (
    <div className="h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-zinc-100 py-2">
      <h1 className="text-zinc-800 text-2xl text-center font-bold">
        Olá, {user.nome} 🤘!
      </h1>
      <h2 className="text-zinc-800 text-xl text-center italic">
        Confira suas instalações e clientes!
      </h2>
      <div className="h-[1px] w-4/6 bg-zinc-400 mt-4 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[600px] sm:max-h-[500px] overflow-auto">
        {user.clientes.map((cliente) => {
          return (
            <ClientCard key={cliente.id} name={cliente.nome}>
              {cliente.instalacoes.map((instalacao) => {
                return (
                  <InstallationCard
                    key={instalacao.id}
                    prefix={instalacao.prefixo}
                    name={instalacao.nome}
                    installation={instalacao}
                  />
                );
              })}
            </ClientCard>
          );
        })}
      </div>
      {currentInstallation.id !== undefined && (
        <h1 className="text-xl text-green-500 font-bold mt-8 text-center">
          Instalçao {currentInstallation.nome} selecionada! Agora você pode
          navegar pela dashboard! 😉
        </h1>
      )}
    </div>
  );
}
