import MenuMain from "./Menu/Main";
import MenuMainExtras from "./Menu/Extras";

import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as IconEatHam } from "../images/hamburger.svg";
import { ReactComponent as IconEatHamClose } from "../images/hamburger-close.svg";

const Nav = ({ menuData }) => {
  const openMenu = (e) => {
    e.preventDefault();
    const mainMenu = document.querySelector("#main-menu");
    mainMenu.classList.toggle("active");
    mainMenu.classList.toggle("mh-0");
    mainMenu.classList.toggle("min-vh-0");
    document
      .querySelector(".btn-hamburger")
      .setAttribute(
        "aria-expanded",
        `${!(
          document
            .querySelector(".btn-hamburger")
            .getAttribute("aria-expanded") === "true"
        )}`
      );
    document.querySelectorAll("#main-menu-button span").forEach(function (e) {
      e.classList.toggle("d-none");
    });
    document.querySelector("body").classList.toggle("overflow-hidden");
    document
      .querySelectorAll("header .has-submenu .subnav")
      .forEach(function (e) {
        e.classList.add("mh-0");
      });
  };

  return (
    <nav
      className="bg-light box-shadow "
      aria-labelledby="main-menu-desc"
      aria-label="Main Nav"
      role="navigation"
      id="nav-main"
    >
      <h2 id="main-menu-desc" className="visually-hidden">
        Main Menu
      </h2>
      <div className="container-lg">
        <ul className="d-flex list-unstyled align-items-center py-2 px-1 mb-0">
          <li className="main-menu-button max-w-48" id="main-menu-button">
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
              aria-expanded="false"
            >
              <span className="button-ham pe-none">
                <IconEatHam />
              </span>
              <span className="button-x pe-none d-none">
                <IconEatHamClose />
              </span>
              <span className="visually-hidden">Toggle Navigation</span>
            </button>
          </li>
          <li className="max-w-120 ms-2 px-1">
            <a href="/" className="w-100" aria-label="Link to Home">
              <Logo />
            </a>
          </li>
          <li className="ms-auto">
            <MenuMainExtras />
          </li>
        </ul>

        <MenuMain {...{ menuData }} />
      </div>
    </nav>
  );
};

export default Nav;
