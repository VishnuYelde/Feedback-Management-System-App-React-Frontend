import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/authApi";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async (email, password) => {
    try {
      const res = await loginUser({ email, password });
      login(res.token);

      const decoded = JSON.parse(atob(res.token.split(".")[1]));
      navigate(decoded.role === "ADMIN" ? "/admin" : "/user");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin(email, password);
  };

  const handleTestLogin = () => {
    doLogin("test@gmail.com", "12345");
  };

  const handleTestAdminLogin = () => {
    doLogin("admin@gmail.com", "12345");
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow w-80" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <button
          type="button"
          onClick={handleTestLogin}
          className="w-full bg-green-500 text-white py-2 rounded mt-3 hover:bg-green-600"
        >
          Login as Test User
        </button>

        <button
          type="button"
          onClick={handleTestAdminLogin}
          className="w-full bg-green-500 text-white py-2 rounded mt-3 hover:bg-green-600"
        >
          Login as Test Admin
        </button>


        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 font-semibold">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
