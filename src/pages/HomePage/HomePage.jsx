import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchTrendingMovies } from "../../components/Services/Api";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function requestTrendingMovies() {
      try {
        setLoading(true);
        const response = await fetchTrendingMovies();

        setMovies(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    requestTrendingMovies();
  }, []);

  return (
    <div>
      {movies && <MovieList movies={movies} />}
      {error && <ErrorMessage />}
      {loading === true && <Loader />}
    </div>
  );
};

export default HomePage;
