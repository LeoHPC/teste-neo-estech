import { LoadingOutlined } from "@ant-design/icons";

export function Loading() {
  return (
    <div className="h-[calc(100vh-80px)] w-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
      <div className="text-center">
        <LoadingOutlined style={{ color: "#f3f3f3" }} className="text-5xl" />
        <h1 className="text-3xl text-zinc-100 mt-4">Carregando...</h1>
      </div>
    </div>
  );
}
