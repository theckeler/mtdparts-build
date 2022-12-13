import MenuFooter from "./Menu/Footer";
import Search from "../elements/Search";

const Footer = ({ menuData, menuFooterData }) => {
  //const combinedData = menuData.concat(menuFooterData);

  return (
    <nav
      className="px-3 py-2 container-xxl"
      aria-label="Footer Menu"
      //role="navigation"
      id="nav-footer"
    >
      <ul className="viewport-width nav list-unstyled flex-column">
        <li className="nav-item text-align-left w-100 border-bottom">
          <a
            href="#top"
            className="nav-link d-block w-100 py-3 text-white text-center"
          >
            Back to top &#8613;
          </a>
        </li>
      </ul>

      <MenuFooter {...{ menuData, menuFooterData }} />

      <ul
        className="viewport-width nav list-unstyled flex-column border-top"
        aria-label="Extras Menu"
      >
        <li className="col-lg-6 nav-item text-align-left fs-7 mt-2 px-2">
          <Search />
        </li>
        <li className="nav-item text-align-left w-100 fs-7 mt-4">
          <ul className="list-unstyled d-flex flex-column flex-md-row">
            <li className="">
              <a href="#top" className="col nav-link text-white">
                Site Directory
              </a>
            </li>
            <li className="">
              <a href="#top" className="col nav-link  text-white">
                Shipping & Returns
              </a>
            </li>
            <li className="">
              <a href="#top" className="col nav-link  text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </li>
        <li
          className="nav-item text-align-left w-100 fs-7 mt-4"
          //role="menuitem"
        >
          <p className="d-block w-100 text-white px-3 mb-1">Our Other Sites:</p>
          <ul className="list-unstyled d-flex flex-column flex-md-row justify-content-start">
            <li className="">
              <a href="#top" className="nav-link text-white">
                Cub Cadet
              </a>
            </li>
            <li className="">
              <a href="#top" className="nav-link text-white">
                Troy-Bilt
              </a>
            </li>
            <li className="">
              <a href="#top" className="nav-link text-white">
                Remington
              </a>
            </li>
            <li className="">
              <a href="#top" className="nav-link text-white">
                MTD Products Inc.
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item text-align-left w-100 fs-7 mt-3 text-white px-3">
          MTD Products LLC P.O. Box 368022. Cleveland, OH 44136
        </li>
        <li className="nav-item text-align-left w-100 fs-7 mt-3 text-white px-3">
          If you experience any problems accessing this website, please call us
          at 1-800-269-6215 for assistance.
        </li>
        <li className="nav-item text-align-left w-100 fs-7 mt-3 text-white px-3">
          Copyright © MTD 2021
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
