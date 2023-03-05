const log = console.log;
console.clear();
/*
  Planboard met drag-and-drop
*/
// data storage
const backlogData = [];
const inprogressData = [];
const feedbackData = [];
//
// function: setTitles
const titles = document.querySelectorAll("div[id^='title']");
const setTitles = (text) => {
  const titles = document.querySelectorAll("div[id^='title']");
  titles.forEach((item, index) => (item.innerText = text[index]));
};
//
// code block Drag & Drop
// ---source---
const source = document.querySelector("#backlog");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  ev.dataTransfer.clearData();
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
// ---target inprogress---
const inprogress = document.querySelector("#inprogress");
inprogress.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
//
inprogress.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});
//
// ---target feedback---
const feedback = document.querySelector("#feedback");
feedback.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
//
feedback.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text/plain");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});
//
// function: createCard
const createCard = () => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");
  card.setAttribute("id", "card");
  card.setAttribute("draggable", "true");
  return card;
};
//
// function: addCard
const addCardButton = () => {
  const cardAdd = document.querySelector("#cardAddButton");
  const backlog = document.querySelector("#backlog");
  cardAdd.addEventListener("click", () => {
    backlogData.push(createCard());
    backlog.appendChild(createCard());
  });
};
//
// function: immediate
(() => {
  setTitles(["Backlog", "In progress", "Feedback"]);
  addCardButton();
})();
//=== kladblok ===
/*
  https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
  https://www.w3schools.com/html/html5_draganddrop.asp
  https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData
*/