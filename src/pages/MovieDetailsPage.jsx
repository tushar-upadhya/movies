import { Link, useParams } from "react-router-dom";
import { getMovieDetails } from "../utils/api";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useWatchlist } from "@/contexts/WatchlistContext";
import MovieDetails from "@/components/MovieDetails";
import { Progress } from "@/components/ui/progress";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  const { addToWatchlist, removeFromWatchlist, watchlist } = useWatchlist();
  const handleAddToWatchlist = () => {
    addToWatchlist(movie);
  };

  const isInWatchlist = (imdbID) => {
    return watchlist.some((movie) => movie.imdbID === imdbID);
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(imdbID);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <Progress value={33} />;
  }

  return (
    <div className="container p-4 mx-auto rounded-lg shadow-md">
      <MovieDetails movie={movie} />
      <div className="p-4">
        {isInWatchlist(movie.imdbID) ? (
          <Button onClick={() => removeFromWatchlist(movie.imdbID)}>
            Remove from Watchlist
          </Button>
        ) : (
          <Button onClick={() => addToWatchlist(movie)}>
            Add to Watchlist
          </Button>
        )}
        <Link to={"/"}>
          <Button>Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
