// REACT
import { useCallback, useEffect, useState } from "react";

// DATE-FNS
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

// RECHARTS
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// COMPONENTS
import { CustomLegend } from "../../../components/CustomLegend";
import { CustomTooltip } from "../../../components/CustomTooltip";
import { Loading } from "../../../components/Loading";
import { Redirect } from "../../../components/Redirect";

// HOOKS
import { useAuth } from "../../../hooks/auth";

// API
import api from "../../../lib/api";

export function Graphics() {
  const [graphicData, setGraphicData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentInstallation } = useAuth();

  const getData = useCallback(async () => {
    setLoading(true);
    const response = await api.get("/dashboard/teste-dev?cliente&instalacao");

    response.data.scores.forEach((item) => {
      if (item.id === Number(currentInstallation.id)) {
        setGraphicData(item.scores.slice(0).reverse());
      }
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    if (currentInstallation.id !== undefined) {
      getData();
    }
  }, []);

  if (currentInstallation.id === undefined) {
    return <Redirect />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-hidden overflow-y-auto bg-zinc-100 h-[calc(100vh-80px)]">
      <h1 className="text-center my-5 font-bolf text-2xl text-zinc-800 px-1 sm:px-0">
        Níveis percuntais de temperatura da instalação{" "}
        {currentInstallation.nome}
      </h1>
      <div className="mr-10">
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={graphicData}>
            <CartesianGrid vertical={false} opacity={0.5} />
            <XAxis
              tickLine={false}
              stroke="#272A33"
              dataKey="date"
              tickFormatter={(str) => {
                return format(new Date(str), "dd/MM/yyyy", {
                  locale: ptBR,
                });
              }}
            />
            <YAxis tickLine={false} stroke="#272A33" />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#F97316"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
