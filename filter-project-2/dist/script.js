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
/* function addEventListenerForCheckbox */
const checkboxObjArray = [];
const addEventListenerForCheckbox = (elementName, typeEvent) => {
  elementName.addEventListener(typeEvent, (e) => {
    const output = e.target.id.split("-");
    const objectJSON = JSON.parse(`{"${output[0]}":"${output[1]}"}`);
    let index = 0;
    if (e.target.checked) {
      checkboxObjArray.push(objectJSON);
      console.log(checkboxObjArray);
    } else {
      index = checkboxObjArray.findIndex((item) => {
        if (item === objectJSON) {
          checkboxObjArray.splice(index, 1);
          console.log(index);
        }
      });
    }
    console.log(checkboxObjArray);
  });
};

/* function: addEventListenerForButton */
const addEventListenerForButton = (elementName) => {
  elementName.addEventListener("click", () => {
    resetFilters();
    console.log("reset filters button clicked!");
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
// function: range values check
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
/* function: createRangeSlider */
const createRangeSlider = () => {
  /*** range slider filter by min & max value ***/
  //
  const divSection = document.createElement("div");
  divSection.setAttribute("id", "rangeContainer");
  divSection.setAttribute("class", "rangeContainer");

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

  // maximum price range label
  const divLabelTwo = document.createElement("label");
  divLabelTwo.setAttribute("for", "rangeTwo");
  divLabelTwo.setAttribute("id", "rangeLabelTwo");
  divLabelTwo.innerText = rangeTwo.value;
  divRangeTwo.appendChild(divLabelTwo);
  //
  divSection.appendChild(divRangeOne);
  divSection.appendChild(divRangeTwo);

  return [divSection];
};
/* function: addEventListenerForRange */
const addEventListenerForRange = () => {
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
          console.log(rangeValuesCheck(rangeOne.value, rangeTwo.value));
        });
      }
    }
  }
};
//
/* function addButton */
const addButton = (...buttonNames) => {
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
/* function: resetFilters */
const resetFilters = () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  for (let checkbox of checkboxes) {
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  }
  const myRanges = document.querySelectorAll("input[type='range']");
  const myLabels = document.querySelectorAll("label");
  let myRangeId = "";
  let myLabelFor = "";
  for (let range = 0; range < myRanges.length; range++) {
    for (let lbl = 0; lbl < myLabels.length; lbl++) {
      myRangeId = myRanges[range].getAttribute("id");
      myLabelFor = myLabels[lbl].getAttribute("for");
      if (myRangeId === myLabelFor) {
        myRanges[0].value = 0;
        myRanges[1].value = 100;
        //
        myLabels[5].innerText = 0;
        myLabels[6].innerText = 100;
      }
    }
  }
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
const createPrison = (shapesNames) => {
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
  return [prison];
};
/************/
/* kladblok */
/************/
const criteria = {
  red: false,
  blue: false,
  purple: false,
  square: false,
  circle: false,
  minprice: 0,
  maxprice: 0
};
/* function: priceFilter */
function priceFilter(minp, maxp, arrayIn) {
  let result = [];
  for (let t = 0; t < arrayIn.length; t++) {
    if (arrayIn[t].price >= minp && arrayIn[t].price <= maxp) {
      result = [...result, arrayIn[t]];
    }
  }
  return result;
}
/* function: colorFilter */
function colorFilter(colorChecked, arrayIn) {
  let result = [];
  for (let t = 0; t < arrayIn.length; t++) {
    if (arrayIn[t].color === colorChecked) {
      result = [...result, arrayIn[t]];
    }
  }
  return result;
}
/* function: shapeFilter */
function shapeFilter(shapeChecked, arrayIn) {
  let result = [];
  for (let t = 0; t < arrayIn.length; t++) {
    if (arrayIn[t].shape === shapeChecked) {
      result = [...result, arrayIn[t]];
    }
  }
  return result;
}
/* function: immediate function */
(() => {
  addToCriteriaSectionForMe(
    createCheckboxesForMe("color", "red", "blue", "purple")
  );
  addToCriteriaSectionForMe(createCheckboxesForMe("shape", "square", "circle"));
  //
  addToCriteriaSectionForMe(createRangeSlider());
  addEventListenerForRange();
  //
  addToCriteriaSectionForMe(addButton("reset filters"));
  //
  addToShapesSectionForMe(createPrison(shapesArray));
})();