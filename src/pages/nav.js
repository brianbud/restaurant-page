export default function navbar() {
  const body = document.querySelector("body");
  const nav = document.createElement("nav");

  nav.innerHTML = `
  <div>
  <p>The Bear</p></div>
  <div>
      <ul>
          <li>Menu</li>
          <li>About</li>
      </ul>
  </div>
  `;

  body.appendChild(nav);
}
