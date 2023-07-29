console.clear();
//
/*
  array: beyblades
*/
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
/*
  array: in shopping cart
*/
const inShoppingCart = [];
/* 
  function: products list
  items   : array with product objects
*/
function productsList(items) {
  const productCards = [];
  /* create product card for each single item in items */
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
    orderProduct(info, orderNowButton);
    // putting it all together
    productCard.appendChild(productImage);
    productInformation.appendChild(productInfoTitle);
    productInformation.appendChild(productInfoText);
    productInformation.appendChild(orderNowButton);
    productCard.appendChild(productInformation);
    productCards.push(productCard);
  }
  return productCards;
}
/* shopping cart list function */
function shoppingCartList(itemsSelected) {
  const productCardsSelected = [];
  // shopping cart title
  const shoppingCart = document.createElement("div");
  shoppingCart.setAttribute("class", "shoppingCart");
  const shoppingCartTitle = document.createElement("div");
  shoppingCartTitle.setAttribute("class", "shoppingCartTitle");
  shoppingCartTitle.innerText = "Shopping Cart";
  shoppingCart.appendChild(shoppingCartTitle);
  productCardsSelected.push(shoppingCart);
  //
  /* create product card for each single item in itemsSelected */
  for (let item = 0; item < itemsSelected.length; item++) {
    const info = itemsSelected[item];
    // product card
    const productCard = document.createElement("article");
    productCard.setAttribute("class", "productSelected");
    productCard.style.gridRow = `${item + 2}`;
    // button minus -
    const minusButton = document.createElement("div");
    minusButton.setAttribute("class", "minusButton");
    minusButton.innerText = `\u2212`;
    changeQuantity(item, main);
    // button remove x
    const removeButton = document.createElement("div");
    removeButton.setAttribute("class", "removeButton");
    removeButton.innerText = `\u00D7`;
    removeButton.addEventListener("click", () => {
      if (removeButton.parentNode) {
        removeButton.parentNode.remove(removeButton);
      }
    });
    // product image
    const productImage = document.createElement("div");
    productImage.setAttribute("class", "productSelected_image");
    productImage.innerText = "product\nimage";
    // product information
    const productInformation = document.createElement("div");
    productInformation.setAttribute("class", "productSelected_information");
    // product info title
    const productInfoTitle = document.createElement("h2");
    productInfoTitle.innerText = "\n\n" + info.name;
    productInfoTitle.setAttribute("class", "productSelected_info_title");
    // product info text
    const productInfoText = document.createElement("div");
    productInfoText.setAttribute("class", "productSelected_info_text");
    productInfoText.innerText = `${info.description}\nPrice: \u20AC ${info.price}\nQuantity: ${info.quantity}`;
    // putting it all together
    productCard.appendChild(minusButton);
    productCard.appendChild(removeButton);
    productCard.appendChild(productImage);
    productInformation.appendChild(productInfoTitle);
    productInformation.appendChild(productInfoText);
    productCard.appendChild(productInformation);
    productCardsSelected.push(productCard);
  }
  return productCardsSelected;
}
// load data beyblades
const main = document.querySelector("main");
productsList(beyblades).forEach((i) => {
  main.appendChild(i);
});
// search in data
const typedText = document.querySelector("#search");
typedText.addEventListener("keyup", (e) => {
  const artikelen = beyblades;
  const filtered = artikelen.filter((artikel) => {
    return (
      artikel.name.toUpperCase().includes(e.target.value.toUpperCase()) ||
      artikel.description.toUpperCase().includes(e.target.value.toUpperCase())
    );
  });
  main.innerText = "";
  shoppingCartList(inShoppingCart).forEach((i) => {
    main.appendChild(i);
  });
  productsList(filtered).forEach((i) => {
    main.appendChild(i);
  });
});
//
/*
      === KLADBLOK === 
*/
/*
  function  : search by id
  dataObject: object array name
  searchId  : id to look for in object array
*/
function searchById(dataObject, searchId) {
  for (let i = 0; i < dataObject.length; i++) {
    if (dataObject[i].id === searchId) {
      return dataObject[i];
    }
  }
  return 0;
}
/*
  function   : orderProduct
  data       : object data of single product
  htmlElement: html element to add eventlistener
*/
function orderProduct(data, htmlElement) {
  htmlElement.addEventListener("click", () => {
    const { id, name, description, price } = data;
    console.log(data.stock);
    const newObject = { id, name, description, price, quantity: 1 };
    const check = searchById(inShoppingCart, id);
    if (check === 0 && data.stock > 0) {
      inShoppingCart.push(newObject);
    }
    if (check !== 0 && data.stock > 0) {
      check.quantity++;
    }
    if (data.stock > 0) {
      data.stock--;
    }
    shoppingCartList(inShoppingCart).forEach((i) => {
      main.appendChild(i);
    });
    productsList(beyblades).forEach((i) => {
      main.appendChild(i);
    });
  });
}
/*
  function   : change quantity of ordered product
  data       : data object to change
  htmlElement: html element to add eventlistener
*/
function changeQuantity(data, htmlElement) {
  htmlElement.addEventListener("click", () => {
    const check = searchById(inShoppingCart, data.id);
    if (data.quantity > 0) {
      data.quantity--;
      check.stock++;
    }
    if (data.quantity < 1) {
      orders.splice(orders.indexOf(data), 1);
    }
    shoppingCartList(inShoppingCart).forEach((i) => {
      main.appendChild(i);
    });
    productsList(beyblades).forEach((i) => {
      main.appendChild(i);
    });
  });
}