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
/////////////////////////////////////////////////////////////
/*
  CLASSES: makeCheckboxes, Shapes, FilterObjects, ShowObjects
*/
/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//
/*** my Favorite Gauge CLASS ***/
class MyFavoriteGauge {
  constructor(needle, display, slider) {
    this.needle = needle;
    this.display = display;
    this.slider = slider;
  }
  drawGauge() {
    const mypoint = document.createElement("div");
    mypoint.setAttribute("class", "mypoint");
    //
    const mymove = document.createElement("div");
    mymove.setAttribute("class", "mymove");
    mymove.setAttribute("id", "mymove");
    mymove.appendChild(mypoint);
    //
    const mytext = document.createElement("div");
    mytext.setAttribute("class", "mytext");
    mytext.setAttribute("id", "mytext");
    mytext.innerText = "0";
    //
    const mycover = document.createElement("div");
    mycover.setAttribute("class", "mycover");
    mycover.appendChild(mytext);
    //
    const myinput = document.createElement("input");
    myinput.setAttribute("type", "range");
    myinput.setAttribute("min", "0");
    myinput.setAttribute("max", "100");
    myinput.setAttribute("value", "0");
    myinput.setAttribute("class", "mymovecontroller");
    myinput.setAttribute("id", "mymovecontroller");
    //
    const mycontrollerbox = document.createElement("div");
    mycontrollerbox.setAttribute("class", "mycontrollerbox");
    mycontrollerbox.appendChild(myinput);
    //
    const mybox = document.createElement("div");
    mybox.setAttribute("class", "mybox");
    mybox.appendChild(mymove);
    mybox.appendChild(mycover);
    //
    const mycontainer = document.createElement("div");
    mycontainer.setAttribute("class", "mycontainer");
    mycontainer.appendChild(mybox);
    mycontainer.appendChild(mycontrollerbox);
    //
    const section = document.createElement("section");
    section.appendChild(mycontainer);

    myinput.addEventListener("input", () => {
      mytext.innerText = myinput.value;
      mymove.style.transform = `rotate(${myinput.value * 1.8}deg)`;
    });
    return section;
  }
}
// minimum price gauge
const gaugeOne = document.querySelector("#gauge_one");
const minPriceGauge = new MyFavoriteGauge();
gaugeOne.appendChild(minPriceGauge.drawGauge());
// maximum price gauge
const gaugeTwo = document.querySelector("#gauge_two");
const maxPriceGauge = new MyFavoriteGauge();
gaugeTwo.appendChild(maxPriceGauge.drawGauge());

class makeCheckboxes {
  constructor(checkboxNames) {
    this.checkboxNames = checkboxNames;
  }
  myCheckboxes() {
    const checkboxesContainer = document.createElement("div");
    checkboxesContainer.setAttribute("class", "selection_filters");
    //
    this.checkboxNames.forEach((boxname) => {
      const myCheckboxLabel = document.createElement("label");
      myCheckboxLabel.setAttribute("for", boxname);
      myCheckboxLabel.innerText = boxname;
      //
      const myCheckbox = document.createElement("input");
      myCheckbox.setAttribute("type", "checkbox");
      myCheckbox.setAttribute("name", boxname);
      myCheckbox.setAttribute("id", boxname);
      //
      checkboxesContainer.appendChild(myCheckboxLabel);
      checkboxesContainer.appendChild(myCheckbox);
    });
    return checkboxesContainer;
  }
}

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
/*** Filter Objects (shapes) ***/
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
    const filteredShapes = this.arr.filter(
      (shape) => shape.id.split(" ")[2] === objprice
    );
    return filteredShapes;
  }
  get filterNone() {
    // const filteredShapes = this.arr;
    // return filteredShapes;
    return this.arr;
  }
}
/*** Show Objects (shapes) ***/
class ShowObjects {
  constructor(shapesArray, attachTo) {
    this.shapesArray = shapesArray;
    this.attachTo = attachTo;
  }
  removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
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
const showShapes = document.querySelector("#shapes");
const myShapes = [];
/*** Define Grid Cells ***/
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
let resultArray = toBeFiltered.filterNone;
const myResult = new ShowObjects(resultArray, showShapes);
myResult.objectsGrid();
// \\ // \\ // \\

/*** Filter Criteria ***/
////////////
const kleuren = document.querySelector("#mycolors");
const _color = new makeCheckboxes(["red", "purple", "blue"], "blue", "orange");
kleuren.appendChild(_color.myCheckboxes());
//
const vormen = document.querySelector("#myshapes");
const _shape = new makeCheckboxes(
  ["square", "circle", "triangle"],
  "blue",
  "orange"
);
vormen.appendChild(_shape.myCheckboxes());
////////////
// color
const colorRed = document.querySelector("#red");
const colorPurple = document.querySelector("#purple");
const colorBlue = document.querySelector("#blue");
// shape
const shapeCircle = document.querySelector("#circle");
const shapeSquare = document.querySelector("#square");
const shapeTriangle = document.querySelector("#triangle");
// price
const minPrice = document.querySelector("#min_price");
const maxPrice = document.querySelector("#max_price");
const showMinPrice = document.querySelector("#showMinPrice");
const showMaxPrice = document.querySelector("#showMaxPrice");

// button \\
const resetValues = document.querySelector("#reset_button");

// color eventlisteners \\
colorRed.addEventListener("click", () => {
  if (colorRed.checked === true) {
    resultArray = toBeFiltered.filterColor("red");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
colorPurple.addEventListener("click", () => {
  if (colorPurple.checked === true) {
    resultArray = toBeFiltered.filterColor("purple");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
colorBlue.addEventListener("click", () => {
  if (colorBlue.checked === true) {
    resultArray = toBeFiltered.filterColor("blue");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
// shape eventlisteners \\
shapeSquare.addEventListener("click", () => {
  if (shapeSquare.checked === true) {
    resultArray = toBeFiltered.filterShape("square");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
shapeCircle.addEventListener("click", () => {
  if (shapeCircle.checked === true) {
    resultArray = toBeFiltered.filterShape("circle");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
shapeTriangle.addEventListener("click", () => {
  if (shapeTriangle.checked === true) {
    resultArray = toBeFiltered.filterShape("triangle");
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
});
// price eventlisteners \\
minPrice.addEventListener("input", () => {
  showMinPrice.innerText = minPrice.value;
  if (minPrice.value >= 0) {
    console.log(minPrice.value);
    resultArray = toBeFiltered.filterPrice(minPrice.value);
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  } else {
    resultArray = toBeFiltered.filterNone;
    const myResult = new ShowObjects(resultArray, showShapes);
    myResult.removeAllChildNodes(showShapes);
    myResult.objectsGrid();
  }
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
  shapeSquare.checked = false;
  shapeTriangle.checked = false;
  showMinPrice.innerText = "0";
  minPrice.value = 0;
  showMaxPrice.innerText = "100";
  maxPrice.value = 100;
});
