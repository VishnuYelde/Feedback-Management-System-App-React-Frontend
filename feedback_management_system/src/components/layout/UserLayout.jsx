import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
