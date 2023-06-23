console.clear();
/* products array */
const beyblades = [
  {
    id: 0,
    name: "Beyblade Quad Drive",
    description: "Start Pack: Cyclone Roktavor",
    price: 17.99,
    stock: 8
  },
  {
    id: 1,
    name: "Beyblade Quad Drive",
    description: "Start Pack: Destruction Belfyre",
    price: 17.99,
    stock: 13
  },
  {
    id: 2,
    name: "Beyblade Quad Drive",
    description: "Cyclone Fury String Launcher",
    price: 30.99,
    stock: 5
  },
  {
    id: 3,
    name: "Beyblade Quad Drive",
    description: "Duo Pack: Wrath Fafnir & Berserk Lynwirm",
    price: 28.99,
    stock: 1
  },
  {
    id: 4,
    name: "Beyblade Quad Drive",
    description: "Duo Pack: Ifritor & Stone Nemesis Destruction",
    price: 28.99,
    stock: 5
  },
  {
    id: 5,
    name: "Beyblade Quad Drive",
    description: "Duo Pack: Magma Roktavor & Gilded Balderov",
    price: 28.99,
    stock: 9
  },
  {
    id: 6,
    name: "Beyblade Burst Siege",
    description: "Speedtorm World Spryzen",
    price: 21.39,
    stock: 12
  },
  {
    id: 7,
    name: "Beyblade Burst Siege",
    description: "Speedstorm",
    price: 25.99,
    stock: 12
  },
  {
    id: 8,
    name: "Beyblade Burst Siege",
    description: "Speedstorm Spark Power Set",
    price: 38.95,
    stock: 3
  }
];
/* in shopping cart array */
const inShoppingCart = [
  {
    id: 0,
    name: "Beyblade Quad Drive",
    description: "Start Pack: Cyclone Roktavor",
    price: 17.99,
    stock: 8
  }
];
/* productsList function */
function productsList(items) {
  const main = document.querySelector("main");
  /* loop through product items and create product card for each single item */
  for (let item = 0; item < items.length; item++) {
    const info = items[item];
    // product card
    const productCard = document.createElement("article");
    productCard.setAttribute("class", "product");
    // product image
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product_image");
    productImage.innerText = "product\nimage";
    // product information
    const productInformation = document.createElement("div");
    productInformation.setAttribute("class", "product_information");
    // product info title
    const productInfoTitle = document.createElement("h2");
    productInfoTitle.innerText = info.name;
    productInfoTitle.setAttribute("class", "product_info_title");
    // product info text
    const productInfoText = document.createElement("div");
    productInfoText.setAttribute("class", "product_info_text");
    productInfoText.innerText = `${info.description}\nPrice: \u20AC ${info.price}\nIn stock: ${info.stock}`;
    // product order now button
    const orderNowButton = document.createElement("button");
    orderNowButton.setAttribute("class", "order_now_button");
    orderNowButton.innerText = "Order now!";
    // putting it all together
    productCard.appendChild(productImage);
    productInformation.appendChild(productInfoTitle);
    productInformation.appendChild(productInfoText);
    productInformation.appendChild(orderNowButton);
    productCard.appendChild(productInformation);
    main.appendChild(productCard);
  }
}
productsList(beyblades);
//
/*
      === KLADBLOK === 
*/
/* shopping cart list function */
function shoppingCartList() {
  const main = document.querySelector("main");
  /* loop through product items and create product card for each single item */
  for (let item = 0; item < inShoppingCart.length; item++) {
    const info = inShoppingCart[item];
    // product card
    const productCard = document.createElement("article");
    productCard.setAttribute("class", "productSelected");
    // product image
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "product_image");
    productImage.innerText = "product\nimage";
    // product information
    const productInformation = document.createElement("div");
    productInformation.setAttribute("class", "product_information");
    // product info title
    const productInfoTitle = document.createElement("h2");
    productInfoTitle.innerText = info.name;
    productInfoTitle.setAttribute("class", "product_info_title");
    // product info text
    const productInfoText = document.createElement("div");
    productInfoText.setAttribute("class", "product_info_text");
    productInfoText.innerText = `${info.description}\nPrice: \u20AC ${info.price}\nIn stock: ${info.stock}`;
    // putting it all together
    productCard.appendChild(productImage);
    productInformation.appendChild(productInfoTitle);
    productInformation.appendChild(productInfoText);
    productCard.appendChild(productInformation);
    main.appendChild(productCard);
  }
}
shoppingCartList(inShoppingCart);