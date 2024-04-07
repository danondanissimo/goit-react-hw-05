import css from "./SearchBox.module.css";

const SearchBox = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const searchQuery = form.elements.search.value;
    console.log("searchQuery: ", searchQuery);

    onSubmit(searchQuery);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        name="search"
        className={css.field}
      />
      <button type="submit" className={css.button}>
        🔍
      </button>
    </form>
  );
};

export default SearchBox;
