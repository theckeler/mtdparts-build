import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Nav from "./elements/Nav";
import menuData from "./data/menu.json";
import menuFooterData from "./data/menu-footer.json";
import Footer from "./elements/Footer";
import MenuMain from "./elements/Menu/Main";

const Index = () => {
  return (
    <>
      <header className="position-fixed top-0 w-100" style={{ zIndex: "1001" }}>
        <Nav {...{ menuData }} />
        <MenuMain {...{ menuData }} />
      </header>
      <main role="main">
        <div
          className="position-sticky top-0 w-100 bg-black"
          style={{ zIndex: "-1", height: "64px" }}
        />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </main>
      <footer className="bg-secondary pb-5">
        <Footer {...{ menuData, menuFooterData }} />
      </footer>
    </>
  );
};
export default Index;
