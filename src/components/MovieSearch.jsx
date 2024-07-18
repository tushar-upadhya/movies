import { useWatchlist } from "@/contexts/WatchlistContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../utils/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setResults(movies || []);
  };

  const isInWatchlist = (imdbID) => {
    return watchlist.some((movie) => movie.imdbID === imdbID);
  };

  return (
    <div className="">
      <div className="container flex p-4 mx-auto mb-4 w-[80%]">
        <Input
          type="text"
          placeholder="Enter the movie title"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {results.map((movie) => (
          <div
            key={movie.imdbID}
            className="container mx-auto overflow-hidden duration-300 hover:scale-105 hover:shadow-md"
          >
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="object-cover w-full h-64"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{movie.Title}</h3>
                <p className="text-sm text-slate-600">{movie.Year}</p>
              </div>
            </Link>
            {isInWatchlist(movie.imdbID) ? (
              <Button onClick={() => removeFromWatchlist(movie.imdbID)}>
                Remove from Watchlist
              </Button>
            ) : (
              <Button onClick={() => addToWatchlist(movie)}>
                Add to Watchlist
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
