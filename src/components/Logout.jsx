import { AuthContext } from "@/contexts/AuthContext";
import { useContext } from "react";

const Logout = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-lg font-semibold">Logout</h2>
      {user && (
        <div>
          <p>Logged in as: {user.email}</p>
          <button
            className="px-4 py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Logout;
