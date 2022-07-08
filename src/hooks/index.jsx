// PROVIDER
import { AuthProvider } from "./auth";

export const AppProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
