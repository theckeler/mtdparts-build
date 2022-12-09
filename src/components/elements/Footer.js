import MenuLink from "./Menu/Link";
import MenuLoop from "./Menu/Loop";

const Footer = ({ menuData, menuFooterData }) => {
  //console.log("menuData", menuData);

  const combinedData = menuData.concat(menuFooterData);
  // console.log("combinedData", combinedData);

  return (
    <nav
      className="px-3 py-2"
      aria-labelledby="footer-menu-desc"
      aria-label="Footer Nav"
      role="navigation"
      id="nav-footer"
    >
      <h2 id="footer-menu-desc" className="visually-hidden">
        Footer Menu
      </h2>

      <ul
        className="viewport-width navbar-collapse nav list-unstyled flex-column pb-5"
        aria-label="Main Menu"
        role="menu"
      >
        <li
          className="nav-item text-align-left w-100 border-footer"
          role="menuitem"
        >
          <a
            href="#top"
            className="nav-link d-block w-100 py-3 text-white text-center"
          >
            Back to top &#8613;
          </a>
        </li>

        <MenuLoop
          menuData={combinedData}
          footerNav={true}
          addClass="text-white"
        />

        <li
          className="nav-item text-align-left w-100 d-flex fs-7 mt-4"
          role="menuitem"
        >
          <ul className="list-unstyled d-flex">
            <li>
              <a href="#top" className="col nav-link text-white">
                Site Directory
              </a>
            </li>
            <li>
              <a href="#top" className="col nav-link  text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#top" className="col nav-link  text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </li>
        <li
          className="nav-item text-align-left w-100 fs-7 mt-4"
          role="menuitem"
        >
          <p className="d-block w-100 text-white px-3 mb-1">Our Other Sites:</p>
          <ul className="list-unstyled d-flex">
            <li>
              <a href="#top" className="nav-link text-white">
                Cub Cadet
              </a>
            </li>
            <li>
              <a href="#top" className="nav-link text-white">
                Troy-Bilt
              </a>
            </li>
            <li>
              <a href="#top" className="nav-link text-white">
                Remington
              </a>
            </li>
            <li>
              <a href="#top" className="nav-link text-white">
                MTD Products Inc.
              </a>
            </li>
          </ul>
        </li>
        <li
          className="nav-item text-align-left w-100 fs-7 mt-3"
          role="menuitem"
        >
          <a href="#top" className="nav-link d-block w-100 text-white">
            MTD Products LLC P.O. Box 368022. Cleveland, OH 44136
          </a>
        </li>
        <li
          className="nav-item text-align-left w-100 fs-7 mt-3"
          role="menuitem"
        >
          <a href="#top" className="nav-link d-block w-100 text-white">
            If you experience any problems accessing this website, please call
            us at 1-800-269-6215 for assistance.
          </a>
        </li>
        <li
          className="nav-item text-align-left w-100 fs-7 mt-3"
          role="menuitem"
        >
          <a href="#top" className="nav-link d-block w-100 text-white">
            Copyright © MTD 2021
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
