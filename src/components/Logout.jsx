import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "./ui/button";

const Logout = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="shadow-md p-4rounded-lg">
      <h2 className="mb-4 text-lg font-semibold">Logout</h2>
      {user && (
        <div>
          <p>Logged in as: {user.email}</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      )}
    </div>
  );
};

export default Logout;
