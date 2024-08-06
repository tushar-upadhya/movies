import axios from "axios";

const API_KEY = "5ea120f8";
const OMDB_API_URL = "http://www.omdbapi.com/";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        s: query,
        apiKey: API_KEY,
      },
    });

    if (response.data.Response === "True") {
      return response.data.Search;
    } else {
      console.error("No movies found:", response.data.Error);
      return [];
    }
  } catch (error) {
    console.error(
      "Error searching movies:",
      error.response ? error.response.data : error.message
    );
    return [];
  }
};

export const getMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        i: imdbID,
        apiKey: API_KEY,
      },
    });

    if (response.data.Response === "True") {
      return response.data;
    } else {
      console.error("Error getting movie details:", response.data.Error);
      return null;
    }
  } catch (error) {
    console.error(
      "Error getting movie details:",
      error.response ? error.response.data : error.message
    );
    return null;
  }
};
