import axios from "axios";
const key = "5948f9aa7d8a75b0361c61d6d4ac4114";
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const trendingFetchMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${key}`);
  return response.data;
};

export const trendingFetchMoviesById = async (movie_id) => {
  const response = await axios.get(
    `/movie/${movie_id}?api_key=${key}&language=en-US&append_to_response=credits,reviews`
  );
  return response.data;
};

export const imageMovie = async () => {
  const response = await axios.get(`configuration?api_key=${key}`);
  return response.data;
};

export const searchFetchMovie = async (query) => {
  const response = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&include_adult=false&query=${query}`
  );
  return response.data;
};
