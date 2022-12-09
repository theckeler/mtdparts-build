import MenuLoop from "./Menu/Loop";
import MenuMainExtras from "./MenuMain/MenuMainExtras";
import MenuMainSearch from "./MenuMain/MenuMainSearch";

const Nav = ({ menuData }) => {
  return (
    <div
      className="overflow-scroll remove-scrollbar max-vh-100 mh-0 min-w-100 max-vh-100"
      id="main-menu"
    >
      <ul
        className="min-vh-100 nav list-unstyled flex-column pb-5"
        aria-label="Main Menu"
        role="menu"
      >
        <MenuLoop menuData={menuData} footerNav={false} addClass="text-black" />

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
