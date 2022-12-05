import MenuMainLink from "./MenuMainLink";
import MenuMainExtras from "./MenuMainExtras";
import MenuMainSearch from "./MenuMainSearch";

const Nav = ({ menuData }) => {
  return (
    <div className="overflow-hidden mh-0 vh-100" id="main-menu">
      <ul
        className="min-vw-100 min-vh-100 viewport-width navbar-collapse nav list-unstyled flex-column pb-5"
        aria-label="Main Menu"
        role="menu"
      >
        {menuData.map((link, i) => {
          const ariaCurrent = link.ariaCurrent && { "aria-current": "page" };
          const hasSub = link.sub && { "aria-expanded": "false" };
          return (
            <li
              className={`nav-item text-align-left w-100 border-bottom ${
                hasSub ? "has-submenu" : ""
              }`}
              role="menuitem"
              key={i}
            >
              <MenuMainLink {...{ link, ariaCurrent, hasSub }} />
            </li>
          );
        })}
        <li
          className="nav-item text-align-left w-100 border-bottom py-1 px-2"
          role="menuitem"
        >
          <MenuMainExtras />
        </li>
        <li
          className="nav-item text-align-left w-100 pb-5 px-3"
          role="menuitem"
        >
          <MenuMainSearch />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
