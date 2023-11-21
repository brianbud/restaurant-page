export default function menu() {
  const menu = [
    {
      name: "Welcome Broth",
      description:
        "A delicate and aromatic broth made from simmering beef bones for hours, infused with fresh herbs and spices. This broth is served over frozen grapes that burst with sweetness and freshness in your mouth, creating a contrast of temperatures and flavors. Enjoy this broth as a warm and welcoming start to your meal, served in a traditional tea set.",
      price: 15,
    },
    {
      name: "Bucatini",
      description:
        "A hearty and satisfying pasta dish that features bucatini, a thick and hollow spaghetti that absorbs the rich and tangy tomato sauce. The sauce is made with fresh tomatoes, garlic, basil, and a touch of cream, and topped with grated cheese for a creamy and cheesy finish. This dish is a classic Italian comfort food that will make you feel at home.",
      price: 25,
    },
    {
      name: "Seven Fishes",
      description:
        "A seafood lover’s dream, this dish showcases seven different kinds of fish and shellfish, each cooked to perfection and drizzled with a lemon butter sauce. You will find salmon, cod, shrimp, scallops, mussels, clams, and squid in this dish, all fresh and succulent. This dish is a celebration of the bounty of the sea, and a tribute to the Italian tradition of eating fish on Christmas Eve.",
      price: 45,
    },
    {
      name: "The T-Bone",
      description:
        "A thick and juicy cut of beef that is grilled to your liking and served with a sauce of your choice. The T-bone steak is a premium cut that combines the tenderloin and the strip steak, giving you the best of both worlds. You can choose from a variety of sauces, such as mushroom, peppercorn, or red wine, to complement your steak. This dish is a meat lover’s delight, and a feast for the eyes and the palate.",
      price: 50,
    },
    {
      name: "The Bear Honey Bun",
      description:
        " A sweet and sticky bun that is baked with honey and cinnamon, creating a caramelized crust and a soft and fluffy interior. The bun is topped with a cream cheese frosting that adds a tangy and creamy contrast to the sweetness of the honey.",
      price: 12,
    },
    {
      name: '"The Michael" Cannoli',
      description:
        "A savory cannoli that is filled with cheese, meat, and vegetables, representing everyone in the restaurant. The cannoli shell is crispy and flaky, and the filling is creamy and flavorful. You will find cheese, ham, salami, spinach, mushrooms, and peppers in this cannoli, all blended together in a harmonious mix. This cannoli is a unique and creative twist on the traditional dessert, and a tribute to the Chef's brother and owner of the restaurant, Michael.",
      price: 10,
    },
    {
      name: "Copenhagen Sundae",
      description:
        "A thin layer of chocolate cake, topped with vanilla ice cream, whipped cream, caramel sauce, and fresh berries. This dessert is a combination of different textures and flavors, from the moist and rich cake, to the smooth and creamy ice cream, to the crunchy and sweet caramel, to the juicy and tart berries.",
      price: 15,
    },
  ];

  const menuDiv = document.createElement("div");
  menu.forEach((item) => {
    menuDiv.innerHTML += `
    <div>
        <h1>${item.name}</h1>
        <p>${item.description}</p>
        <p>$ ${item.price}</p>
    </div>
    `;
  });

  return menuDiv;
}
