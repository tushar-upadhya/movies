// src/components/MovieDetailsPage.js
import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/api";

const MovieDetailsPage = ({ match }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(match.params.imdbID);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [match.params.imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">
        {movie.Title} ({movie.Year})
      </h2>
      <img src={movie.Poster} alt={movie.Title} className="max-w-xs mt-2" />
      <p className="mt-2">{movie.Plot}</p>
    </div>
  );
};

export default MovieDetailsPage;
