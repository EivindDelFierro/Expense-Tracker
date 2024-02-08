import "../style.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#root");
  root.innerHTML = "<p>Content Loaded</p>";
  root.classList.add("styleTest");
});
