const MovieDetails = ({ movie }) => {
  return (
    <div className="p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="object-fill w-full max-w-xs mb-4 md:w-1/5 md:mb-0 md:mr-4"
        />
        <div className="leading-8 md:flex-1">
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
          <p className="mt-2 font-semibold">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
