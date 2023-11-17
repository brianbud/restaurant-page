export default function home() {
  const content = document.querySelector("#content");

  const hero = document.createElement("div");
  hero.innerHTML = `
  <nav>
    <div><p>The Bear</p></div>
    <div>
        <ul>
            <li>Menu</li>
            <li>About</li>
        </ul>
    </div>
  </nav>
  <section>
    <div><h1>The Bear</h1></div>
    <div>
        <h2>A Taste of Chicago and Beyond.</h2>
    </div>
  </section>
  
  `;
  content.appendChild(hero);
}
