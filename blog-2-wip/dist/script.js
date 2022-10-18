//============================
// function lprint
const lprint = (data) => {
  const element = document.createElement("section");
  element.textContent = data;
  return document.body.appendChild(element), console.log(data);
};
//============================
// function lprintArr
const lprintArr = (arrToPrint) => {
  for (let i = 0; i < arrToPrint.length; i++) {
    lprint(arrToPrint[i]);
  }
};
//============================
// function dateTimestamp
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
//============================
// DATE STUFF
let postDate = dateTimestamp();
const dts = document.querySelector("#dts");
dts.classList.add("dt");
dts.innerText = `Date: ${postDate}`;

// DECLARE STUFF
const myStore = window.localStorage;
const typedText = document.querySelector("#searchbox");
const showText = document.querySelector("#txt");
const keyName = "artikelen";
let valueName = [];

// function load data
const loadData = () => {
  try {
    const posts = JSON.parse(myStore.getItem(keyName)) || [];
    return posts;
  } catch (err) {
    console.error(err);
  }
};

// function add data
const addData = (f1date, f1title, f1text) => {
  valueName = loadData();
  try {
    const post = { datum: f1date, titel: f1title, artikel: f1text };
    if (post) {
      valueName.push(post);
      myStore.setItem(keyName, JSON.stringify(valueName));
      showSearch(valueName);
    }
  } catch (e) {
    console.log("error adding item");
  }
};

// function display data
const showSearch = (a) => {
  showText.innerText = "";
  a.forEach((b) => {
    const sec = document.createElement("section");
    const tit = document.createElement("div");
    const txt = document.createElement("artikel");
    tit.innerText = `${b.titel.toLowerCase()}`;
    tit.classList.add("titel");
    txt.innerText = `${b.artikel.toLowerCase()}`;
    txt.classList.add("artikel");
    sec.appendChild(tit);
    sec.appendChild(txt);
    sec.classList.add("sec_color");
    tit.appendChild(removeButton());
    openArticle(sec);
    return showText.appendChild(sec);
  });
};

// remove button
const removeButton = (_) => {
  const btnRemove = document.createElement("div");
  btnRemove.innerText = "+";
  btnRemove.classList.add("btn__remove");
  btnRemove.addEventListener("click", (event) => {
    event.stopPropagation();
    removeData();
  });
  return btnRemove;
};

// remove data
const removeData = (_) => {
  console.log("clicked & removed!");
};

// search
typedText.addEventListener("keyup", (e) => {
  const artikelen = loadData();
  const filtered = artikelen.filter((artikel) => {
    return artikel.titel.includes(e.target.value);
  });
  showSearch(filtered);
});

// open and close article
const myDialog = document.querySelector("#myDialog");
const closeArticle = document.querySelector("#hideDialog");
// function open aticle
const openArticle = (item) => {
  item.addEventListener("click", () => {
    myDialog.show();
  });
};
// close article
closeArticle.addEventListener("click", () => myDialog.close());

// form 1
const formPost = document.getElementById("form1");
formPost.addEventListener("submit", (e) => {
  e.preventDefault();
  const f1Title = formPost.fld__title.value;
  const f1Text = formPost.fld__message.value;

  addData(postDate, f1Title, f1Text);
  formPost.reset();

  postDate = dateTimestamp();
  dts.innerText = `Date: ${postDate}`;
});

// load stuff
window.addEventListener("load", () => {
  showSearch(loadData());
});