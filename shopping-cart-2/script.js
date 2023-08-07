/* shopping cart project */

// object arrays
console.clear();
//
/*
  array: products (beyblades)
*/
const products = [
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
  array: orders (products in shopping cart)
*/
const orders = [];
/*
  array: filtered (searched products)
*/
let filtered = [];
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
  function   : order product
  data       : object data of single product
  htmlElement: html element to add eventlistener
*/
function orderProduct(data, htmlElement) {
  htmlElement.addEventListener("click", () => {
    const { id, name, description, price } = data;
    const newObject = { id, name, description, price, quantity: 1 };
    const check = searchById(orders, id);
    if (check === 0 && data.stock > 0) {
      orders.push(newObject);
    }
    if (check !== 0 && data.stock > 0) {
      check.quantity++;
      check.price = check.price + data.price;
    }
    if (data.stock > 0) {
      data.stock--;
    }
    refreshLists();
  });
}
/*
  function   : change quantity of ordered product
  data       : data object to change
  htmlElement: html element to add eventlistener
*/
function changeQuantity(data, htmlElement) {
  htmlElement.addEventListener("click", () => {
    const check = searchById(products, data.id);
    if (data.quantity > 0) {
      data.quantity--;
      check.stock++;
      data.price = data.price - check.price;
    }
    if (data.quantity < 1) {
      orders.splice(orders.indexOf(data), 1);
    }
    refreshLists();
  });
}
/*
  function: change stock
  data    : object data of single product
*/
function changeStock(data) {
  const check = searchById(products, data.id);
  if (check) {
    check.stock = check.stock + data.quantity;
    orders.splice(orders.indexOf(data), 1);
  }
  refreshLists();
}
/*
  function  : total order amount
  dataObject: object array name
*/
function totalOrderAmount(dataObject) {
  return Number.parseFloat(
    dataObject.reduce((total, amount) => total + amount.price, 0).toFixed(2)
  );
}
/*
  function  : show data (products)
  dataObject: object array name
  htmlId    : html element to attach data to
*/
function showData(dataObject, htmlId) {
  const dataList = document.querySelector(`#${htmlId}`);
  dataList.innerText = "";
  dataObject.forEach((line) => {
    // product card
    const dataLine = document.createElement("div");
    dataLine.classList.add("dataLine");
    // product image
    const dataLineImage = document.createElement("div");
    dataLineImage.setAttribute("class", "product_image");
    dataLineImage.innerText = `product\nimage ${line.id}`;
    // product information
    const dataLineInformation = document.createElement("div");
    dataLineInformation.setAttribute("class", "product_information");
    // product info title
    const dataLineInfoTitle = document.createElement("h2");
    dataLineInfoTitle.innerText = line.name;
    dataLineInfoTitle.setAttribute("class", "product_info_title");
    // product info text
    const dataLineInfoText = document.createElement("div");
    dataLineInfoText.setAttribute("class", "product_info_text");
    dataLineInfoText.innerText = `${line.description}\nPrice: \u20AC ${line.price}\nIn stock: ${line.stock}`;
    // product order now button
    const orderNowButton = document.createElement("button");
    if (dataObject === products || filtered) {
      orderNowButton.setAttribute("class", "order_now_button");
      orderNowButton.innerText = "Order now!";
      orderProduct(line, orderNowButton);
    }
    // putting it all together
    dataLine.appendChild(dataLineImage);
    dataLine.appendChild(dataLineInformation);
    dataLineInformation.appendChild(dataLineInfoTitle);
    dataLineInformation.appendChild(dataLineInfoText);
    dataLineInformation.appendChild(orderNowButton);
    dataList.appendChild(dataLine);
  });
}
/*
  function  : show order data (orders)
  dataObject: object array name
  htmlId    : html element to attach data to
*/
function showOrderData(dataObject, htmlId) {
  const dataList = document.querySelector(`#${htmlId}`);
  // order list header
  dataList.innerText = "";
  const shoppingCart = document.createElement("div");
  shoppingCart.setAttribute("class", "shoppingCart");
  const shoppingCartTitle = document.createElement("div");
  shoppingCartTitle.setAttribute("class", "shoppingCartTitle");
  shoppingCartTitle.innerText = "Shopping Cart";
  shoppingCart.appendChild(shoppingCartTitle);
  dataList.appendChild(shoppingCart);
  // order list
  dataObject.forEach((order) => {
    // order card
    const orderLine = document.createElement("div");
    orderLine.setAttribute("class", "orderLine");
    // button minus -
    const minusButton = document.createElement("div");
    minusButton.setAttribute("class", "minusButton");
    minusButton.innerText = `\u2212`;
    changeQuantity(order, minusButton);
    // button remove x
    const removeButton = document.createElement("div");
    removeButton.setAttribute("class", "removeButton");
    removeButton.innerText = `\u00D7`;
    removeButton.addEventListener("click", () => {
      if (removeButton.parentNode) {
        changeStock(order);
        dataObject.splice(dataObject.indexOf(order), 1);
        removeButton.parentNode.remove(removeButton);
      }
    });
    // order image
    const orderLineImage = document.createElement("div");
    orderLineImage.setAttribute("class", "orderLine_image");
    orderLineImage.innerText = "order\nimage";
    // order information
    const orderLineInformation = document.createElement("div");
    orderLineInformation.setAttribute("class", "orderLine_information");
    // order info title
    const orderLineInfoTitle = document.createElement("h2");
    orderLineInfoTitle.innerText = "\n\n" + order.name;
    orderLineInfoTitle.setAttribute("class", "orderLine_info_title");
    // order info text
    const orderLineInfoText = document.createElement("div");
    orderLineInfoText.setAttribute("class", "orderLine_info_text");
    orderLineInfoText.innerText = `${
      order.description
    }\nPrice: \u20AC ${parseFloat(order.price).toFixed(2)}\nQuantity: ${
      order.quantity
    }`;
    // putting it all together
    orderLine.appendChild(minusButton);
    orderLine.appendChild(removeButton);
    orderLine.appendChild(orderLineImage);
    orderLineInformation.appendChild(orderLineInfoTitle);
    orderLineInformation.appendChild(orderLineInfoText);
    orderLine.appendChild(orderLineInformation);
    dataList.appendChild(orderLine);
  });
  // order list footer
  if (dataObject.length > 0) {
    const orderTotal = document.createElement("div");
    orderTotal.setAttribute("class", "orderTotal");
    const orderTotalTitle = document.createElement("div");
    orderTotalTitle.setAttribute("class", "orderTotalTitle");
    orderTotalTitle.innerText = `\u20AC ${totalOrderAmount(dataObject)}`;
    orderTotal.appendChild(orderTotalTitle);
    dataList.appendChild(orderTotal);
  }
}
/*
  function: refresh list (build & show product and order list)
*/
function refreshLists() {
  showOrderData(orders, "orderList");
  showData(products, "productList");
}
/* 
  function: refresh list (load / refresh data)
*/
refreshLists();

/* === KLADBLOK === */

// search in data
const typedText = document.querySelector("#search");
typedText.addEventListener("keyup", (e) => {
  filtered = products.filter((product) => {
    return (
      product.name.toUpperCase().includes(e.target.value.toUpperCase()) ||
      product.description.toUpperCase().includes(e.target.value.toUpperCase())
    );
  });
  showData(filtered, "productList");
});