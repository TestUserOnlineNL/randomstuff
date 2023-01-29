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
}
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
const tempData = {
    shape: [],
    color: []
  };
  
  const pushObjectValue = (someObject, someArray) => {
    const k = Object.keys(someObject);
    const v = Object.values(someObject);
    someArray[k].push(v);
    return;
  };
  pushObjectValue({ color: "red" }, tempData);
  log(tempData);
  //
  // object destructuring
  const minmax = { min_price: 10, max_price: 20 };
  const { min_price, max_price } = minmax;
  lprint(min_price);
  lprint(max_price);
  //