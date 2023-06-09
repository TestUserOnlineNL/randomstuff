const dummytext =
  "scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text item 1 scroll dummy text ";
console.clear();
//
/*
  Sortable Lists
*/
// items
const items = document.querySelectorAll(".item");
let draggableItem = null;

function deleteButton() {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("deleteButton");
  buttonDiv.innerText = "+";

  buttonDiv.addEventListener("click", () => {
    if (buttonDiv.parentNode) {
      buttonDiv.parentNode.remove(buttonDiv);
    }
  });
  return buttonDiv;
}

items.forEach((item) => {
  if (!item.classList.contains("addNewItemBtn")) {
    item.appendChild(deleteButton());
  }
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableItem = this;
  setTimeout(() => {
    this.classList.add("dragging");
  }, 0);
}

function dragEnd() {
  draggableItem = null;
  setTimeout(() => {
    this.classList.remove("dragging");
  }, 0);
}

// list
const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("dragover", dragOver);
  list.addEventListener("drop", dragDrop);

  function dragOver(e) {
    e.preventDefault();
    list.style.border = "2px solid red";
  }
  function dragEnter() {
    /* */
  }
  function dragLeave() {
    list.style.border = "1px solid black";
  }
  function dragDrop(e) {
    e.preventDefault();
    let siblings = [
      ...list.querySelectorAll(".item:not(.dragging,.addNewItemBtn)")
    ];

    let nextSibling = siblings.find((sibling) => {
      return e.pageY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    list.insertBefore(draggableItem, nextSibling);
    list.style.border = "1px solid black";
  }
});
// new item dialog
const addNewItem = document.querySelector(".addNewItemBtn");
addNewItem.addEventListener("click", () => {
  const showNewItemDialog = document.querySelector(".dialog");
  showNewItemDialog.showModal();

  const itemContent = document.querySelector(".articleText");

  const saveButton = document.querySelector("#save");
  saveButton.addEventListener("click", () => {
    if (itemContent.innerText.trim().length > 0) {
      const listZero = document.querySelectorAll("ul")[0];
      const result = createNewItem(itemContent.innerText);
      listZero.appendChild(result);
    }
    showNewItemDialog.close();
    itemContent.innerText = null;
  });

  const cancelButton = document.querySelector("#cancel");
  cancelButton.addEventListener("click", () => {
    showNewItemDialog.close();
    itemContent.innerText = null;
  });
});

function createNewItem(itemText) {
  const newEl = document.createElement("li");
  const articleText = document.createElement("article");

  articleText.innerText = itemText.trim();
  articleText.setAttribute("class", "articleText");

  newEl.setAttribute("class", "item");
  newEl.setAttribute("draggable", "true");
  newEl.addEventListener("dragstart", dragStart);
  newEl.addEventListener("dragend", dragEnd);
  newEl.appendChild(articleText);
  newEl.appendChild(deleteButton());
  return newEl;
}
//
//=== kladblok ===
//
// https://stackoverflow.com/questions/44415228/list-sorting-with-html5-dragndrop-drop-above-or-below-depending-on-mouse
//
getArticles = [...document.querySelectorAll(".articleText")];
getArticles.forEach((article) => {
  if (!article.hasAttribute("contenteditable")) {
    console.log(article);
  }
});
getLists = [...document.querySelectorAll(".list")];
getLists.forEach((list) => {
  console.log(getLists.indexOf(list));
});