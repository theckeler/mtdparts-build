import MenuSub from "./Sub";

import { ReactComponent as IconArrowDown } from "../../images/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../../images/arrow-up.svg";
import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";

const MenuLink = ({ link, ariaCurrent, addClass, footerNav }) => {
  const IconMap = {
    IconArrowDown: IconArrowDown,
    IconArrowUp: IconArrowUp,
    IconPlus: IconPlus,
  };

  let ComponentName;
  let svgFill;

  if (footerNav) {
    ComponentName = IconMap["IconPlus"];
    svgFill = "fill-white";
  } else {
    ComponentName = IconMap["IconArrowDown"];
    svgFill = "fill-black";
  }

  //const hasAria = link.sub && { "aria-expanded": "false" };

  const openSubMenu = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.target.classList.toggle("active");
    e.target.setAttribute(
      "aria-expanded",
      `${!(e.target.getAttribute("aria-expanded") === "true")}`
    );
    const subNav = e.target.parentNode.querySelector("ul");
    subNav.classList.toggle("mh-0");
    subNav.classList.toggle("active");
  };

  return (
    <>
      {link.sub ? (
        <>
          <button
            {...ariaCurrent}
            aria-expanded="false"
            className={`nav-link d-block w-100 py-3 d-flex btn-link border-0 bg-transparent ${addClass}`}
            onClick={openSubMenu}
          >
            {link.title}
            {
              <ComponentName
                aria-disabled="true"
                className={`pe-none max-w-20 ms-auto ${svgFill}`}
              />
            }
          </button>
          <MenuSub
            {...{
              link,
              ariaCurrent,
              IconArrowDown,
              IconArrowUp,
            }}
          />
        </>
      ) : (
        <a
          href={link.url}
          {...ariaCurrent}
          role="button"
          className={`nav-link d-block w-100 py-3 d-flex ${addClass}`}
        >
          {link.title}
        </a>
      )}
    </>
  );
};

export default MenuLink;
