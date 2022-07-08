// ANT-DESIGN
import "antd/dist/antd.css";
import { ConfigProvider } from "antd";
import ptBR from "antd/lib/locale/pt_BR";

// ROUTES
import { AppRoutes } from "./routes";

// HOOKS
import { AppProvider } from "./hooks";

const App = () => {
  return (
    <>
      <ConfigProvider locale={ptBR}>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </ConfigProvider>
    </>
  );
};

export default App;
