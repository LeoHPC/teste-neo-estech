import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "../components/Navbar";
import { Dashboard } from "../Pages/Dashboard";
import { Graphics } from "../Pages/Dashboard/Graphics/index";
import { InternetStatus } from "../Pages/Dashboard/InternetStatus";
import { OpenCalls } from "../Pages/Dashboard/OpenCalls";

export const UserRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/chamados" element={<OpenCalls />} />
        <Route path="/graficos" element={<Graphics />} />
        <Route path="/status" element={<InternetStatus />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
