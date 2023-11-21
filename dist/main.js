(()=>{"use strict";function e(){document.querySelector("#content");const e=document.createElement("header");return e.innerHTML="\n    <div><h1>The Bear</h1></div>\n    <div>\n      <button>Home</button>\n      <button>Menu</button>\n      <button>About Us</button>\n    <div>\n  ",e}const n=document.querySelector("#content");function a(){n.innerHTML="",n.appendChild(e()),n.appendChild(function(){document.querySelector("#content");const e=document.createElement("div");return e.innerHTML='\n  <section id="home">\n    <div>\n        <h2>A Taste of Chicago and Beyond.</h2>\n    </div>\n    <div>\n      <p>Welcome to The Bear, Chicago’s newest fine dining destination.</p> \n      <p>We offer a seasonal tasting menu that showcases the best of local and global ingredients, prepared with creativity and care.</p>\n      <p>Our dishes are inspired by our personal stories, memories, and emotions, and we invite you to share them with us.</p> \n      <p>Whether you’re looking for a romantic date night, a special occasion, or a culinary adventure, we’ve got you covered.</p> \n      <p>Come and experience the magic of The Bear, where we make food with art and passion.</p>\n    </div>\n  </section>\n  \n  ',e}())}n.addEventListener("click",(t=>{"Home"===t.target.innerText?(console.log("ypu clicked on home"),a()):"Menu"===t.target.innerText?(n.innerHTML="",n.appendChild(e()),n.appendChild(function(){const e=document.createElement("div");return[{name:"Welcome Broth",description:"A delicate and aromatic broth made from simmering beef bones for hours, infused with fresh herbs and spices. This broth is served over frozen grapes that burst with sweetness and freshness in your mouth, creating a contrast of temperatures and flavors. Enjoy this broth as a warm and welcoming start to your meal, served in a traditional tea set.",price:15},{name:"Bucatini",description:"A hearty and satisfying pasta dish that features bucatini, a thick and hollow spaghetti that absorbs the rich and tangy tomato sauce. The sauce is made with fresh tomatoes, garlic, basil, and a touch of cream, and topped with grated cheese for a creamy and cheesy finish. This dish is a classic Italian comfort food that will make you feel at home.",price:25},{name:"Seven Fishes",description:"A seafood lover’s dream, this dish showcases seven different kinds of fish and shellfish, each cooked to perfection and drizzled with a lemon butter sauce. You will find salmon, cod, shrimp, scallops, mussels, clams, and squid in this dish, all fresh and succulent. This dish is a celebration of the bounty of the sea, and a tribute to the Italian tradition of eating fish on Christmas Eve.",price:45},{name:"The T-Bone",description:"A thick and juicy cut of beef that is grilled to your liking and served with a sauce of your choice. The T-bone steak is a premium cut that combines the tenderloin and the strip steak, giving you the best of both worlds. You can choose from a variety of sauces, such as mushroom, peppercorn, or red wine, to complement your steak. This dish is a meat lover’s delight, and a feast for the eyes and the palate.",price:50},{name:"The Bear Honey Bun",description:" A sweet and sticky bun that is baked with honey and cinnamon, creating a caramelized crust and a soft and fluffy interior. The bun is topped with a cream cheese frosting that adds a tangy and creamy contrast to the sweetness of the honey.",price:12},{name:'"The Michael" Cannoli',description:"A savory cannoli that is filled with cheese, meat, and vegetables, representing everyone in the restaurant. The cannoli shell is crispy and flaky, and the filling is creamy and flavorful. You will find cheese, ham, salami, spinach, mushrooms, and peppers in this cannoli, all blended together in a harmonious mix. This cannoli is a unique and creative twist on the traditional dessert, and a tribute to the Chef's brother and owner of the restaurant, Michael.",price:10},{name:"Copenhagen Sundae",description:"A thin layer of chocolate cake, topped with vanilla ice cream, whipped cream, caramel sauce, and fresh berries. This dessert is a combination of different textures and flavors, from the moist and rich cake, to the smooth and creamy ice cream, to the crunchy and sweet caramel, to the juicy and tart berries.",price:15}].forEach((n=>{e.innerHTML+=`\n    <div>\n        <h1>${n.name}</h1>\n        <p>${n.description}</p>\n        <p>$ ${n.price}</p>\n    </div>\n    `})),e}())):"About Us"===t.target.innerText&&(n.innerHTML="",n.appendChild(e()),n.appendChild(function(){const e=document.createElement("div"),n=document.createElement("img");return n.src="./chef.jpg",e.innerHTML='\n    <div id="about">\n     <div>\n        <p>\n        The Original Beef of Chicagoland, simply known as The Beef, was the family business of the Berzattos. \n        It was originally run by Mikey Berzatto, but after his passing was passed down to his younger brother Carmen “Carmy” Berzatto.\n        </p>\n        <p>Carmen returned to Chicago from New York, where he had become a renowned chef, to run the restaurant with his sister Natalie and his brother’s best friend Richie. \n        Together, they revamped the menu, hired a talented staff, and transformed the restaurant into a modern and elegant place, while still honoring Michael’s vision and values.</p>\n        <p>\n        "The Bear" a nickname given Michael to Carmy Berzatto, is now a modern fine dining experience with Chicago\'s talented chefs.\n        </p>\n      </div>\n      <div>\n        <p>Hi, I’m Carmy, the executive chef and co-owner of The Beef, a sandwich shop in Chicago that serves delicious and creative food.</p> \n        <p>I have a passion for cooking and a vision for transforming the traditional sandwich into a culinary masterpiece. </p>\n        I have worked in some of the finest restaurants in New York City, and I have learned from some of the best chefs in the world. I returned to my hometown to take over my family’s legacy and revitalize the restaurant with my innovative and creative vision. I lead my team with a mix of tough love and mentorship, and I strive to create the best food possible for my customers. I’m also a proud brother, a loyal friend, and a survivor of trauma. I’m always looking for new challenges and opportunities to grow as a chef and as a person. I hope you enjoy my food and my story. Welcome to The Bear!</p>\n      </div>\n    </div>\n    ',e.appendChild(n),e}()))})),a()})();