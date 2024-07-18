import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return <Element {...rest} />;
  } else {
    return <Navigate to="/auth" state={{ from: location }} />;
  }
};

export default PrivateRoute;
