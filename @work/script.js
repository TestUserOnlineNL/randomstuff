console.clear();
/*
  Sortable Lists
*/
// items
const items = document.querySelectorAll(".item");
let draggableItem = null;

items.forEach((item) => {
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
  }

  function dragLeave() {
    list.style.border = "1px solid black";
  }

  function dragDrop(e) {
    e.preventDefault();
    let siblings = [...list.querySelectorAll(".item:not(.dragging)")];

    let nextSibling = siblings.find((sibling) => {
      return e.pageY <= sibling.offsetTop + sibling.offsetHeight / 2;
    });

    list.insertBefore(draggableItem, nextSibling);
    list.style.border = "1px solid black";
  }

  function dragEnter() {
    list.style.border = "2px solid red";
  }
});
//
//=== kladblok ===
//
// https://stackoverflow.com/questions/44415228/list-sorting-with-html5-dragndrop-drop-above-or-below-depending-on-mouse
//