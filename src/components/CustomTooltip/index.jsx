import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="rounded text-zinc-100 p-2 shadow-xl text-center bg-orange-500">
        {label && (
          <h1 className="mb-1 text-zinc-200 text-lg">
            {format(parseISO(label), "EEEE', 'd' de 'MMMM", { locale: ptBR })}
          </h1>
        )}
        <h1 className="text-zinc-200 text-lg">
          {payload[0].value.toFixed(2)}%
        </h1>
      </div>
    );
  }
  return null;
}
