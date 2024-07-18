import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const WatchlistContext = createContext();

export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    if (user) {
      const storedWatchlist = localStorage.getItem(`watchlist_${user.email}`);
      setWatchlist(storedWatchlist ? JSON.parse(storedWatchlist) : []);
    }
  }, [user]);

  const addToWatchlist = (movie) => {
    if (user) {
      const updatedWatchlist = [...watchlist, movie];
      setWatchlist(updatedWatchlist);
      localStorage.setItem(
        `watchlist_${user.email}`,
        JSON.stringify(updatedWatchlist)
      );
    }
  };

  const removeFromWatchlist = (imdbID) => {
    if (user) {
      const updatedWatchlist = watchlist.filter(
        (movie) => movie.imdbID !== imdbID
      );
      setWatchlist(updatedWatchlist);
      localStorage.setItem(
        `watchlist_${user.email}`,
        JSON.stringify(updatedWatchlist)
      );
    }
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
