import { useParams } from "react-router-dom";
import { getMovieDetails } from "../utils/api";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(imdbID);
      setMovie(movieDetails);
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4 mx-auto bg-white rounded-lg shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">
        {movie.Title} ({movie.Year})
      </h2>
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full max-w-xs mb-4 md:w-1/3 md:mb-0 md:mr-4"
        />
        <div className="md:flex-1">
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <p>
            <strong>Language:</strong> {movie.Language}
          </p>
          <p>
            <strong>Country:</strong> {movie.Country}
          </p>
          <p>
            <strong>Runtime:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>Released:</strong> {movie.Released}
          </p>
          <p>
            <strong>Box Office:</strong> {movie.BoxOffice}
          </p>
          <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p>
          <p>
            <strong>IMDB Votes:</strong> {movie.imdbVotes}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
