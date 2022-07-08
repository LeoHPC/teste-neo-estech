import { Link } from "react-router-dom";

export function Redirect() {
  return (
    <div className="h-[calc(100vh-80px)] w-full px-4 sm:px-10 md:px-20 lg:px-40 flex items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500">
      <h1 className="text-zinc-100 text-3xl font-bold text-center">
        Antes de continuar, é necessário escolher uma instalação! Volte para a{" "}
        <Link className="text-purple-700 hover:text-purple-600" to="/">
          página inicial
        </Link>{" "}
        para ver seus clientes disponíveis
      </h1>
    </div>
  );
}
