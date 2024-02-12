import { createRoot } from "react-dom/client";
import App from "./app";

import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  // create an app element
  const element = document.createElement("div");
  element.setAttribute("id", "app");
  document.body.appendChild(element);

  // create a React root by hooking on to the body element
  const root = createRoot(document.querySelector("#app"));
  root.render(<App />);
});
