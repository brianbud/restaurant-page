import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";
import nav from "./pages/nav";

function firstRender() {
  renderHome();
}

const content = document.querySelector("#content");
content.addEventListener("click", (e) => {
  if (e.target.innerText === "Home") {
    console.log("ypu clicked on home");
    renderHome();
  } else if (e.target.innerText === "Menu") {
    renderMenu();
  } else if (e.target.innerText === "About Us") {
    renderAbout();
  }
});

function renderHome() {
  content.innerHTML = "";
  content.appendChild(nav());
  content.appendChild(home());
}

function renderAbout() {
  content.innerHTML = "";
  content.appendChild(nav());
  content.appendChild(about());
}

function renderMenu() {
  content.innerHTML = "";
  content.appendChild(nav());
  content.appendChild(menu());
}

firstRender();
