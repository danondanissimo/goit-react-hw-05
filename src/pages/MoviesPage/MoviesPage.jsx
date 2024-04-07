import { useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchMoviesByQuery } from "../../components/Services/Api";
import MovieList from "../../components/MovieList/MovieList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);

  const notify = () => toast.error("Please fill in the Search field.");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const onSetSearchQuery = (searchTerm) => {
    if (searchTerm.length === 0) {
      notify();
    } else {
      setSearchParams({ query: searchTerm });
    }
  };

  useEffect(() => {
    if (query === null) return;

    async function fetchImagesByQuery() {
      try {
        setLoading(true);
        const response = await fetchMoviesByQuery(query);

        console.log(response.data.total_results);

        if (response.data.total_results === 0) {
          toast.error("Sorry, we couldn't find anything.");
          setMovies(null);
          setLoading(false);
        } else {
          setMovies(response.data.results);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImagesByQuery();
  }, [query]);

  return (
    <div>
      <SearchBox onSubmit={onSetSearchQuery} />
      <Toaster />
      {error && <ErrorMessage />}
      {loading === true && <Loader />}
      {movies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
