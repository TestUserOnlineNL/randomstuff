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

///////////////////////////////////////////////////////////////////////////
//
/*** my Favorite Gauge CLASS ***/
class MyFavoriteGauge {
  constructor(needle, display, slider) {
    this.needle = needle;
    this.display = display;
    this.slider = slider;
  }
  drawGauge() {
    const mypoint = document.createElement("div");
    mypoint.setAttribute("class", "mypoint");
    //
    const mymove = document.createElement("div");
    mymove.setAttribute("class", "mymove");
    mymove.setAttribute("id", "mymove");
    mymove.appendChild(mypoint);
    //
    const mytext = document.createElement("div");
    mytext.setAttribute("class", "mytext");
    mytext.setAttribute("id", "mytext");
    mytext.innerText = "0";
    //
    const mycover = document.createElement("div");
    mycover.setAttribute("class", "mycover");
    mycover.appendChild(mytext);
    //
    const myinput = document.createElement("input");
    myinput.setAttribute("type", "range");
    myinput.setAttribute("min", "0");
    myinput.setAttribute("max", "100");
    myinput.setAttribute("value", "0");
    myinput.setAttribute("class", "mymovecontroller");
    myinput.setAttribute("id", "mymovecontroller");
    //
    const mycontrollerbox = document.createElement("div");
    mycontrollerbox.setAttribute("class", "mycontrollerbox");
    mycontrollerbox.appendChild(myinput);
    //
    const mybox = document.createElement("div");
    mybox.setAttribute("class", "mybox");
    mybox.appendChild(mymove);
    mybox.appendChild(mycover);
    //
    const mycontainer = document.createElement("div");
    mycontainer.setAttribute("class", "mycontainer");
    mycontainer.appendChild(mybox);
    mycontainer.appendChild(mycontrollerbox);
    //
    const section = document.createElement("section");
    section.appendChild(mycontainer);

    myinput.addEventListener("input", () => {
      mytext.innerText = myinput.value;
      mymove.style.transform = `rotate(${myinput.value * 1.8}deg)`;
    });
    return section;
  }
  /* apply event handlers */
}
const myBody = document.querySelector("body");
const myTest = new MyFavoriteGauge();
myBody.appendChild(myTest.drawGauge());