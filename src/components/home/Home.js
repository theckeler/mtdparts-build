import MenuMainSearch from "../elements/MainMenu/MenuMainSearch";

import { ReactComponent as IconPlayCircle } from "../images/play-circle.svg";

const Home = () => {
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

      <section className="">
        <div className="container-md g-0">
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
    </>
  );
};

export default Home;
