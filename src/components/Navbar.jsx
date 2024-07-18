import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const navigationLinks = [
    { to: "/", label: "Home" },
    { to: "/watchlist", label: "Watchlist" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 text-white bg-gray-800">
      <div>
        {navigationLinks.map((link, index) => (
          <Link key={index} to={link.to} className="mr-4">
            {link.label}
          </Link>
        ))}
      </div>
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.email}</span>
            <button onClick={logout} className="px-4 py-2 bg-red-600 rounded">
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="px-4 py-2 bg-blue-600 rounded">
            Login/Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
