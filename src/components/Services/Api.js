import axios from "axios";

export const fetchTrendingMovies = async () => {
  const url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=46c2457f166d6314d93addca0629b2fe";

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyNDU3ZjE2NmQ2MzE0ZDkzYWRkY2EwNjI5YjJmZSIsInN1YiI6IjY2MGVjYTU0MzU4MThmMDE2MjNiMTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYjHxCYxg03UIF1YDP1h1CBrg4zHyOtOd0VyNXdG820",
    },
  };

  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieDetails = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=46c2457f166d6314d93addca0629b2fe`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyNDU3ZjE2NmQ2MzE0ZDkzYWRkY2EwNjI5YjJmZSIsInN1YiI6IjY2MGVjYTU0MzU4MThmMDE2MjNiMTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYjHxCYxg03UIF1YDP1h1CBrg4zHyOtOd0VyNXdG820",
    },
  };

  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieReviews = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=46c2457f166d6314d93addca0629b2fe`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyNDU3ZjE2NmQ2MzE0ZDkzYWRkY2EwNjI5YjJmZSIsInN1YiI6IjY2MGVjYTU0MzU4MThmMDE2MjNiMTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYjHxCYxg03UIF1YDP1h1CBrg4zHyOtOd0VyNXdG820",
    },
  };

  const response = await axios.get(url, options);
  return response;
};

export const fetchMovieCast = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=46c2457f166d6314d93addca0629b2fe`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyNDU3ZjE2NmQ2MzE0ZDkzYWRkY2EwNjI5YjJmZSIsInN1YiI6IjY2MGVjYTU0MzU4MThmMDE2MjNiMTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYjHxCYxg03UIF1YDP1h1CBrg4zHyOtOd0VyNXdG820",
    },
  };

  const response = await axios.get(url, options);
  return response;
};

export const fetchMoviesByQuery = async (query) => {
  console.log(query);

  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=46c2457f166d6314d93addca0629b2fe`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmMyNDU3ZjE2NmQ2MzE0ZDkzYWRkY2EwNjI5YjJmZSIsInN1YiI6IjY2MGVjYTU0MzU4MThmMDE2MjNiMTVkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pYjHxCYxg03UIF1YDP1h1CBrg4zHyOtOd0VyNXdG820",
    },
  };

  const response = await axios.get(url, options);
  return response;
};

// (query = " "), page;
