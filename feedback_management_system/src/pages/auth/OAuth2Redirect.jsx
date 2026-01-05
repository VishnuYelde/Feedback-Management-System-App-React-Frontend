import { useEffect, useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const OAuth2Redirect = () => {
  const { login } = useContext(AuthContext);
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.get("token");
    if (token) {
      login(token);
      const decoded = JSON.parse(atob(token.split(".")[1]));
      navigate(decoded.role === "ADMIN" ? "/admin" : "/user");
    }
  }, []);

  return <p>Logging in...</p>;
};

export default OAuth2Redirect;
