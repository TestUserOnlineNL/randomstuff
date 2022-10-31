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
    lprint(shapeRectangle.checked == true ? "square checked!" : "square unchecked!");
});
shapeTriangle.addEventListener("click", () => {
    lprint(shapeTriangle.checked == true ? "triangle checked!" : "triangle unchecked!");
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
/*
  SHAPES OBJECTS

  One class with 3 shapes inside. Constructor parameters shape, size, color, price.
*/
////////////////////////////////////////////////////
const showShapes = document.querySelector("#shapes");
class Shapes {
    constructor(shape, size, color, price) {
        this._shape = shape;
        this._size = size;
        this._color = color;
        this._price = price;
    }
    _circle() {
        const shape = document.createElement("div");
        shape.style.width = `${this._size}px`;
        shape.style.height = `${this._size}px`;
        shape.style.backgroundColor = this._color;
        shape.style.borderRadius = "50%";
        shape.style.display = "flex";
        shape.style.justifyContent = "space-around";
        shape.style.alignItems = "center";
        shape.innerText = `€${this._price}`;
        return shape;
    }
    _square() {
        const shape = document.createElement("div");
        shape.style.width = `${this._size}px`;
        shape.style.height = `${this._size}px`;
        shape.style.backgroundColor = this._color;
        shape.style.display = "flex";
        shape.style.justifyContent = "space-around";
        shape.style.alignItems = "center";
        shape.innerText = `€${this._price}`;
        return shape;
    }
    _triangle() {
        const shape = document.createElement("div");
        shape.style.width = `${0}px`;
        shape.style.height = `${0}px`;
        shape.style.borderLeft = `${this._size / 2}px solid transparent`;
        shape.style.borderRight = `${this._size / 2}px solid transparent`;
        shape.style.borderBottom = `${this._size}px solid ${this._color}`;
        shape.style.position = "relative";
        const textContainer = document.createElement("span");
        textContainer.innerText = `€${this._price}`;
        textContainer.style.position = "absolute";
        textContainer.style.bottom = `${-(this._size * (3 / 4))}px`;
        const pixel = this._size / 8;
        textContainer.style.left = `${-pixel + pixel / 2}px`;
        shape.appendChild(textContainer);
        return shape;
    }
    chooseShape() {
        const shape = this._shape;
        switch (shape) {
            case "square":
                return this._square();
            case "circle":
                return this._circle();
            case "triangle":
                return this._triangle();
            default:
                return;
        }
    }
}

const myShapes = [];

const mySquare = new Shapes("square", 200, "red", 10);
myShapes.push(mySquare.chooseShape());

const myCircle = new Shapes("circle", 200, "purple", 20);
myShapes.push(myCircle.chooseShape());

const myTriangle = new Shapes("triangle", 200, "blue", 30);
myShapes.push(myTriangle.chooseShape());

myShapes.forEach((shape) => {
    const gCell = document.createElement("div");
    gCell.style.width = "200px";
    gCell.style.outline = "1px dashed yellow";
    gCell.append(shape);
    showShapes.appendChild(gCell);
});
