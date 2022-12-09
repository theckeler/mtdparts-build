import MenuLink from "./Link";

const Loop = ({ menuData, footerNav, addClass }) => {
  // const openSubMenu = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();

  //   console.log("click", e);

  //   const subNav = e.target.parentNode.querySelector("ul");
  //   subNav.classList.toggle("overflow-hidden");
  //   subNav.classList.toggle("mh-0");
  // };

  return (
    <>
      {menuData.map((link, i) => {
        const ariaCurrent = link.ariaCurrent && { "aria-current": "page" };
        const borderBottom = footerNav ? " border-footer" : " border-bottom";
        const hasSubmenu = link.sub ? " has-submenu" : "";

        return (
          <li
            className={`nav-item text-align-left w-100${borderBottom}${hasSubmenu}`}
            role="menuitem"
            key={i}
            // onClick={(e) => link.sub && openSubMenu(e)}
          >
            <MenuLink {...{ link, ariaCurrent, footerNav, addClass }} />
          </li>
        );
      })}
    </>
  );
};

export default Loop;
