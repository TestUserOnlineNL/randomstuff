/* data: shapesArray */
const shapesArray = [
  { shape: "square", color: "purple", price: 0 },
  { shape: "circle", color: "purple", price: 20 },
  { shape: "square", color: "red", price: 40 },
  { shape: "circle", color: "red", price: 0 },
  { shape: "square", color: "blue", price: 20 },
  { shape: "circle", color: "blue", price: 40 },
  { shape: "square", color: "purple", price: 60 },
  { shape: "circle", color: "purple", price: 80 },
  { shape: "square", color: "red", price: 100 },
  { shape: "circle", color: "red", price: 60 },
  { shape: "square", color: "blue", price: 80 },
  { shape: "circle", color: "blue", price: 100 }
];

const criteria = {
  red: false,
  blue: false,
  purple: false,
  square: false,
  circle: false,
  minprice: 0,
  maxprice: 0
};
/* function: displayShapeDataForMe */
const displayShapeDataForMe = (arrayIn) => {
  let count = 0;
  arrayIn.forEach((figure) => {
    let row = Object.values(figure);
    console.log(row);
    return row;
  });
};
//
//displayShapeDataForMe(shapesArray);
//
/* function addEventListenerForCheckbox */
const checkboxObjArray = [];
const addEventListenerForCheckbox = (elementName, typeEvent) => {
  elementName.addEventListener(typeEvent, (e) => {
    const output = e.target.id.split("-");
    const objectJSON = JSON.parse(`{"${output[0]}":"${output[1]}"}`);
    checkboxObjArray.push(objectJSON);
    console.log(checkboxObjArray);
  });
};

/* function: addEventListenerForRange */
const addEventListenerForRange = (elementName1, elementName2, typeEvent) => {
  elementName1.addEventListener(typeEvent, (e) => {
    elementName1.value = e.target.value;
    elementName2.innerText = e.target.value;
    criteria[`${elementName1.name}`] = parseInt(e.target.value);

    const filteredshapesArray = shapesArray.filter((item) => {
      //console.log(item.price);
      if (item.price >= criteria.minprice && item.price <= criteria.maxprice)
        return item;
    });
    console.log(filteredshapesArray);
  });
};
/* function: addEventListenerForButton */
const addEventListenerForButton = (elementName) => {
  elementName.addEventListener("click", () => {
    console.log("clicked!");
  });
};
/* function: createCheckboxesForMe */
const createCheckboxesForMe = (groupName, ...checkboxNames) => {
  const newCheckboxesWithLabel = [];
  for (let checkbox = 0; checkbox < checkboxNames.length; checkbox++) {
    const checkboxContainer = document.createElement("div");
    //
    const newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.setAttribute("name", checkboxNames[checkbox]);
    newCheckbox.setAttribute("id", `${groupName}-${checkboxNames[checkbox]}`);
    checkboxContainer.appendChild(newCheckbox);
    //
    addEventListenerForCheckbox(newCheckbox, "input");
    //
    const newCheckboxLabel = document.createElement("label");
    newCheckboxLabel.setAttribute("for", checkboxNames[checkbox]);
    newCheckboxLabel.innerText = checkboxNames[checkbox];
    checkboxContainer.appendChild(newCheckboxLabel);
    //
    newCheckboxesWithLabel.push(checkboxContainer);
  }
  return newCheckboxesWithLabel;
};
/* function: createRangeSliderForMe */
const createRangeSlidersForMe = (...rangeNames) => {
  const newRangesWithLabel = [];
  for (let range = 0; range < rangeNames.length; range++) {
    const rangesContainer = document.createElement("div");
    rangesContainer.setAttribute("class", "rangesContainer");
    //
    const rangeSliderLabel = document.createElement("label");
    rangeSliderLabel.setAttribute("for", rangeNames[range]);
    rangeSliderLabel.innerText = rangeNames[range];
    rangesContainer.appendChild(rangeSliderLabel);
    //
    const rangeSlider = document.createElement("input");
    rangeSlider.setAttribute("type", "range");
    rangeSlider.setAttribute("name", rangeNames[range]);
    rangeSlider.setAttribute("id", rangeNames[range]);
    rangeSlider.setAttribute("value", 0);
    rangesContainer.appendChild(rangeSlider);
    //
    const priceLabel = document.createElement("span");
    priceLabel.setAttribute("id", "priceLabel");
    priceLabel.innerText = 0;
    rangesContainer.appendChild(priceLabel);
    //
    addEventListenerForRange(rangeSlider, priceLabel, "input");
    //
    newRangesWithLabel.push(rangesContainer);
  }
  return newRangesWithLabel;
};
/* function addButtonForMe */
const addButtonForMe = (...buttonNames) => {
  const buttonsContainer = [];
  for (let button = 0; button < buttonNames.length; button++) {
    const aButtonContainer = document.createElement("div");
    aButtonContainer.setAttribute("class", "buttonContainer");
    const aButton = document.createElement("button");
    aButton.setAttribute("id", buttonNames[button]);
    aButton.innerText = buttonNames[button];
    aButtonContainer.appendChild(aButton);
    buttonsContainer.push(aButtonContainer);
    //
    addEventListenerForButton(aButton);
  }
  return buttonsContainer;
};
/* function: addToCriteriaSectionForMe */
const addToCriteriaSectionForMe = (criteria) => {
  const sectionCriteria = document.querySelector("#criteria");
  return sectionCriteria.append(...criteria);
};
/* function: addToShapesSectionForMe */
const addToShapesSectionForMe = (newShapes) => {
  const sectionShapes = document.querySelector("#shapes");
  return sectionShapes.append(...newShapes);
};
/* function: createGridForMe */
const createGridForMe = (...shapesNames) => {
  const prison = document.createElement("div");
  prison.setAttribute("id", "prison");
  prison.setAttribute("class", "prison");
  for (let gridcell = 0; gridcell < shapesNames.length; gridcell++) {
    const cell = document.createElement("div");
    cell.innerText = shapesNames[gridcell];
    prison.appendChild(cell);
  }
  return [prison];
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function: drawSquare */
const drawSquare = (sizeValue, colorText, priceText) => {
  const squareCanvas = document.createElement("canvas");
  squareCanvas.setAttribute("width", sizeValue);
  squareCanvas.setAttribute("height", sizeValue);
  //
  const ctx = squareCanvas.getContext("2d");
  ctx.fillStyle = colorText;
  ctx.fillRect(0, 0, sizeValue, sizeValue);
  //
  ctx.font = "1.1rem comic sans ms";
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(priceText, sizeValue / 2, sizeValue / 2);
  //
  return squareCanvas;
};
/* function: drawCircle */
const drawCircle = (sizeValue, colorText, priceText) => {
  const circleCanvas = document.createElement("canvas");
  circleCanvas.setAttribute("width", sizeValue);
  circleCanvas.setAttribute("height", sizeValue);
  //
  const ctx = circleCanvas.getContext("2d");
  const centerX = circleCanvas.width / 2;
  const centerY = circleCanvas.height / 2;
  const radius = circleCanvas.height / 2;

  ctx.beginPath();
  ctx.fillStyle = colorText;
  ctx.strokeStyle = colorText;
  ctx.lineWidth = 0;

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
  //
  ctx.font = "1.1rem comic sans ms";
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(priceText, sizeValue / 2, sizeValue / 2);
  //
  return circleCanvas;
};
//
const dynamic = document.body;
//
let circleData = {};
circleData = {
  sizeCircle: "150",
  colorCircle: "blue",
  priceCircle: "€100"
};
//
dynamic.appendChild(
  drawCircle(
    circleData.sizeCircle,
    circleData.colorCircle,
    circleData.priceCircle
  )
);
//
let squareData = {};
squareData = {
  sizeSquare: "150",
  colorSquare: "purple",
  priceSquare: "€80"
};
squareData = {
  sizeSquare: "150",
  colorSquare: "red",
  priceSquare: "€40"
};
//
dynamic.appendChild(
  drawSquare(
    squareData.sizeSquare,
    squareData.colorSquare,
    squareData.priceSquare
  )
);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* function: immediate funtion */
(() => {
  addToCriteriaSectionForMe(
    createCheckboxesForMe("color", "red", "blue", "purple")
  );
  addToCriteriaSectionForMe(createCheckboxesForMe("shape", "square", "circle"));
  addToCriteriaSectionForMe(createRangeSlidersForMe("minprice", "maxprice"));
  addToCriteriaSectionForMe(addButtonForMe("reset filters"));
  //
  addToShapesSectionForMe(
    createGridForMe(
      "hello",
      "world",
      "your",
      "mammy",
      "hello",
      "world",
      "your",
      "mammy",
      "hello",
      "world",
      "your",
      "mammy"
    )
  );
})();