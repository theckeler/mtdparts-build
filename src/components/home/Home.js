import MenuMainSearch from "../elements/Search";
import Button from "../elements/Button";
import IconTitleBlock from "../elements/IconTitleBlock";
import ImgTitleBlock from "../elements/ImgTitleBlock";

import { ReactComponent as IconArrowDown } from "../images/arrow-down.svg";
import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";

import { ReactComponent as logoYardMan } from "../images/logo-yard-man.svg";
import { ReactComponent as logoRemington } from "../images/logo-remington.svg";
import { ReactComponent as logoWhiteOutdoor } from "../images/logo-white.svg";
import { ReactComponent as logoYardMachines } from "../images/logo-yard-machines.svg";
import { ReactComponent as logoCraftsman } from "../images/logo-craftsman.svg";
import { ReactComponent as logoTroyBilt } from "../images/logo-troy-bilt.svg";
import { ReactComponent as logoBolens } from "../images/logo-bolens.svg";
import { ReactComponent as logoRobomow } from "../images/logo-robomow.svg";

import brandsData from "../data/brands.json";
import homeData from "./data/home.json";

const Home = () => {
  // const disableClick = (e) => {
  //   e.preventDefault();
  // };

  const LogoMap = {
    logoYardMan: logoYardMan,
    logoRemington: logoRemington,
    logoWhiteOutdoor: logoWhiteOutdoor,
    logoYardMachines: logoYardMachines,
    logoCraftsman: logoCraftsman,
    logoTroyBilt: logoTroyBilt,
    logoBolens: logoBolens,
    logoRobomow: logoRobomow,
  };

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

      <section
        style={{
          background:
            "linear-gradient(to right, rgb(6,101,58) 50%, #262626 50%)",
        }}
      >
        <div className="container-lg g-0 d-flex flex-wrap">
          <div className="col-12 col-md-6 bg-primary text-white p-4 py-md-3 px-md-3">
            <h2 className="fs-4 text-center text-uppercase">Part Finder</h2>
            <p className="fs-7 text-center w-md-75 mx-auto">
              Search for parts using your model number, or the part number you
              are replacing.
            </p>
            <MenuMainSearch addClass="mb-2" />
            <p className="fs-8 text-center mb-0">
              Don’t know your model number? Click here for help.
            </p>
          </div>

          <div className="col-12 col-md-6 bg-secondary text-white p-4 py-md-3 px-md-3">
            <h2 className="fs-4 text-center text-uppercase">Parts Diagrams</h2>
            <p className="fs-7 text-center w-md-75 mx-auto">
              Browse illustrated parts diagrams to find the part you need.
            </p>
            <Button copy="Search Diagrams" url="#top" addClass="bg-white" />
            <p className="fs-8 text-center mb-0">For equipment 1995-present</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-lg g-0 d-flex flex-column py-3">
          <h2 className="fs-4 text-center text-uppercase">Shop By...</h2>
        </div>
        <div className="container-lg g-0 d-flex flex-column">
          <ul className="nav nav-tabs">
            <li className="col">
              <a
                className="d-flex justify-content-center align-items-center nav-link fs-8 active h-100 text-uppercase"
                aria-current="page"
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
                href="#top"
              >
                <IconArrowUp className="max-w-25" />
                Machine Type
              </a>
            </li>
          </ul>

          <ul className="d-flex flex-wrap list-unstyled p-2" id="tab-brand">
            {brandsData.map((brand, i) => {
              let ComponentName = LogoMap[`${brand.img}`];

              return (
                <li className="col-6 col-md-3 p-2" key={i}>
                  <a
                    href="#top"
                    className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                  >
                    <div
                      className="d-flex p-2 p-md-3"
                      style={{ minHeight: "170px" }}
                    >
                      <ComponentName
                        // className="p-xl-2"
                        style={{
                          width: "100%",
                          //  height: "140px",
                        }}
                      />
                    </div>
                    <div className="bg-light p-1 text-uppercase fs-7 text-black border-top mt-auto">
                      {brand.title}
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="px-3 pb-2">
            <Button
              copy="View All"
              url="#top"
              addClass="bg-secondary text-white"
              darkTheme={true}
            />
            <p className="mb-0 mt-3 fs-7 text-center">
              For other brands, use our{" "}
              <a href="#top">Parts Diagrams & Lookup tool</a>.
            </p>
          </div>
        </div>
      </section>

      {/* SHOP WITH CONFIDENCE */}
      <section className="bg-light px-3 py-3 mt-3">
        <div className="container-lg g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">{homeData.shop.h2}</h2>
          <p className="mb-0 fs-7 text-center">{homeData.shop.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled p-2">
            {homeData.shop.blocks.map((block, i) => {
              const colBreak = "lg";

              return (
                <li className={`col-12 col-${colBreak}-4`} key={i}>
                  <IconTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.shop.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="px-3 py-3 mt-3">
        <div className="container-lg g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">
            {homeData.howToGuides.h2}
          </h2>
          <p className="mb-0 fs-7 text-center">{homeData.howToGuides.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled">
            {homeData.howToGuides.blocks.map((block, i) => {
              const colBreak = "md";

              return (
                <li className={`col-12 col-md-6 col-xl-3`} key={i}>
                  <ImgTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.howToGuides.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-light px-3 py-3 mt-3">
        <div className="container-lg g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">
            {homeData.supportLinks.h2}
          </h2>
          <p className="mb-0 fs-7 text-center">{homeData.supportLinks.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled p-2">
            {homeData.supportLinks.blocks.map((block, i) => {
              const colBreak = "lg";

              return (
                <li className={`col-12 col-${colBreak}-4`} key={i}>
                  <IconTitleBlock
                    {...{
                      block,
                      curCount: i,
                      blockLength: homeData.supportLinks.blocks.length,
                      colBreak: colBreak,
                    }}
                  />
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
