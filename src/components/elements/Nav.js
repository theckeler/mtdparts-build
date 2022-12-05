import MenuMain from "./MenuMain";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as IconEatHam } from "../images/hamburger.svg";
import { ReactComponent as IconEatHamClose } from "../images/hamburger-close.svg";

const Nav = ({ menuData }) => {
  //console.log("menuData", menuData);

  const openMenu = (e) => {
    document.querySelector("#main-menu").classList.toggle("active");
  };

  return (
    <nav
      className="bg-light"
      aria-labelledby="mainmenu"
      aria-label="Main Nav"
      role="navigation"
    >
      <ul className="d-flex list-unstyled align-items-center py-2 px-3 mb-0">
        <li className="max-w-48">
          <button
            aria-haspopup="true"
            aria-controls="main-menu"
            type="button"
            aria-label="Open Menu"
            tabIndex="0"
            onClick={openMenu}
            data-toggle="collapse"
            data-target="#main-menu"
            className="btn btn-hamburger hamburger"
          >
            <IconEatHamClose />
            <span className="visually-hidden">Toggle Navigation</span>
          </button>
        </li>
        <li className="max-w-120 ms-2">
          <a href="/" className="w-100">
            <Logo />
          </a>
        </li>
      </ul>

      <h2 id="mainmenu" className="visually-hidden">
        Main Menu
      </h2>
      <MenuMain {...{ menuData }} />
    </nav>
  );
};

export default Nav;
