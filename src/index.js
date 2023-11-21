import home from "./pages/home";
import about from "./pages/about";
import nav from "./pages/nav";

function firstRender() {
  const content = document.querySelector("#content");
  content.appendChild(nav());
  home();
}

firstRender();

const content = document.querySelector("#content");
content.addEventListener("click", (e) => {
  if (e.target.innerText === "Home") {
    console.log("ypu clicked on home");
    renderHome();
  } else if (e.target.innerText === "Menu") {
    console.log("render menu");
  } else if (e.target.innerText === "About Us") {
    console.log("render about us");
    about();
  }
});

function renderHome() {
  content.innerHTML = "";
  content.appendChild(nav());
  content.appendChild(home());
}
