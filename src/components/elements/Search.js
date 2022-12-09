import { ReactComponent as IconSearch } from "../images/search.svg";

const MenuMainSearch = ({ addClass }) => {
  const randID = Math.floor(Math.random() * 10000) + 1;

  return (
    <div className={`input-group mt-3 ${addClass}`}>
      <input
        type="text"
        className="form-control border"
        placeholder="Keyword, Model or Part #"
        aria-label="Search Text"
        aria-describedby={`search-${randID}`}
      />
      <button
        className="btn btn-outline-secondary max-w-48 border"
        type="button"
        id={`search-${randID}`}
        aria-label="Search"
      >
        <IconSearch class="fill-white" />
      </button>
    </div>
  );
};

export default MenuMainSearch;
