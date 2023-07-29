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
  function  : show object data in an array
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
    if (dataObject === products) {
      orderNowButton.setAttribute("class", "order_now_button");
      orderNowButton.innerText = "Order now!";
      orderProduct(line, orderNowButton);
    }
    if (dataObject === orders) {
      changeQuantity(line, dataLine);
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
    const newObject = { id, name, description, price, quantity: 1 };
    const check = searchById(orders, id);
    if (check === 0 && data.stock > 0) {
      orders.push(newObject);
    }
    if (check !== 0 && data.stock > 0) {
      check.quantity++;
    }
    if (data.stock > 0) {
      data.stock--;
    }
    showData(orders, "orderList");
    showData(products, "productList");
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
    }
    if (data.quantity < 1) {
      orders.splice(orders.indexOf(data), 1);
    }
    showData(orders, "orderList");
    showData(products, "productList");
  });
}
/*
  build & show product and order list
*/
showData(products, "productList");
showData(orders, "orderList");

/* === KLADBLOK === */