import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return null;

  // If already logged in → redirect
  if (user) {
    return user.role === "ADMIN"
      ? <Navigate to="/admin" replace />
      : <Navigate to="/user" replace />;
  }

  // Otherwise allow access
  return children;
};

export default PublicRoute;
