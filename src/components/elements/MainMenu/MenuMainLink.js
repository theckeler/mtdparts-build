import MenuMainSub from "./MenuMainSub";

import { ReactComponent as IconArrowDown } from "../../images/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../../images/arrow-up.svg";

const MenuLink = ({ link, ariaCurrent, hasSub }) => {
  const disableClick = (e) => {
    e.preventDefault();
  };

  const openSubMenu = (e) => {
    e.preventDefault();
    const subNav = e.target.parentNode.querySelector("ul");
    subNav.classList.toggle("overflow-hidden");
    subNav.classList.toggle("mh-0");
  };

  return (
    <>
      <a
        href={link.url}
        {...ariaCurrent}
        {...hasSub}
        onClick={openSubMenu}
        className={`nav-link d-block w-100 py-3 d-block d-flex ${
          hasSub && "dropdown"
        }`}
      >
        {link.title}
        {hasSub && (
          <>
            <IconArrowDown className="max-w-25 ms-auto" />
          </>
        )}
      </a>
      {hasSub && (
        <MenuMainSub
          {...{
            link,
            ariaCurrent,
            hasSub,
            IconArrowDown,
            IconArrowUp,
            disableClick,
          }}
        />
      )}
    </>
  );
};

export default MenuLink;
