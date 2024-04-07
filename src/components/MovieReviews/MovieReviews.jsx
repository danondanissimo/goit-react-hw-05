import css from "./MovieReviews.module.css";

const MovieReviews = ({ reviews }) => {
  console.log(reviews);

  return (
    <ul className={css.list}>
      {reviews.data.total_results > 0 &&
        reviews.data.results.map((review) => {
          return (
            <li key={review.id} className={css.item}>
              <h1 className={css.author}>{review.author}</h1>
              <p className={css.review}>{review.content}</p>
            </li>
          );
        })}

      {reviews.data.total_results < 1 && (
        <li>
          <p>We don&apos;t have any reviews for this movie.</p>
        </li>
      )}
    </ul>
  );
};

export default MovieReviews;
