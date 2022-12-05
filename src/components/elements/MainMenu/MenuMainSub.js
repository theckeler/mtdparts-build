const MenuLink = ({
  link,
  ariaCurrent,
  hasSub,
  IconArrowDown,
  IconArrowUp,
  disableClick,
}) => {
  return (
    <ul
      className="d-flex flex-column list-unstyled bg-white mh-0 overflow-hidden subnav"
      aria-label={`${link.title} Menu`}
      role="menu"
    >
      {link.sub.map((subLink, i) => {
        return (
          <li
            className="nav-item text-align-left w-100 mb-2"
            role="menuitem"
            key={i}
          >
            <a
              href={link.url}
              {...ariaCurrent}
              {...hasSub}
              onClick={disableClick}
              className="nav-link d-block w-100 py-1 d-block d-flex fs-7"
            >
              {subLink.title}
              {subLink.sub && (
                <>
                  <IconArrowDown className="max-w-25 ms-auto" />
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
                        onClick={disableClick}
                        className="nav-link d-block w-100 py-1 d-block d-flex fs-7"
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

export default MenuLink;
