import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <h1 className="font-bold">FMS</h1>

      <div className="flex gap-4 items-center">
        {user?.role === "ADMIN" && (
          <Link to="/admin" className="hover:underline">
            Admin
          </Link>
        )}

        {user?.role === "USER" && (
          <Link to="/user" className="hover:underline">
            Dashboard
          </Link>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
