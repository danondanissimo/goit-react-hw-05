import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import {
  fetchMovieCast,
  fetchMovieDetails,
  fetchMovieReviews,
} from "../../components/Services/Api";
import { Route, Routes } from "react-router-dom";

import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const MovieCast = lazy(() => import("../../components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("../../components/MovieReviews/MovieReviews")
);

import css from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  const [movieGenres, setMovieGenres] = useState("");
  const [movieRating, setMovieRating] = useState(0);
  const [movieReviews, setMovieReviews] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(false);
  const [loadingMovie, setLoadingMovie] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  useEffect(() => {
    async function requestMovieDetails() {
      try {
        setLoadingMovie(true);
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
        if (response) {
          const genres = response.data.genres
            .map((genre) => genre.name)
            .join(", ");
          setMovieGenres(genres);
          const rating = response.data.vote_average * 10;

          setMovieRating(rating.toFixed(0));
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoadingMovie(false);
      }
    }

    async function requestMovieReviews() {
      try {
        const response = await fetchMovieReviews(movieId);
        setMovieReviews(response);
      } catch (error) {
        setError(true);
      }
    }

    async function requestMovieCast() {
      try {
        const response = await fetchMovieCast(movieId);
        setMovieCast(response.data.cast);
      } catch (error) {
        setError(true);
      }
    }

    requestMovieCast();
    requestMovieReviews();
    requestMovieDetails();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Link to={backLinkRef.current} className={css.backLink}>
        Go back
      </Link>
      {error && <ErrorMessage />}
      {loadingMovie === true && <Loader />}

      {movie && (
        <div>
          <div className={css.mainInfo}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`}
              className={css.img}
            />
            <div>
              <h1 className={css.movieName}>{movie.data.title}</h1>
              <p>User scrore: {movieRating}%</p>
              <h2 className={css.overviewHeading}>Overview</h2>
              <p className={css.overviewText}>{movie.data.overview}</p>
              <h2 className={css.genresHeading}>Genres</h2>
              <p className={css.genresText}>{movieGenres}</p>
            </div>
          </div>
          <div className={css.additionalInfo}>
            <h2 className={css.additionalInfoHeading}>
              Additional information:
            </h2>
            <ul className={css.additionalInfoList}>
              <li>
                <Link to="cast" className={css.link}>
                  Cast
                </Link>
              </li>

              <li>
                <Link to="reviews" className={css.link}>
                  Reviews
                </Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<MovieCast cast={movieCast} />} />

                <Route
                  path="reviews"
                  element={<MovieReviews reviews={movieReviews} />}
                />
              </Routes>
            </Suspense>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
