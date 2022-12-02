import React from "react";
import { Routes, Route } from "react-router-dom";

import "../scss/main.scss";

import Home from "./Home";

const Index = () => {
  const disableClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header>
        <nav aria-labelledby="mainmenu" aria-label="Main Nav" role="navigation">
          <h2 id="mainmenu" className="sr-only">
            Main Menu
          </h2>
          <button
            aria-haspopup="true"
            aria-controls="menu"
            type="button"
            aria-label="Open Menu"
            tabindex="0"
          >
            HAM
          </button>
          <ul
            role="menu"
            id="menu"
            aria-label="Main Menu"
            className="list-unstyled flex flex-column align-items-center filter-buttons border mt-0 pt-0"
          >
            <li className="col" role="menuitem">
              <a href="#top" aria-current="page" onClick={disableClick}>
                Home
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Shop By Part Type
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Shop By Machine Type
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Engine Parts
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Accessories and Attachments
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Equipment
              </a>
            </li>
            <li className="col" role="menuitem">
              <a href="#top" onClick={disableClick}>
                Shop by Parts Diagram
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main role="main">
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
};
export default Index;
