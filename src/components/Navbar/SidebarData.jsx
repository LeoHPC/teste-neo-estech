import {
  HomeOutlined,
  PhoneOutlined,
  BarChartOutlined,
  WifiOutlined,
} from "@ant-design/icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <HomeOutlined />,
  },
  {
    title: "Chamados abertos",
    path: "/chamados",
    icon: <PhoneOutlined />,
  },
  {
    title: "Gráficos",
    path: "/graficos",
    icon: <BarChartOutlined />,
  },
  {
    title: "Status da internet",
    path: "/status",
    icon: <WifiOutlined />,
  },
];
