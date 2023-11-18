export default function aboutUs() {
  const content = document.querySelector("#content");
  const about = document.createElement("div");
  document.querySelector("#home").innerHTML = "";

  about.innerHTML = `
    <div>
        <p>
        The Original Beef of Chicagoland, simply known as The Beef, was the family business of the Berzattos. 
        It was originally run by Mikey Berzatto, but after his passing was passed down to his younger brother Carmen “Carmy” Berzatto.
        </p>
        <p>Carmen returned to Chicago from New York, where he had become a renowned chef, to run the restaurant with his sister Natalie and his brother’s best friend Richie. 
        Together, they revamped the menu, hired a talented staff, and transformed the restaurant into a modern and elegant place, while still honoring Michael’s vision and values.</p>
        <p>
        "The Bear" a nickname given Michael to Carmy Berzatto, is now a modern fine dining experience with Chicago's talented chefs.
        </p>

    </div>
    `;

  content.appendChild(about);
}
