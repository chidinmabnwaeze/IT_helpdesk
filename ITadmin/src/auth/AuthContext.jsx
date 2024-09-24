import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext({});

 export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem("auth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  const login = (userData) => {
    setAuth(userData);
    localStorage.setItem("auth", JSON.stringify(userData));
    localStorage.setItem("token", userData.sessionID);
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)

export default AuthContext;
