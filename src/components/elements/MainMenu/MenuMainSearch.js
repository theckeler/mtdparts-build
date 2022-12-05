import { ReactComponent as IconSearch } from "../../images/search.svg";

const MenuMainSearch = ({ addClass }) => {
  return (
    <div className={`input-group mt-3 ${addClass}`}>
      <input
        type="text"
        className="form-control border"
        placeholder="Keyword, Model or Part #"
        aria-label="Search Text"
        aria-describedby="search"
      />
      <button
        className="btn btn-outline-secondary max-w-48 border"
        type="button"
        id="search"
        aria-label="Search"
      >
        <IconSearch />
      </button>
    </div>
  );
};

export default MenuMainSearch;
