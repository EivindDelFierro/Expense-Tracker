import "./style.css";
import pic from "./icon.png";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  root.innerText = "Content Loaded";
  root.classList.add("styleTest");

  const element = document.createElement("div");
  const myIcon = new Image();
  myIcon.src = pic;
  element.appendChild(myIcon);

  document.body.appendChild(element);
});
