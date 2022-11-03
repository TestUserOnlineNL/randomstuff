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
////////////////////////////////////////////////////
/*
  SHAPES OBJECTS

  Classes: Shapes, FilterObjects, ShowObjects 
*/
////////////////////////////////////////////////////
const showShapes = document.querySelector("#shapes");
const myShapes = [];

class Shapes {
  constructor(shape, size) {
    this.shape = shape;
    this.size = size;
    this.color = "white";
    this.price = 0;
  }
  circle() {
    const shape = document.createElement("div");
    shape.style.width = `${this.size}px`;
    shape.style.height = `${this.size}px`;
    shape.style.backgroundColor = this.color;
    shape.style.borderRadius = "50%";
    shape.style.display = "flex";
    shape.style.justifyContent = "space-around";
    shape.style.alignItems = "center";
    shape.innerText = `€${this.price}`;
    shape.setAttribute("id", `${this.shape} ${this.color} ${this.price}`);
    return shape;
  }
  square() {
    const shape = document.createElement("div");
    shape.style.width = `${this.size}px`;
    shape.style.height = `${this.size}px`;
    shape.style.backgroundColor = this.color;
    shape.style.display = "flex";
    shape.style.justifyContent = "space-around";
    shape.style.alignItems = "center";
    shape.innerText = `€${this.price}`;
    shape.setAttribute("id", `${this.shape} ${this.color} ${this.price}`);
    return shape;
  }
  triangle() {
    const shape = document.createElement("div");
    shape.style.width = `${0}px`;
    shape.style.height = `${0}px`;
    shape.style.borderLeft = `${this.size / 2}px solid transparent`;
    shape.style.borderRight = `${this.size / 2}px solid transparent`;
    shape.style.borderBottom = `${this.size}px solid ${this.color}`;
    shape.style.position = "relative";
    const textContainer = document.createElement("span");
    textContainer.innerText = `€${this.price}`;
    textContainer.style.position = "absolute";
    textContainer.style.bottom = `${-(this.size * (6 / 9))}px`;
    const pixel = this.size / 8;
    textContainer.style.left = `${-pixel + pixel / 2}px`;
    shape.appendChild(textContainer);
    shape.setAttribute("id", `${this.shape} ${this.color} ${this.price}`);
    return shape;
  }
  chooseShape() {
    const shape = this.shape;
    switch (shape) {
      case "square":
        return this.square();
      case "circle":
        return this.circle();
      case "triangle":
        return this.triangle();
      default:
        return;
    }
  }
  get shapeColor() {
    return this.color;
  }
  get shapePrice() {
    return this.price;
  }
  set shapeColor(color) {
    return (this.color = color);
  }
  set shapePrice(price) {
    return (this.price = price);
  }
}
// filter shapes
class FilterObjects {
  constructor(arr) {
    this.arr = arr;
    this.filteredShapes = [];
  }
  filterColor(objcolor) {
    const filteredShapes = this.arr.filter((shape) =>
      shape.id.includes(objcolor)
    );
    return filteredShapes;
  }
  filterShape(objshape) {
    const filteredShapes = this.arr.filter((shape) =>
      shape.id.includes(objshape)
    );
    return filteredShapes;
  }
  filterPrice(objprice) {
    const filteredShapes = this.arr.filter((shape) =>
      shape.id.includes(objprice)
    );
    return filteredShapes;
  }
  get filterNone() {
    const filteredShapes = this.arr;
    return filteredShapes;
  }
}
// show shapes
class ShowObjects {
  constructor(shapesArray, attachTo) {
    this.shapesArray = shapesArray;
    this.attachTo = attachTo;
  }
  objectsGrid() {
    this.shapesArray.forEach((shape) => {
      const gridCell = document.createElement("div");
      gridCell.style.width = "200px";
      gridCell.append(shape);
      this.attachTo.appendChild(gridCell);
    });
  }
}
//
// grid cells
const mySquare = new Shapes("square", 200);
const myCircle = new Shapes("circle", 200);
const myTriangle = new Shapes("triangle", 200);

mySquare.shapeColor = "purple";
mySquare.shapePrice = 0;
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "purple";
myCircle.shapePrice = "20";
myShapes.push(myCircle.chooseShape());

mySquare.shapeColor = "red";
mySquare.shapePrice = "40";
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "red";
myCircle.shapePrice = "0";
myShapes.push(myCircle.chooseShape());

mySquare.shapeColor = "blue";
mySquare.shapePrice = "20";
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "blue";
myCircle.shapePrice = "40";
myShapes.push(myCircle.chooseShape());

mySquare.shapeColor = "purple";
mySquare.shapePrice = "60";
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "purple";
myCircle.shapePrice = "80";
myShapes.push(myCircle.chooseShape());

mySquare.shapeColor = "red";
mySquare.shapePrice = "100";
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "red";
myCircle.shapePrice = "60";
myShapes.push(myCircle.chooseShape());

mySquare.shapeColor = "blue";
mySquare.shapePrice = "80";
myShapes.push(mySquare.chooseShape());

myCircle.shapeColor = "blue";
myCircle.shapePrice = "100";
myShapes.push(myCircle.chooseShape());
// triangle
myTriangle.shapeColor = "darkgrey";
myTriangle.shapePrice = "0";
myShapes.push(myTriangle.chooseShape());

myTriangle.shapeColor = "yellow";
myTriangle.shapePrice = "33";
myShapes.push(myTriangle.chooseShape());

myTriangle.shapeColor = "orange";
myTriangle.shapePrice = "66";
myShapes.push(myTriangle.chooseShape());

myTriangle.shapeColor = "brown";
myTriangle.shapePrice = "99";
myShapes.push(myTriangle.chooseShape());
// \\ // \\ // \\
const toBeFiltered = new FilterObjects(myShapes);
let resultSet = toBeFiltered.filterNone;
///////////////////////////////////////////////////////////////////////////////////

// filter criteria
// color \\
const colorRed = document.querySelector("#red");
const colorPurple = document.querySelector("#purple");
const colorBlue = document.querySelector("#blue");
// shape \\
const shapeCircle = document.querySelector("#circle");
const shapeSquare = document.querySelector("#square");
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
  if (colorRed.checked === true) {
    resultSet = toBeFiltered.filterColor("red");
    const myResult = new ShowObjects(resultSet, showShapes);
    myResult.objectsGrid();
  } else {
    resultSet = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultSet, showShapes);
    myResult.objectsGrid();
  }
});
colorPurple.addEventListener("click", () => {
  lprint(colorPurple.checked ? "purple checked!" : "purple unchecked!");
});
colorBlue.addEventListener("click", () => {
  lprint(colorBlue.checked ? "blue checked!" : "blue unchecked!");
});
// shape eventlisteners \\
shapeCircle.addEventListener("click", () => {
  lprint(shapeCircle.checked ? "circle checked!" : "circle unchecked!");
});
shapeSquare.addEventListener("click", () => {
  lprint(shapeSquare.checked ? "square checked!" : "square unchecked!");
});
shapeTriangle.addEventListener("click", () => {
  lprint(shapeTriangle.checked ? "triangle checked!" : "triangle unchecked!");
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