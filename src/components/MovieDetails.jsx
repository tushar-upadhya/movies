const MovieDetails = ({ movie }) => {
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

export default MovieDetails;
