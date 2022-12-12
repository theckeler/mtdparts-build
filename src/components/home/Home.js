import MenuMainSearch from "../elements/Search";
import Button from "../elements/Button";
import IconTitleBlock from "../elements/Blocks/IconTitle";
import ImgTitleBlock from "../elements/Blocks/ImgTitle";

import { ReactComponent as IconArrowUp } from "../images/arrow-up.svg";
import { ReactComponent as logoYardMan } from "../images/logo-yard-man.svg";
import { ReactComponent as logoRemington } from "../images/logo-remington.svg";
import { ReactComponent as logoWhiteOutdoor } from "../images/logo-white.svg";
import { ReactComponent as logoYardMachines } from "../images/logo-yard-machines.svg";
import { ReactComponent as logoCraftsman } from "../images/logo-craftsman.svg";
import { ReactComponent as logoTroyBilt } from "../images/logo-troy-bilt.svg";
import { ReactComponent as logoBolens } from "../images/logo-bolens.svg";
import { ReactComponent as logoRobomow } from "../images/logo-robomow.svg";

import tabsData from "../data/tabs.json";
import homeData from "./data/home.json";

const Home = () => {
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

  const changeTab = (e) => {
    document.querySelectorAll(".tabs .tab").forEach(function (e) {
      e.classList.add("d-none");
    });
    document.querySelectorAll(".nav-tabs button").forEach(function (e) {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
    document.querySelector(`#tab-${e.target.id}`).classList.remove("d-none");
  };

  const moreHelp = (e) => {
    document.querySelector(`#more-info`).classList.toggle("d-none");
  };

  return (
    <>
      <h1 className="visually-hidden">MTD Parts</h1>

      {/* Small text block */}
      <section className="bg-black py-1">
        <div className="container-lg">
          <p className="text-white text-center text-uppercase fs-7 mb-0">
            Free Shipping on Parts Orders Over $45
          </p>
        </div>
      </section>

      {/* Parts finder/diagrams */}
      <section className="bg-secondary">
        <div className="container-lg g-0 d-flex flex-wrap">
          <div className="col-12 col-md-6 bg-primary text-white p-4 py-md-4 px-md-3">
            <h2 className="fs-4 text-center text-uppercase">Part Finder</h2>
            <p className="fs-8 text-center w-md-75 mx-auto">
              Search for parts using your model number, or the part number you
              are replacing.
            </p>
            <MenuMainSearch addClass="mb-2" />
            <p className="fs-8 text-center mb-0 d-md-none">
              <button
                className="border-0 bg-transparent text-white"
                onClick={moreHelp}
              >
                Don’t know your model number? Click here for help.
              </button>
            </p>
          </div>

          <div className="col-12 col-md-6 bg-secondary text-white p-4 py-md-4 px-md-3">
            <h2 className="fs-4 text-center text-uppercase">Parts Diagrams</h2>
            <p className="fs-8 text-center w-md-75 mx-auto">
              Browse illustrated parts diagrams to find the part you need.
            </p>
            <Button copy="Search Diagrams" url="#top" addClass="bg-white" />
            <p className="fs-8 text-center mb-0 mt-2">
              For equipment 1995-present
            </p>
          </div>
        </div>
      </section>

      {/* More info */}
      <section className="bg-light px-3 py-2 d-none d-md-block" id="more-info">
        <div className="container-lg g-0 d-flex flex-column">
          <ul className="d-flex flex-column flex-md-row list-unstyled mb-0">
            <li className="col-12 col-md-6 col-xl-3 p-3">
              <div className="d-flex justify-content-center align-items-center h-100">
                <img
                  src="https://mtdproducts.secure.force.com/ProductRegistration/resource/1619086108000/CmsTemp/ProductRegistration/img/cub-cadet-US-model-plate.jpg"
                  alt=""
                  className="w-100"
                  style={{ maxWidth: "24rem" }}
                />
              </div>
            </li>
            <li className="col-12 col-md-6 col-xl-9 p-3">
              <div className="d-flex flex-column align-items-start">
                <h2 className="fs-5 text-uppercase mb-0 border-bottom w-100 pb-3">
                  Model Number Example:
                </h2>
                <p className="fs-6 mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  ac urna velit. Donec euismod ut tortor molestie pulvinar.
                  Quisque non nunc erat. Aenean at ipsum augue. Morbi in justo
                  vitae diam efficitur facilisis. Nullam ut malesuada turpis,
                  interdum aliquet mauris. eros.
                </p>
                <Button
                  copy="Need More Help?"
                  url="#top"
                  addClass="bg-white border mt-4 d-md-inline-flex w-auto px-4"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SHOP BY */}
      <section>
        <div className="container-lg g-0 d-flex flex-column py-3">
          <h2 className="text-uppercase text-center">{homeData.tabs.h2}</h2>
        </div>

        <div className="container-lg g-0 d-flex flex-column">
          <ul className="nav nav-tabs">
            {homeData.tabs.blocks.map((block, i) => {
              return (
                <li className="col-4" key={i}>
                  <button
                    className={`d-flex justify-content-center align-items-center nav-link fs-8 w-100 text-uppercase p-2 p-lg-3 ${
                      block.active && "active"
                    }`}
                    aria-current="page"
                    href="#top"
                    onClick={changeTab}
                    id={block.title.toLowerCase().replace(/\s/g, "-")}
                  >
                    <IconArrowUp className="pe-none max-w-25" />
                    {block.title}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="tabs">
            <div className="tab" id="tab-brand">
              <ul className="d-flex flex-wrap list-unstyled p-2">
                {tabsData.brands.map((brand, i) => {
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
                            style={{
                              width: "100%",
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

            <div className="tab d-none" id="tab-part-type">
              <ul className="d-flex flex-wrap list-unstyled p-2">
                {tabsData.partType.map((brand, i) => {
                  return (
                    <li className="col-6 col-md-3 p-2" key={i}>
                      <a
                        href="#top"
                        className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                      >
                        <div className="d-flex justify-content-center p-2 p-md-3">
                          <img src={brand.img} alt="" />
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
              </div>
            </div>

            <div className="tab d-none" id="tab-machine-type">
              <ul className="d-flex flex-wrap list-unstyled p-2">
                {tabsData.machineType.map((brand, i) => {
                  return (
                    <li className="col-6 col-md-3 p-2" key={i}>
                      <a
                        href="#top"
                        className="border d-flex flex-column align-content-center text-center text-decoration-none h-100"
                      >
                        <div className="d-flex justify-content-center p-2 p-md-3">
                          <img src={brand.img} alt="" />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP WITH CONFIDENCE */}
      <section className="bg-light px-3 py-5 mt-3">
        <div className="container-lg g-0 d-flex flex-column">
          <h2 className="text-uppercase text-center">{homeData.shop.h2}</h2>
          <p className="mb-0 fs-7 text-center">{homeData.shop.copy}</p>
          <ul className="d-flex flex-wrap list-unstyled p-2 mt-4 mb-0">
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

      {/* How to guides */}
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

      {/* support links */}
      <section className="bg-light px-3 py-5 mt-3">
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
