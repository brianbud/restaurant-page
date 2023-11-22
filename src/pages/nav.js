export default function navbar() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.innerHTML = `
    <div><h1 id="title">The Bear</h1></div>
    <nav>
      <button>Home</button>
      <button>Menu</button>
      <button>About Us</button>
    <nav>
  `;

  return header;
}
