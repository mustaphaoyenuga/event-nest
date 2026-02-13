"use client";

import { createContext, useContext, useState } from "react";

interface AuthContextType {
  user: {
    email: string;
    isAuthenticated: boolean;
  };
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    email: "",
    isAuthenticated: false,
  });

  const login = (email: string, password: string) => {
    if (email === "musty@gmail.com" && password === "pass1") {
      setUser((prev) => ({
        ...prev,
        email,
        isAuthenticated: true,
      }));
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    setUser({ email: "", isAuthenticated: false });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth Hook must be used inside a FC component");
  }
  return context;
};