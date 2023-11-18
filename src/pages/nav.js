export default function navbar() {
  const content = document.querySelector("#content");
  const nav = document.createElement("nav");

  nav.innerHTML = `
  <div>
  <p>The Bear</p></div>
  <div>
      <ul>
          <li>Home</a></li>
          <li>About</li>
          <li>Menu</li>
      </ul>
  </div>
  `;
  content.appendChild(nav);
}
