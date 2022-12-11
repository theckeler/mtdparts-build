import { ReactComponent as IconArrowUp } from "../../images/arrow-up.svg";

const MenuSub = ({ link, ariaCurrent }) => {
  const hasSub = link.sub && { "aria-expanded": "true" };

  return (
    <ul
      className="d-flex flex-column list-unstyled bg-white mh-0 overflow-hidden subnav"
      aria-label={`${link.title} Menu`}
      role="menu"
    >
      {link.sub.map((subLink, i) => {
        return (
          <li
            className="nav-item text-align-left w-100"
            role="menuitem"
            key={i}
          >
            <a
              href={link.url}
              {...ariaCurrent}
              {...hasSub}
              aria-expanded="true"
              className="nav-link d-block w-100 py-2 px-3 d-block d-flex fs-7"
            >
              {subLink.title}
              {subLink.sub && (
                <>
                  <IconArrowUp className="max-w-25 ms-auto" />
                </>
              )}
            </a>
            {subLink.sub && (
              <ul
                className="d-flex flex-column list-unstyled bg-white p-2"
                role="menu"
              >
                {subLink.sub.map((subLink, i) => {
                  return (
                    <li
                      className="nav-item text-align-left w-100 mb-2"
                      role="menuitem"
                      key={i}
                    >
                      <a
                        href={link.url}
                        className="nav-link d-block w-100 py-2 px-3 d-block d-flex fs-7"
                      >
                        {subLink.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuSub;
