import { Link } from "react-router-dom";

const WatchCard = ({ movie, addToWatchlist }) => {
  return (
    <div className="container relative mx-auto overflow-hidden duration-300 shadow-md hover:scale-105">
      <Link to={`/movie/${movie.imdbID}`}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="object-cover w-full h-auto mb-4"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{movie.Title}</h3>
          <p className="text-sm text-slate-600">{movie.Year}</p>
          <div className="flex items-center mt-2">
            {/* <div className="flex items-center justify-center w-8 h-8 p-1 text-white bg-green-500 rounded-full">
              <span className="text-xs">{movie.imdbRating}</span>
            </div> */}
            {/* <span className="ml-2 text-sm">/ 100</span> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WatchCard;
