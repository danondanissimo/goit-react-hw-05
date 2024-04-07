import css from "./MovieCast.module.css";

const MovieCast = ({ cast }) => {
  return (
    <div>
      <ul className={css.list}>
        {cast &&
          cast.map((actor) => {
            return (
              <li key={actor.id} className={css.listItem}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                  className={css.img}
                />
                <h1 className={css.actorName}>{actor.name}</h1>
                <p className={css.characterName}>{actor.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MovieCast;
