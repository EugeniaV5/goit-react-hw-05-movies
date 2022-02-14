import axios from 'axios';

const API_KEY = 'd16c53a3a4d5eb154f379745597d6181';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrending() {
  const response = await axios.get(`/3/trending/movie/day?api_key=${API_KEY}`);
  return response;
}

export async function getMoviesByQuery(searchQuery) {
  const { data } = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&include_adult=false`
  );
  return { data };
}

export async function getMovieById(id) {
  const { data } = await axios.get(`/3/movie/${id}?api_key=${API_KEY}`);
  return { data };
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return { data };
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return { data };
}
