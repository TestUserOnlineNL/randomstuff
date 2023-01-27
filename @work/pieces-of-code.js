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
// destructuring a object
const cartoonName = {
    firstName: "Bugs",
    lastName: "Bunny"
}
let { firstName: fName, lastName: lName } = cartoonName;
lprint(fName + " " + lName);