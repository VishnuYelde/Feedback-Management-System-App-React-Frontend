import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/user"
        element={
          <ProtectedRoute allowedRole="USER">
            <UserDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
