import MenuLoop from "./Loop";

const Nav = ({ menuData, menuFooterData }) => {
  return (
    <ul
      className="viewport-width navbar-collapse nav list-unstyled flex-column"
      aria-label="Footer Menu"
      role="menu"
    >
      <li className="nav-item text-align-left w-100" role="menuitem">
        <ul className="viewport-width nav list-unstyled flex-column flex-lg-row">
          <li className="col-lg-6">
            <div className="pe-lg-2">
              <ul className="nav list-unstyled flex-column">
                <MenuLoop
                  menuData={menuData}
                  footerNav={true}
                  addClass="text-white"
                />
              </ul>
            </div>
          </li>
          <li className="col-lg-6">
            <div className="ps-lg-2">
              <ul className="nav list-unstyled flex-column">
                <MenuLoop
                  menuData={menuFooterData}
                  footerNav={true}
                  addClass="text-white"
                />
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Nav;
