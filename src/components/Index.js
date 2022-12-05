import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Nav from "./elements/Nav";
import menuData from "./data/menu.json";

const Index = () => {
  return (
    <>
      <header className="position-fixed top-0 start-0">
        <Nav {...{ menuData }} />
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
