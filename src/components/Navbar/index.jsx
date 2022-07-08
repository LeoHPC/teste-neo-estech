// REACT
import { useState } from "react";
import { Link } from "react-router-dom";
// ANT-DESIGN
import { CloseOutlined, MenuOutlined, LogoutOutlined } from "@ant-design/icons";

// ASSETS
import LogoImage from "../../assets/logo.png";

// HOOKS
import { useAuth } from "../../hooks/auth";

// COMPONENTS
import { SidebarData } from "./SidebarData";

export function NavBar() {
  const [sidebar, setSidebar] = useState(false);
  const { currentInstallation, setUser, setCurrentInstallation } = useAuth();

  const showSideBar = () => {
    setSidebar(!sidebar);
  };

  const handleLogout = () => {
    localStorage.removeItem("@Estech:TOKEN");
    localStorage.removeItem("@Estech:USER");
    setUser(null);
    setCurrentInstallation({});
  };

  return (
    <>
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-[80px] flex justify-between items-center">
        <div>
          <Link to="/">
            <img
              className="h-10 sm:h-14"
              src={LogoImage}
              alt="Logo da empresa NEO Estech"
            />
          </Link>
        </div>
        <div className="flex items-center">
          <h1 className="hidden md:flex text-zinc-100 text-xl mt-2">
            {currentInstallation.id &&
              `Instalação atual: ${currentInstallation.nome}`}
          </h1>
          <Link to="#">
            <MenuOutlined
              className="text-2xl mx-6"
              onClick={showSideBar}
              style={{ color: "#f3f3f3" }}
            />
          </Link>
        </div>
      </div>
      <nav
        className={`bg-gradient-to-t from-yellow-400 via-orange-500 to-orange-500 w-60 h-screen flex justify-center fixed top-0 z-10 transition-all overflow-x-hidden overflow-y-auto ${
          sidebar ? "right-0" : "-right-[100%]"
        }`}
      >
        <ul className="w-full" onClick={showSideBar}>
          <li className="bg-none w-full h-20 flex justify-end items-center">
            <Link className="mr-6 text-xl bg-none" to="#">
              <CloseOutlined
                className="text-2xl mb-2"
                style={{ color: "#f3f3f3" }}
              />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                className="flex justify-start items-center  list-none h-[60px]"
              >
                <Link
                  className="no-underline text-zinc-100 text-lg w-[95%] h-full ml-4 flex items-center py-4 rounded hover:text-zinc-700"
                  to={item.path}
                >
                  {item.icon}
                  <span className="ml-4">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="flex justify-start items-center  list-none h-[60px]">
            <button
              onClick={handleLogout}
              className="no-underline text-zinc-100 text-lg w-[95%] h-full ml-4 flex items-center py-4 rounded hover:text-zinc-700"
            >
              <LogoutOutlined />
              <span className="ml-4">Sair</span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
