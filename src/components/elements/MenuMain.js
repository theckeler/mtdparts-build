import MenuLink from "./MenuLink";

import { ReactComponent as IconCart } from "../images/cart.svg";
import { ReactComponent as IconAccount } from "../images/account.svg";
import { ReactComponent as IconSearch } from "../images/search.svg";

const Nav = ({ menuData }) => {
  return (
    <div className="overflow-scroll vh-100">
      <ul
        role="menu"
        id="main-menu"
        aria-label="Main Menu"
        className="min-vw-100 min-vh-100 viewport-width navbar-collapse nav list-unstyled flex-column pt-3 pb-5"
      >
        {menuData.map((link, i) => {
          const ariaCurrent = link.ariaCurrent && { "aria-current": "page" };
          const hasSub = link.sub && { "aria-expanded": "false" };
          return (
            <li
              className="nav-item text-align-left w-100 border-bottom"
              role="menuitem"
              key={i}
            >
              <MenuLink {...{ link, ariaCurrent, hasSub }} />
            </li>
          );
        })}
        <li
          className="nav-item text-align-left w-100 border-bottom py-1 px-2"
          role="menuitem"
        >
          <ul className="d-flex list-unstyled align-items-center">
            <li className="col-6 max-w-48 p-2 position-relative">
              <div
                className="max-w-25 max-h-25 bg-green p-1 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center fs-small-extra position-absolute"
                style={{ top: "5px", right: "10px" }}
              >
                99
              </div>
              <IconCart />
            </li>
            <li className="col-6 max-w-48 p-2">
              <IconAccount />
            </li>
          </ul>
        </li>
        <li
          className="nav-item text-align-left w-100 pb-5 px-3"
          role="menuitem"
        >
          <div className="input-group mt-3">
            <input
              type="text"
              className="form-control border"
              placeholder="Keyword, Model or Part #"
              aria-label=""
              aria-describedby="search"
            />
            <button
              className="btn btn-outline-secondary max-w-48 border"
              type="button"
              id="search"
            >
              <IconSearch />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
