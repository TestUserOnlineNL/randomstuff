/*
  Sortable Lists
*/
// items
const items = document.querySelectorAll(".item");
let draggableItem = null;

items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
});

function dragStart(e) {
    draggableItem = this;
    setTimeout(() => {
        draggableItem.classList.add("dragging");
        list.style.border = "1px solid red";
    }, 0);
}

function dragEnd(e) {
    setTimeout(() => {
        draggableItem.classList.remove("dragging");
        list.style.border = "1px solid black";
        draggableItem = null;
    }, 0);
}

// list
const lists = document.querySelectorAll(".list");

lists.forEach((list) => {

    list.addEventListener("dragleave", dragLeave);
    list.addEventListener("drop", dragDrop);
    list.addEventListener("dragenter", dragEnter);
    list.addEventListener("dragover", dragOver);

    function dragOver(e) {
        const draggingItem = document.querySelector(".dragging");

        // Getting all items except currently dragging and making an array of them
        let siblings = [...list.querySelectorAll(".item:not(.dragging)")];

        // Finding the sibling after which the dragging item should be placed
        let nextSibling = siblings.find(sibling => {
            return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });

        // Inserting the dragging item before the found sibling
        list.insertBefore(draggingItem, nextSibling);
    }

    function dragLeave() {
        list.style.border = "1px solid black";
    }

    function dragDrop() {
        this.style.border = "1px solid black";
        this.appendChild(draggableItem);
    }

    function dragEnter(e) {
        this.style.border = "1px solid red";
    }
});