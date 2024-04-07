import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" && <h2>Trending today</h2>}
      <ul className={css.list}>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link
                state={location}
                to={`/movies/${movie.id}`}
                className={css.link}
              >
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
