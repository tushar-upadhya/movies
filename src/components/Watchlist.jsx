import { AuthContext } from "@/contexts/AuthContext";
import { useWatchlist } from "@/contexts/WatchlistContext";
import React, { useContext, useEffect } from "react";

const Watchlist = () => {
  const { user } = useContext(AuthContext);
  const { watchlist, removeFromWatchlist } = useWatchlist();

  useEffect(() => {
    window.onpopstate = () => {
      window.location.reload();
    };
    return () => {
      window.onpopstate = null;
    };
  }, []);

  if (!user) {
    return <div>Please login to see your watchlist.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-semibold">Watchlist</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {watchlist.map((movie) => (
          <div
            key={movie.imdbID}
            className="container mx-auto overflow-hidden duration-300 hover:scale-105 hover:shadow-md"
          >
            <img
              src={movie.Poster}
              alt={movie.Title}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.Title}</h3>
              <p className="text-sm text-slate-600">{movie.Year}</p>
              <button
                className="px-4 py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => removeFromWatchlist(movie.imdbID)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
