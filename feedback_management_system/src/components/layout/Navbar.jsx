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

  if (!user) return null;

  return (
    <nav className="bg-blue-500 text-white px-6 py-3 flex justify-between items-center">
      {/* LEFT */}
      <h1 className="font-bold text-lg">Feedback Management System</h1>

      {/* CENTER LINKS */}
      <div className="flex gap-4">
        {user.role === "ADMIN" && (
          <Link to="/admin">
            Admin Dashboard
          </Link>
        )}

        {user.role === "USER" && (
          <Link to="/user">
            My Feedbacks
          </Link>
        )}
      </div>

      {/* RIGHT USER INFO */}
      <div className="flex items-center gap-4">
        <div className="text-right leading-tight">
          <p className="text-sm font-medium">{user.email}</p>
          <p className="text-xs text-gray-300">{user.role}</p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
