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