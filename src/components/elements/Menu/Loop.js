import MenuLink from "./Link";

const Loop = ({ menuData, footerNav, addClass }) => {
  return (
    <>
      {menuData.map((link, i) => {
        const ariaCurrent = link.ariaCurrent && { "aria-current": "page" };
        const borderBottom = footerNav ? " border-footer" : " border-bottom";
        const hasSubmenu = link.sub ? " has-submenu" : "";

        return (
          <li
            className={`w-100 nav-item text-align-left ${borderBottom}${hasSubmenu}`}
            key={i}
          >
            <MenuLink {...{ link, ariaCurrent, footerNav, addClass }} />
          </li>
        );
      })}
    </>
  );
};

export default Loop;
