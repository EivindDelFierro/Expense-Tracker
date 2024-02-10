import { createRoot } from "react-dom/client";
import React from "react";
import App from "./app";

import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // establish an app element for React library to hook on to
  const element = document.createElement("div");
  element.setAttribute("id", "app");
  document.body.append(element);

  // create a React root from the app element
  const root = createRoot(document.querySelector("#app"));
  root.render(<App />);
});
