import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
