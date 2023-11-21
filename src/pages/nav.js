export default function navbar() {
  const content = document.querySelector("#content");
  const header = document.createElement("header");
  header.innerHTML = `
    <div><h1>The Bear</h1></div>
    <div>
      <button>Home</button>
      <button>Menu</button>
      <button>About Us</button>
    <div>
  `;

  return header;
}
