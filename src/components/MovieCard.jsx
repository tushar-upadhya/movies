import { useWatchlist } from "@/contexts/WatchlistContext";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const MovieCard = ({ movie }) => {
  const { addToWatchlist } = useWatchlist();

  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  return (
    <div className="container mx-auto overflow-hidden duration-300 hover:scale-105 hover:shadow-md">
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
      <div className="p-4">
        <Button onClick={handleAddToWatchlist}>Add to Watchlist</Button>
      </div>
    </div>
  );
};

export default MovieCard;
