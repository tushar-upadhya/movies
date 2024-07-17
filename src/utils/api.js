import axios from "axios";

const API_KEY = "5ea120f8";
const OMDB_API_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: API_KEY,
        s: query,
      },
    });
    return response.data.Search;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: API_KEY,
        i: imdbID,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
