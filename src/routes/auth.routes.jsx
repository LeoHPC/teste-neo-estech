// REACT
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import { Login } from "../Pages/Login";

export const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
