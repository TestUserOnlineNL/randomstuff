"use strict";
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
//
const toFilterObjectData = {
  color: [],
  shape: [],
  price: []
};
// function: multiFilter
const multiFilter = (arr, filters) => {
  let filterKeys = Object.keys(filters);
  return arr.filter((eachObj) => {
    return filterKeys.every((eachKey) => {
      if (!filters[eachKey].length) {
        return true; // passing an empty filter means that filter is ignored.
      }
      return filters[eachKey].includes(eachObj[eachKey]);
    });
  });
};
//=====================================================================
//=====================================================================
/*** range slider filter by min & max value ***/
//
// function: rangeValuesCheck
const rangeValuesCheck = (minValue, maxValue) => {
  let min_price, max_price;
  if (parseInt(minValue) > parseInt(maxValue)) {
    max_price = minValue;
    min_price = maxValue;
  } else {
    min_price = minValue;
    max_price = maxValue;
  }
  return { min_price, max_price };
};
// function: getPrice
const getPrice = (minmax) => {
  const { min_price: minprice, max_price: maxprice } = minmax;
  let foundPrices = [];
  shapesArray.forEach((figureObject) => {
    if (figureObject.price >= minprice && figureObject.price <= maxprice) {
      foundPrices.push(figureObject.price);
    }
  });
  toFilterObjectData["price"] = foundPrices;
};
/* ranges code block */
const createRanges = () => {
  // get 'id' of 'section' html page
  const section = document.querySelector("#rangeControls");
  // minimum price range slider
  const divRangeOne = document.createElement("div");
  const rangeOne = document.createElement("input");
  rangeOne.setAttribute("type", "range");
  rangeOne.setAttribute("name", "rangeOne");
  rangeOne.setAttribute("id", "rangeOne");
  rangeOne.setAttribute("min", 0);
  rangeOne.setAttribute("max", 100);
  rangeOne.setAttribute("value", 0);
  divRangeOne.appendChild(rangeOne);
  divRangeOne.setAttribute("class", "rangeDiv");
  section.appendChild(divRangeOne);
  // minimum price range label
  const divLabelOne = document.createElement("label");
  divLabelOne.setAttribute("for", "rangeOne");
  divLabelOne.setAttribute("id", "rangeLabelOne");
  divLabelOne.innerText = rangeOne.value;
  divRangeOne.appendChild(divLabelOne);
  // maximum price range slider
  const divRangeTwo = document.createElement("div");
  const rangeTwo = document.createElement("input");
  rangeTwo.setAttribute("type", "range");
  rangeTwo.setAttribute("name", "rangeTwo");
  rangeTwo.setAttribute("id", "rangeTwo");
  rangeTwo.setAttribute("min", 0);
  rangeTwo.setAttribute("max", 100);
  rangeTwo.setAttribute("value", 100);
  divRangeTwo.appendChild(rangeTwo);
  divRangeTwo.setAttribute("class", "rangeDiv");
  section.appendChild(divRangeTwo);
  // maximum price range label
  const divLabelTwo = document.createElement("label");
  divLabelTwo.setAttribute("for", "rangeTwo");
  divLabelTwo.setAttribute("id", "rangeLabelTwo");
  divLabelTwo.innerText = rangeTwo.value;
  divRangeTwo.appendChild(divLabelTwo);
};
// function: addRangeEventListener
const addRangeEventListener = () => {
  const myRanges = document.querySelectorAll("input[type='range']");
  const myLabels = document.querySelectorAll("label");
  let myRangeId = "";
  let myLabelFor = "";
  for (let range = 0; range < myRanges.length; range++) {
    for (let lbl = 0; lbl < myLabels.length; lbl++) {
      myRangeId = myRanges[range].getAttribute("id");
      myLabelFor = myLabels[lbl].getAttribute("for");
      if (myRangeId === myLabelFor) {
        myRanges[range].addEventListener("input", (ev) => {
          myLabels[lbl].innerText = ev.target.value;
          getPrice(rangeValuesCheck(rangeOne.value, rangeTwo.value));
          createPrison(multiFilter(shapesArray, toFilterObjectData));
        });
      }
    }
  }
};
//=====================================================================
/* function addButton */
const createButton = (buttonName) => {
  const reset_btn = document.querySelector("#resetValues");
  const aButtonContainer = document.createElement("div");
  aButtonContainer.setAttribute("class", "buttonContainer");
  const aButton = document.createElement("button");
  aButton.setAttribute("id", "button");
  aButton.innerText = buttonName;
  aButtonContainer.appendChild(aButton);
  reset_btn.appendChild(aButtonContainer);
};
/* function: resetFilters */
// TODO
//=====================================================================
// function: filterCheckboxObjects
const filterCheckboxObjects = (objArray) => {
  const colorsArray = [];
  const shapesArray = [];
  objArray.forEach((obj) => {
    if (Object.keys(obj) == "color") {
      colorsArray.push(obj.color);
    } else {
      shapesArray.push(obj.shape);
    }
  });
  toFilterObjectData["color"] = colorsArray;
  toFilterObjectData["shape"] = shapesArray;
};
// function: deleteFromArray
const deleteFromArray = (arrayName, itemValue) => {
  const index = arrayName.indexOf(itemValue);
  if (index > -1) {
    arrayName.splice(index, 1);
  }
};
// function: createCheckboxes
const createCheckboxes = (namesArray) => {
  const checkboxControls = document.querySelector("#checkboxControls");
  //
  const checkboxesArray = new Array();
  for (let item = 0; item < namesArray.length; item++) {
    const divCheckbox = document.createElement("div");
    divCheckbox.setAttribute("class", "divCheckbox");
    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.setAttribute("id", Object.values(namesArray[item]));
    checkboxInput.setAttribute("name", Object.values(namesArray[item]));
    checkboxInput.setAttribute("value", Object.values(namesArray[item]));
    checkboxInput.addEventListener("input", (_) => {
      checkboxInput.checked
        ? checkboxesArray.push(namesArray[item])
        : deleteFromArray(checkboxesArray, namesArray[item]);
      filterCheckboxObjects(checkboxesArray);
      createPrison(multiFilter(shapesArray, toFilterObjectData));
    });
    //
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", Object.values(namesArray[item]));
    checkboxLabel.innerText = Object.values(namesArray[item]);
    divCheckbox.appendChild(checkboxInput);
    divCheckbox.appendChild(checkboxLabel);
    checkboxControls.appendChild(divCheckbox);
  }
};
//=====================================================================
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
  ctx.font = "1.1rem sans serif";
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
  ctx.font = "1.1rem sans serif";
  ctx.fillStyle = "white";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(priceText, sizeValue / 2, sizeValue / 2);
  //
  return circleCanvas;
};
//=====================================================================
const createPrison = (shapesNames) => {
  const sectionShapes = document.querySelector("#shapes");
  const prison = document.createElement("div");
  prison.setAttribute("id", "prison");
  prison.setAttribute("class", "prison");

  for (let shape = 0; shape < shapesNames.length; shape++) {
    const cell = document.createElement("div");
    switch (shapesNames[shape].shape) {
      case "circle":
        const circleObj = drawCircle(
          150,
          shapesNames[shape].color,
          shapesNames[shape].price
        );
        cell.appendChild(circleObj);
        break;
      case "square":
        const squareObj = drawSquare(
          150,
          shapesNames[shape].color,
          shapesNames[shape].price
        );
        cell.appendChild(squareObj);
        break;
    }
    prison.appendChild(cell);
  }
  sectionShapes.append(prison);
};
//=====================================================================
/* function: immediate function */
(() => {
  // execute function: createRangeSlider
  createRanges();
  // execute function: addRangeEventListener
  addRangeEventListener();
  // execute function: createCheckboxes
  createCheckboxes([
    { color: "purple" },
    { color: "red" },
    { color: "blue" },
    { shape: "square" },
    { shape: "circle" }
  ]);
  // execute function: addButton
  createButton("reset filters");
  // execute function: createPrison
  createPrison(shapesArray);
})();