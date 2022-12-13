"use strict";
/*** function lprint ***/
const lprint = (data) => {
    const element = document.createElement("section");
    element.textContent = data;
    return document.body.appendChild(element), console.log(data);
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
    return new Intl.DateTimeFormat("nl-NL", options).format();
};
//
lprint(dateTimestamp());
//
//============================
/*** pass object to function as parameters ***/
const myFullname = ({
    firstname = "",
    lastname = "",
    gender = ""
}) => {
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
    lprintObj(myFullname(myPersonalData));
})();
//
//============================
/*** range slider filter by min & max value ***/
// function: range values check
const rangeValuesCheck = (minValue, maxValue) => {
    let min_price, max_price;
    if (parseInt(minValue) > parseInt(maxValue)) {
        max_price = minValue;
        min_price = maxValue;
    }
    else {
        min_price = minValue;
        max_price = maxValue;
    }
    return { min_price, max_price };
}
//
const section = document.querySelector("#rangeControls");
// minimum price range slider
const divRangeOne = document.createElement("div");
const rangeOne = document.createElement("input");
rangeOne.setAttribute("type", "range");
rangeOne.setAttribute("name", "rangeOne");
rangeOne.setAttribute("id", "rangeOne");
rangeOne.setAttribute("min", 0);
rangeOne.setAttribute("max", "100");
rangeOne.setAttribute("value", 0);
divRangeOne.appendChild(rangeOne);
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
rangeTwo.setAttribute("max", "100");
rangeTwo.setAttribute("value", "100");
divRangeTwo.appendChild(rangeTwo);
section.appendChild(divRangeTwo);
// maximum price range label
const divLabelTwo = document.createElement("label");
divLabelTwo.setAttribute("for", "rangeTwo");
divLabelTwo.setAttribute("id", "rangeLabelTwo");
divLabelTwo.innerText = rangeTwo.value;
divRangeTwo.appendChild(divLabelTwo);
// range slider event listener
const addRangeEventListener = () => {
    const rangeNames = document.querySelectorAll("input[type='range']");
    const labels = document.querySelectorAll("label");
    for (let range = 0; range < rangeNames.length; range++) {
        rangeNames[range].addEventListener('input', (ev) => {
            labels[range].innerText = ev.target.value;
            console.log(rangeValuesCheck(rangeOne.value, rangeTwo.value));

        });
    }
}
addRangeEventListener();