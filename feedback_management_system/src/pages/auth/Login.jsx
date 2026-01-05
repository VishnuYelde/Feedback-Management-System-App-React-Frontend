import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { loginUser } from "../../api/authApi";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Common login handler
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

  // Test logins
  const handleTestLogin = () => {
    doLogin("test@gmail.com", "12345");
  };

  const handleTestAdminLogin = () => {
    doLogin("admin@gmail.com", "12345");
  };

  // Google OAuth
  const handleGoogleLogin = () => {
    window.location.href =
      "http://localhost:8080/oauth2/authorization/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow w-80 space-y-3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Login
        </button>

        {/* Test users */}
        <button
          type="button"
          onClick={handleTestLogin}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login as Test User
        </button>

        <button
          type="button"
          onClick={handleTestAdminLogin}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Login as Test Admin
        </button>

        {/* Google OAuth (hide if already logged in) */}
        {!user && (
          <>
            <div className="text-center text-gray-400">OR</div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border py-2 rounded flex justify-center items-center gap-2 hover:bg-gray-100"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </>
        )}

        <p className="text-sm text-center mt-2">
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
