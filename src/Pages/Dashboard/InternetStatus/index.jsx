// REACT
import { useState, useEffect, useCallback } from "react";

// DATE-FNS
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// COMPONENTS
import { Loading } from "../../../components/Loading";
import { Redirect } from "../../../components/Redirect";

// HOOKS
import { useAuth } from "../../../hooks/auth";

// API
import api from "../../../lib/api";

export function InternetStatus() {
  const [installation, setInstallation] = useState({});
  const [loading, setLoading] = useState(false);
  const { currentInstallation } = useAuth();

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await api.get("/dashboard/teste-dev?cliente&instalacao");

    response.data.status_internet.forEach((item) => {
      if (item.id === Number(currentInstallation.id)) {
        const itemWithCorrectHour = {
          ...item,
          correctHour: format(
            new Date(item.ultima_leitura),
            "dd/MM/yyyy' às 'HH:mm:ss",
            {
              locale: ptBR,
            }
          ),
        };
        setInstallation(itemWithCorrectHour);
      }
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  if (currentInstallation.id === undefined) {
    return <Redirect />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="h-[calc(100vh-80px)] w-full py-4 px-2 sm:p-0 bg-zinc-100 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div
        className={`px-1 py-2 border-2 rounded sm:px-6 sm:py-8 text-center ${
          installation.status === "Offline"
            ? "border-red-500 bg-red-300"
            : "border-green-500 bg-green-300"
        }`}
      >
        <h1 className="font-bold text-2xl">
          Instalação: <span>{installation.nome}</span>
        </h1>
        <div className="h-[1px] w-full bg-zinc-600" />
        <div className="flex justify-center items-center mt-2 mb-1">
          <h1
            className={`mr-4 text-xl mt-2 ${
              installation.status === "Offline"
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {installation.status}
          </h1>
          <div
            className={`h-5 w-5 rounded-full border border-zinc-800 ${
              installation.status === "Offline" ? "bg-red-500" : "bg-green-500"
            }`}
          ></div>
        </div>
        <h1 className="text-lg text-zinc-800">
          Última leitura em: {installation.correctHour}
        </h1>
      </div>
    </div>
  );
}
