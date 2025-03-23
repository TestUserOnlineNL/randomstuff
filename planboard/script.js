console.clear();
//
/*
  Sortable Lists
*/
window.addEventListener("DOMContentLoaded", (event) => {
  const dataStore = window.localStorage;
  const listOne = document.querySelector("#one");
  const listTwo = document.querySelector("#two");
  const listThree = document.querySelector("#three");

  try {
    const myData = JSON.parse(dataStore.getItem("items"));
    for (const waarde in myData) {
      let waardes = myData[waarde];
      for (let tekst = 0; tekst < waardes.length; tekst++) {
        let created = createNewItem(waardes[tekst]);
        if (waarde === "0") {
          listOne.appendChild(created);
        } else if (waarde === "1") {
          listTwo.appendChild(created);
        } else if (waarde === "2") {
          listThree.appendChild(created);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }

  // items
  const items = document.querySelectorAll(".item");
  let draggableItem = null;

  function deleteButton() {
    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("deleteButton");
    buttonDiv.textContent = "+";

    buttonDiv.addEventListener("click", () => {
      if (buttonDiv.parentNode) {
        buttonDiv.parentNode.remove(buttonDiv);
        saveToLocalStorage(getData());
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
    list.addEventListener("drop", dragDrop, false);

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
      saveToLocalStorage(getData());
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
      if (itemContent.textContent.trim().length > 0) {
        const listZero = document.querySelectorAll("ul")[0];
        const result = createNewItem(itemContent.textContent);
        listZero.appendChild(result);
      }
      showNewItemDialog.close();
      itemContent.textContent = null;
      saveToLocalStorage(getData());
    });

    const cancelButton = document.querySelector("#cancel");
    cancelButton.addEventListener("click", () => {
      showNewItemDialog.close();
      itemContent.textContent = null;
    });
  });

  function createNewItem(itemText) {
    const newEl = document.createElement("li");
    const articleText = document.createElement("article");

    articleText.textContent = itemText.trim();
    articleText.setAttribute("class", "articleText");
    articleText.setAttribute("contenteditable", "true");

    newEl.setAttribute("class", "item");
    newEl.setAttribute("draggable", "true");
    newEl.addEventListener("dragstart", dragStart);
    newEl.addEventListener("dragend", dragEnd);
    newEl.appendChild(articleText);
    newEl.appendChild(deleteButton());
    return newEl;
  }

  function getData() {
    const all_lists = document.querySelectorAll(".list");
    let idx = 0;
    let result = {};
    all_lists.forEach((li) => {
      idx = [...all_lists].indexOf(li);
      let data = [];
      const it = li.getElementsByClassName("articleText");
      for (let i = 0; i < it.length; i++) {
        data.push(it[i].textContent);
      }
      Object.assign(result, { [idx]: data });
    });
    return result;
  }

  function saveToLocalStorage(data) {
    const dataStore = window.localStorage;
    try {
      dataStore.setItem("items", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }
});