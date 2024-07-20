import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { Button } from "./ui/button";

const Sidebar = ({ closeSidebar }) => {
  const { user, logout } = useContext(AuthContext);

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/watchlist", label: "Watchlist" },
  ];

  return (
    <div className="h-full p-4 bg-white shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Watchlist</h2>
      <div>
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index} className="mb-2">
              <Link
                to={link.to}
                onClick={closeSidebar}
                className={`flex items-center p-2 rounded-md hover:bg-gray-200 ${
                  link.to === window.location.pathname
                    ? "text-red-500 bg-red-100"
                    : ""
                }`}
              >
                <span className="ml-2">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="flex items-center mt-2 sm:mt-0">
          {user ? (
            <div className="flex items-center justify-between w-full space-x-4 text-sm sm:text-base">
              <span className="hidden sm:block">{user.email}</span>
              <Button
                onClick={logout}
                className="bg-green-500 hover:bg-green-600"
              >
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/auth" className="text-sm sm:text-base">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
