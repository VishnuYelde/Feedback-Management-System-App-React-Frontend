import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserDashboard from "../pages/user/UserDashboard";
import Unauthorized from "../pages/Unauthorized";

import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

import AdminLayout from "../components/layout/AdminLayout";
import UserLayout from "../components/layout/UserLayout";
import AuthLayout from "../components/layout/AuthLayout";

const AppRoutes = () => {
  return (
    <Routes>

      {/* ---------- AUTH ROUTES ---------- */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route path="/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />

      <Route
        path="/user"
        element={
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        }
      />


      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default AppRoutes;
