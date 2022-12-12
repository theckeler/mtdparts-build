import MenuSub from "./Sub";

import { ReactComponent as IconArrowDown } from "../../images/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../../images/arrow-up.svg";
import { ReactComponent as IconPlus } from "../../images/icon-plus.svg";
import { ReactComponent as IconMinus } from "../../images/icon-minus.svg";

const MenuLink = ({ link, ariaCurrent, addClass, footerNav }) => {
  const IconMap = {
    IconArrowDown: IconArrowDown,
    IconArrowUp: IconArrowUp,
    IconPlus: IconPlus,
    IconMinus: IconMinus,
  };

  let ComponentName;
  let ComponentNameAlt;
  let svgFill;

  if (footerNav) {
    ComponentName = IconMap["IconPlus"];
    ComponentNameAlt = IconMap["IconMinus"];
    svgFill = "fill-white";
  } else {
    ComponentName = IconMap["IconArrowDown"];
    ComponentNameAlt = IconMap["IconArrowUp"];
    svgFill = "fill-black";
  }

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
    e.target.parentNode
      .querySelectorAll(".menu-icons span")
      .forEach(function (e) {
        e.classList.toggle("d-none");
      });
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
              <div className="menu-icons pe-none max-w-20 ms-auto">
                <span className="d-block">
                  <ComponentName
                    aria-disabled="true"
                    className={` ${svgFill}`}
                  />
                </span>
                <span className="d-none">
                  <ComponentNameAlt
                    aria-disabled="true"
                    className={` ${svgFill}`}
                  />
                </span>
              </div>
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
          className={`nav-link d-block w-100 py-3 d-flex ${addClass}`}
        >
          {link.title}
        </a>
      )}
    </>
  );
};

export default MenuLink;
