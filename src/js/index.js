import "../style.css";
import pic from "../icon.png";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.createElement("div");
  root.setAttribute("id", "root");
  root.innerText = "Content Loaded";
  root.classList.add("styleTest");
  document.body.append(root);

  const element = document.createElement("div");
  const myIcon = new Image();
  myIcon.src = pic;
  element.appendChild(myIcon);

  document.body.appendChild(element);
});
