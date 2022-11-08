/*** Gauges ***/
const gaugeDailControllerOne = document.querySelector(
  "#gauge-dail-controller-one"
);
const gaugeDailControllerTwo = document.querySelector(
  "#gauge-dail-controller-two"
);
const gaugeTextOne = document.querySelector("#gauge-text-one");
const gaugeTextTwo = document.querySelector("#gauge-text-two");
const gaugeDailOne = document.querySelector("#gauge-dail-one");
const gaugeDailTwo = document.querySelector("#gauge-dail-two");
gaugeDailControllerOne.addEventListener("input", () => {
  gaugeTextOne.innerText = gaugeDailControllerOne.value;
  gaugeDailOne.style.transform = `rotate(${
    gaugeDailControllerOne.value * 1.8
  }deg)`;
});
gaugeDailControllerTwo.addEventListener("input", () => {
  gaugeTextTwo.innerText = gaugeDailControllerTwo.value;
  gaugeDailTwo.style.transform = `rotate(${
    gaugeDailControllerTwo.value * 1.8
  }deg)`;
});
/*** my Pink Gauge ***/
const myMoveController = document.querySelector("#mymovecontroller");
const myText = document.querySelector("#mytext");
const myMove = document.querySelector("#mymove");
myMoveController.addEventListener("input", () => {
  myText.innerText = myMoveController.value;
  myMove.style.transform = `rotate(${myMoveController.value * 1.8}deg)`;
});
/*** my Pink Gauge class [wip] ***/
class MyPinkGauge {
  constructor(needle, display, slider) {
    this.needle = needle;
    this.display = display;
    this.slider = slider;
  }
  /* draw gauge */
  /* apply event handlers */
}