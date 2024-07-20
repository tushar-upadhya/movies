import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useWatchlist } from "@/contexts/WatchlistContext";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import Login from "../components/Login";
import WatchCard from "../components/WatchCard";
import Sidebar from "../components/Sidebar";
import { Menu } from "lucide-react";

const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    window.onpopstate = () => {
      window.location.reload();
    };
    return () => {
      window.onpopstate = null;
    };
  }, []);

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex h-screen">
      {/* Overlay for small screens when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0 lg:static lg:block`}
      >
        <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />
      </div>

      <div className="flex-1 p-4 overflow-auto lg:ml-auto">
        <div className="block p-4 lg:hidden">
          <Button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu size={24} />
          </Button>
        </div>
        <h2 className="mb-4 text-2xl font-semibold text-center">Watchlist</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {watchlist.map((movie) => (
            <WatchCard
              key={movie.imdbID}
              movie={movie}
              addToWatchlist={removeFromWatchlist}
            />
          ))}
        </div>
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default Watchlist;
