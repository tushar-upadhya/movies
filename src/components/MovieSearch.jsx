import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { searchMovies } from "../utils/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useSearch } from "../contexts/SearchContext";

const MovieSearch = () => {
  const { query, setQuery, results, setResults } = useSearch();

  const debounceRef = useRef(null);

  const handleSearch = async () => {
    const movies = await searchMovies(query);
    setResults(movies || []);
  };

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      if (query) {
        handleSearch();
      }
    }, 200);
  }, [query]);

  return (
    <div className="">
      <div className="container  flex p-4 mx-auto mb-4 w-[80%]">
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
                className="object-cover w-full h-auto mb-4"
              />
              <div className="flex items-center justify-center gap-4 text-center">
                <h3 className="text-sm font-semibold">{movie.Title}</h3>
                <p className="text-sm text-slate-600"> ({movie.Year})</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
