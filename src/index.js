import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Routers } from "react-router-dom";

import Index from "./components/Index";

import "./scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Routers>
    <Index />
  </Routers>
);
