//============================
// function lprint
const lprint = (data) => {
  const element = document.createElement("section");
  element.textContent = data;
  return document.body.appendChild(element), console.log(data);
};
//============================
// function lprintArr
const lprintArr = (arrToPrint) => {
  for (let i = 0; i < arrToPrint.length; i++) {
    lprint(arrToPrint[i]);
  }
};
//============================
// function dateTimestamp
const dateTimestamp = () => {
  options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    //fractionalSecondDigits: 3,
    hour12: false,
    timeZone: "Europe/Amsterdam"
  };

  return new Intl.DateTimeFormat("nl-NL", options).format();
};
//============================
// filters

// color \\
const colorRed = document.querySelector("#red");
const colorPurple = document.querySelector("#purple");
const colorBlue = document.querySelector("#blue");
// shape \\
const shapeCircle = document.querySelector("#circle");
const shapeRectangle = document.querySelector("#square");
const shapeTriangle = document.querySelector("#triangle");
// price \\
const minPrice = document.querySelector("#min_price");
const maxPrice = document.querySelector("#max_price");
const showMinPrice = document.querySelector("#showMinPrice");
const showMaxPrice = document.querySelector("#showMaxPrice");
// button \\
const resetValues = document.querySelector("#reset_button");

// color eventlisteners \\
colorRed.addEventListener("click", () => {
  lprint(colorRed.checked == true ? "red checked!" : "red unchecked!");
});

colorPurple.addEventListener("click", () => {
  lprint(colorPurple.checked == true ? "purple checked!" : "purple unchecked!");
});

colorBlue.addEventListener("click", () => {
  lprint(colorBlue.checked == true ? "blue checked!" : "blue unchecked!");
});

// shape eventlisteners \\
shapeCircle.addEventListener("click", () => {
  lprint(shapeCircle.checked == true ? "circle checked!" : "circle unchecked!");
});

shapeRectangle.addEventListener("click", () => {
  lprint(
    shapeRectangle.checked == true ? "square checked!" : "square unchecked!"
  );
});

shapeTriangle.addEventListener("click", () => {
  lprint(
    shapeTriangle.checked == true ? "triangle checked!" : "triangle unchecked!"
  );
});

// price eventlisteners \\
minPrice.addEventListener("input", () => {
  showMinPrice.innerText = minPrice.value;
});

maxPrice.addEventListener("input", () => {
  showMaxPrice.innerText = maxPrice.value;
});

// button eventlistener \\
resetValues.addEventListener("click", () => {
  colorRed.checked = false;
  colorPurple.checked = false;
  colorBlue.checked = false;

  shapeCircle.checked = false;
  shapeRectangle.checked = false;
  shapeTriangle.checked = false;

  showMinPrice.innerText = "0";
  minPrice.value = 0;
  showMaxPrice.innerText = "100";
  maxPrice.value = 100;
});
////////////////////////////////////////////////////
// object shapes
/*
  Three classes with arguments color, price and size.
*/
const showShapes = document.querySelector("#shapes");

class Shapes {
  static #size = "200px";
  constructor(_price) {
    this.price = _price;
    this.#size = 200;
  }
  drawCircle(color) {
    const shape = document.createElement("div");
    shape.style.width = this.#size;
    shape.style.height = this.#size;
    shape.style.backgroundColor = color;
    shape.style.borderRadius = "50%";
    shape.style.display = "flex";
    shape.style.justifyContent = "space-around";
    shape.style.alignItems = "center";

    shape.innerText = `€${this.price}`;
    return shape;
  }
  drawSquare(color) {
    const shape = document.createElement("div");
    shape.style.width = `${this.size}px`;
    shape.style.height = `${this.size}px`;
    shape.style.backgroundColor = color;
    shape.style.display = "flex";
    shape.style.justifyContent = "space-around";
    shape.style.alignItems = "center";

    shape.innerText = `€${this.price}`;
    return shape;
  }
  drawTriangle(color) {
    const shape = document.createElement("div");
    shape.style.width = `${0}px`;
    shape.style.height = `${0}px`;
    shape.style.borderLeft = `${this.size / 2}px solid transparent`;
    shape.style.borderRight = `${this.size / 2}px solid transparent`;
    shape.style.borderBottom = `${this.size}px solid ${color}`;
    shape.style.position = "relative";

    const textContainer = document.createElement("span");
    textContainer.innerText = `€${this.price}`;

    textContainer.style.position = "absolute";
    textContainer.style.bottom = `${-(this.size * (3 / 4))}px`;

    const pixel = this.size / 8;
    textContainer.style.left = `${-pixel + pixel / 2}px`;

    shape.appendChild(textContainer);
    return shape;
  }
}

myShapes = [];
myShapes.forEach((shape) => {
  const gCell = document.createElement("div");
  gCell.style.width = "200px";
  gCell.style.outline = "1px dashed yellow";
  gCell.append(shape.drawTriangle());
  showShapes.appendChild(gCell);
});

const myFigures = new Shapes(200, 200);
showShapes.append(myFigures.drawSquare("orange"));
showShapes.append(myFigures.drawCircle("brown"));
showShapes.append(myFigures.drawTriangle("yellow"));
