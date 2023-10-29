import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import CounterStore from "./store/counterStore";

const Store = new CounterStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App counter={Store} />
  </React.StrictMode>
);
