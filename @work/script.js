"use strict";
/*** function log ***/
const log = (data) => {
  console.log(data);
};
/*** function lprint ***/
const lprint = (data) => {
  const element = document.createElement("section");
  element.textContent = data;
  return document.body.appendChild(element), log(data);
};
/*** function lprintArr  ***/
const lprintArr = (arrToPrint) => {
  for (let i = 0; i < arrToPrint.length; i++) {
    lprint(arrToPrint[i]);
  }
};
/*** function lprintObj ***/
const lprintObj = (objname) => {
  for (const [key, value] of Object.entries(objname)) {
    lprint(`${key}: ${value}`);
  }
};
/*** function lprintArrObj ***/
const lprintArrObj = (arrToPrint) => {
  for (let i = 0; i < arrToPrint.length; i++) {
    for (const [key, value] of Object.entries(arrToPrint[i])) {
      lprint(`${key}: ${value}`);
    }
  }
};
/*** function dateTimestamp ***/
const dateTimestamp = () => {
  const options = {
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
  return new Intl.DateTimeFormat("nl-NL", options).format(new Date());
};
//
log(dateTimestamp());
//
//============================
/* TEST DATA */
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
//============================
/*
 function: myFullname
 pass object to function as parameters
*/
const myFullname = ({ firstname = "", lastname = "", gender = "" }) => {
  return {
    firstname,
    lastname,
    gender
  };
};
const myPersonalData = {
  firstname: "Paas",
  lastname: "Haas",
  gender: "Male"
};
(() => {
  log(myFullname(myPersonalData));
})();
//
const printObjectOutput = (dataObject) => {
  const divContainer = document.createElement("div");
  divContainer.style.margin = "0.25rem 0.5rem";
  divContainer.style.backgroundColor = "grey";
  divContainer.style.width = "14.5rem";
  divContainer.style.padding = "0.25rem";
  let tekst = "";
  for (const [key, value] of Object.entries(dataObject)) {
    tekst += `${key}: ${value} `;
  }
  divContainer.innerText = tekst;
  return document.body.appendChild(divContainer);
};
//
//============================
/*** range slider filter by min & max value ***/
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
//
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
// function: addRangeEventListener
const addRangeEventListener = () => {
  const myRanges = document.querySelectorAll("input[type='ra=== kladblok ===nge']");
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
          printObjectOutput(rangeValuesCheck(rangeOne.value, rangeTwo.value));
        });
      }
    }
  }
};
// execute function: addRangeEventListener
addRangeEventListener();
//
// function: compare label 'For' attribute with range 'Id' attribute
const compareAttributes = () => {
  const myRanges = document.querySelectorAll("input[type='range']");
  const myLabels = document.querySelectorAll("label");
  let myRangeId,
    myLabelFor = "";
  for (let range = 0; range < myRanges.length; range++) {
    for (let lbl = 0; lbl < myLabels.length; lbl++) {
      myRangeId = myRanges[range].getAttribute("id");
      myLabelFor = myLabels[lbl].getAttribute("for");
      if (myRangeId === myLabelFor) console.log(myLabelFor);
    }
  }
};
compareAttributes();
//
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
      log(checkboxesArray);
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
createCheckboxes([
  { color: "purple" },
  { color: "red" },
  { color: "blue" },
  { shape: "square" },
  { shape: "circle" }
]);
//
// === kladblok ===
const tempData = {
  shape: [],
  color: []
};
const colorObject = {
  color:"red"
};
const shapeObject = {
  shape:"square"
}
const pushObjectValue = (someObject, someArray) => {
  const k = Object.keys(someObject);
  const v = Object.values(someObject);
  someArray[k].push(v);
  return;
};
pushObjectValue(shapeObject, tempData);
log(tempData);
//
