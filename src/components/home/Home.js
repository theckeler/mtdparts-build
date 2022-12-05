import MenuMainSearch from "../elements/MainMenu/MenuMainSearch";

import { ReactComponent as IconPlayCircle } from "../images/play-circle.svg";
import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";

import brandsData from "../data/brands.json";

const Home = () => {
  const disableClick = (e) => {
    e.preventDefault();
  };

  //console.log(brandsData);

  return (
    <>
      <h1 className="visually-hidden">MTD Parts</h1>
      <section className="bg-secondary py-1">
        <div className="container">
          <p className="text-white text-center text-uppercase fs-7 mb-0">
            Free Shipping on Parts Orders Over $45
          </p>
        </div>
      </section>

      <section>
        <div className="container-md g-0 d-flex flex-column">
          <div className="bg-primary text-white p-4">
            <h2 className="fs-4 text-center text-uppercase">Part Finder</h2>
            <p className="fs-7 text-center w-75 mx-auto">
              Search for parts using your model number, or the part number you
              are replacing.
            </p>
            <MenuMainSearch addClass="mb-2" />
            <p className="fs-8 text-center mb-0">
              Don’t know your model number? Click here for help.
            </p>
          </div>

          <div className="bg-secondary text-white p-4">
            <h2 className="fs-4 text-center text-uppercase">Parts Diagrams</h2>
            <p className="fs-7 text-center w-75 mx-auto">
              Browse illustrated parts diagrams to find the part you need.
            </p>
            <button className="btn w-100 p-2 bg-white d-flex align-items-center mb-2 justify-content-center">
              Search Diagrams <IconPlayCircle className="max-w-20 ms-1" />
            </button>
            <p className="fs-8 text-center mb-0">For equipment 1995-present</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-md g-0 d-flex flex-column py-3">
          <h2 className="fs-4 text-center text-uppercase">Shop By...</h2>
        </div>
        <div className="container-md g-0 d-flex flex-column">
          <ul className="nav nav-tabs">
            <li className="col">
              <a
                className="d-flex justify-content-center align-items-center nav-link fs-8 active h-100 text-uppercase"
                aria-current="page"
                onClick={disableClick}
                href="#top"
              >
                <IconArrowDown className="max-w-25" />
                Brand
              </a>
            </li>
            <li className="col">
              <a
                className="d-flex justify-content-center align-items-center nav-link fs-8 h-100 text-uppercase"
                href="#top"
              >
                <IconArrowUp className="max-w-25" />
                Part Type
              </a>
            </li>
            <li className="col">
              <a
                className="d-flex justify-content-center align-items-center nav-link fs-8 h-100 text-uppercase"
                aria-current="page"
                onClick={disableClick}
                href="#top"
              >
                <IconArrowUp className="max-w-25" />
                Machine Type
              </a>
            </li>
          </ul>

          <ul className="d-flex flex-wrap list-unstyled p-2" id="tab-brand">
            {brandsData.map((brand, i) => {
              return (
                <li className="col-6 p-2" key={i}>
                  <a
                    href="#top"
                    className="border d-flex flex-column text-center"
                    onClick={disableClick}
                  >
                    {brand.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
