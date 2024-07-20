import { useContext, useEffect } from "react";
import Login from "../components/Login";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);

  return (
    <div className="h-auto ">
      <Login />
    </div>
  );
};

export default Auth;
