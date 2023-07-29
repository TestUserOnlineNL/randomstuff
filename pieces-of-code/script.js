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
/*** function: printObjectOutput ***/
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
//=======================================================================
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
//=======================================================================
const filterData = [
  { shape: "square", color: "red", price: 100 },
  { shape: "circle", color: "red" },
  { shape: "square" },
  { shape: "circle", price: 100 },
  { price: 0 },
  {}
];
// filter objects by length{ color: "red" }
const filteredData = filterData.filter((el) => {
  switch (Object.keys(el).length) {
    case 3:
      return Object.entries(el);
      break;
    case 2:
      return Object.entries(el);
      break;
    case 1:
      return Object.entries(el);
      break;
    default:
      break;
  }
});
log(filteredData);
// filter object data
let myFig = "square";
let myColor = "red";

const newArray = shapesArray.filter(
  (fig) => fig.shape === `${myFig}` && fig.color === `${myColor}`
);

for (let obj in newArray) {
  let objkeys = Object.keys(newArray[obj]);
  for (let okey in objkeys) {
    log(objkeys[okey]);
  }
}
for (let obj in newArray) {
  let objvalues = Object.values(newArray[obj]);
  for (let ovalue in objvalues) {
    log(objvalues[ovalue]);
  }
}
log(newArray);
//
// destructuring an object
const cartoonName = {
  firstName: "Bugs",
  lastName: "Bunny"
};
let { firstName: fName, lastName: lName } = cartoonName;
lprint(fName + " " + lName);
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
// object destructuring
const minmax = { min_price: 10, max_price: 20 };
const { min_price, max_price } = minmax;
lprint(min_price);
lprint(max_price);
//
// intersection of two arrays
const itemsToFilter = ["red", "blue"];
const filteredResult = shapesArray.filter((item) => {
  if (itemsToFilter.indexOf(item.color) != -1) {
    log(item);
  } else {
    return false;
  }
});
//
// function: rangePriceFilter
const rangePriceFilter = (minmax) => {
  const { min_price: minprice, max_price: maxprice } = minmax;
  const newArray = shapesArray.filter(
    (obj) => obj.price >= minprice && obj.price <= maxprice
  );
  return newArray;
};
//
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

//
// function: deleteFromArray
const deleteFromArray = (arrayName, itemValue) => {
  const index = arrayName.indexOf(itemValue);
  if (index > -1) {
    arrayName.splice(index, 1);
  }
};
//
// function: toAddOrNot
const toAddOrNot = (objName, objKey, val) => {
  if (!objName[objKey].includes(val)) {
    objName[objKey].push(val);
  }
};
// function: toRemoveOrNot
const toRemoveOrNot = (objName, objKey, val) => {
  const index = objName[objKey].indexOf(val);
  if (index > -1) {
    objName[objKey].splice(index, 1);
  }
};
// examples
const test = {
  type: ["doos", "zak", "container"]
};
//
toAddOrNot(test, "type", "kist");
toAddOrNot(test, "type", "doos");
log(test);
//
toRemoveOrNot(test, "type", "zak");
log(test);
//
//===
const newdata = {
  bakker: 10,
  slager: 20,
  melkboer: 30,
  groenteboer: 40,
  telOp: function () {
    return Object.values(JSON.parse(JSON.stringify(this))).reduce(
      (acc, getal) => acc + getal,
      0
    );
  }
};
const totaal = newdata.telOp();
console.log("totaal: " + totaal);
//
// function: generateButtons
function generateButtons(numButtons) {
  const buttonsContainer = document.createElement("div");
  const buttons = [];

  for (let i = 1; i <= numButtons; i++) {
    const button = document.createElement("button");
    const buttonText = document.createTextNode(`Button ${i}`);
    button.appendChild(buttonText);
    button.value = i;
    button.addEventListener("click", function () {
      alert(`Button ${button.value} was clicked!`);
      return button.value;
    });
    buttonsContainer.appendChild(button);
    buttons.push(button);
  }

  document.body.appendChild(buttonsContainer);
  return buttons;
}
//
// data
const orders = [
  { id: 2, name: "box2", quantity: 20 },
  { id: 3, name: "box3", quantity: 5 },
  { id: 4, name: "box4", quantity: 0 }
];
/*
  function  : remove object from array by id
  dataObject: object array name
  searchId  : id to look for in object array
*/
function removeObjectFromArray(dataObject, searchId) {
  for (let i = 0; i < dataObject.length; i++) {
    if (dataObject[i].id === searchId) {
      dataObject.splice(dataObject.indexOf(dataObject[i]), 1);
    }
  }
  return dataObject;
}
const returnValue = removeObjectFromArray(orders, 3);
console.log(returnValue);

/* function: generateButtons */
function generateButtons(numButtons) {
  const buttonsContainer = document.createElement("div");

  for (let i = 1; i <= numButtons; i++) {
    const button = document.createElement("button");
    const buttonText = document.createTextNode(`Button ${i}`);
    button.appendChild(buttonText);
    button.value = i;
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      alert(`Button ${button.value} was clicked!`);
    });
    buttonsContainer.appendChild(button);
  }
  return buttonsContainer;
}

const section_1 = document.querySelector("#section_1");
section_1.appendChild(generateButtons(5));
/* ==================================================================== */
//
//=== kladlok ===
//