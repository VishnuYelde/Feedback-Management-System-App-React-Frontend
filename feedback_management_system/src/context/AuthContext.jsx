import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = JSON.parse(atob(token.split(".")[1]));
      setUser({
        email: decoded.sub,
        role: decoded.role,
      });
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);

    const decoded = JSON.parse(atob(token.split(".")[1]));

    setUser({
      email: decoded.sub,
      role: decoded.role,
    });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
