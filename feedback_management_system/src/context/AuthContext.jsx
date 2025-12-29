import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user on refresh
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1]));

        if (decoded.exp * 1000 < Date.now()) {
          logout(); // token expired
        } else {
          setUser({
            email: decoded.sub,
            role: decoded.role,
          });
        }
      } catch {
        logout();
      }
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
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
