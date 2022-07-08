// HOOKS
import { useAuth } from "../hooks/auth";

// ROUTES
import { AuthRoutes } from "./auth.routes";
import { UserRoutes } from "./user.routes";

export const AppRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return <UserRoutes />;
  }

  return <AuthRoutes />;
};
