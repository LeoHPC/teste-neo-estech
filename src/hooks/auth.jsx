// REACT
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

// API
import api from "../lib/api";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [currentInstallation, setCurrentInstallation] = useState({});

  const signIn = useCallback(async (login, password) => {
    const response = await api.post("/login", {
      login,
      password,
    });

    setUser(response.data);

    localStorage.setItem("@Estech:USER", JSON.stringify(response.data));
    localStorage.setItem("@Estech:TOKEN", JSON.stringify(response.data.token));
  }, []);

  useEffect(() => {
    const userString = localStorage.getItem("@Estech:USER");

    if (userString) {
      setUser(JSON.parse(userString));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user,
        setUser,
        currentInstallation,
        setCurrentInstallation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
