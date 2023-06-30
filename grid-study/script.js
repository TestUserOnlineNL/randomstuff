console.clear();
//
/* beyblades array */
const inStock = [
    {
        id: 0,
        name: "Beyblade Quad Drive",
        description: "Start Pack: Cyclone Roktavor",
        price: 17.99,
        stock: 8
    },
    {
        id: 1,
        name: "Beyblade Quad Drive",
        description: "Start Pack: Destruction Belfyre",
        price: 17.99,
        stock: 13
    },
    {
        id: 2,
        name: "Beyblade Quad Drive",
        description: "Cyclone Fury String Launcher",
        price: 30.99,
        stock: 5
    },
    {
        id: 3,
        name: "Beyblade Quad Drive",
        description: "Duo Pack: Wrath Fafnir & Berserk Lynwirm",
        price: 28.99,
        stock: 1
    },
    {
        id: 4,
        name: "Beyblade Quad Drive",
        description: "Duo Pack: Ifritor & Stone Nemesis Destruction",
        price: 28.99,
        stock: 5
    },
    {
        id: 5,
        name: "Beyblade Quad Drive",
        description: "Duo Pack: Magma Roktavor & Gilded Balderov",
        price: 28.99,
        stock: 9
    },
    {
        id: 6,
        name: "Beyblade Burst Siege",
        description: "Speedtorm World Spryzen",
        price: 21.39,
        stock: 12
    },
    {
        id: 7,
        name: "Beyblade Burst Siege",
        description: "Speedstorm",
        price: 25.99,
        stock: 12
    },
    {
        id: 8,
        name: "Beyblade Burst Siege",
        description: "Speedstorm Spark Power Set",
        price: 38.95,
        stock: 3
    }
];
/* in shopping cart array */
const inShoppingCart = [
    {
        id: 0,
        name: "Beyblade Quad Drive",
        description: "Start Pack: Cyclone Roktavor",
        price: 17.99,
        stock: 8
    },
    {
        id: 1,
        name: "Beyblade Quad Drive",
        description: "Start Pack: Destruction Belfyre",
        price: 17.99,
        stock: 13
    },
    {
        id: 2,
        name: "Beyblade Quad Drive",
        description: "Cyclone Fury String Launcher",
        price: 30.99,
        stock: 5
    },
    {
        id: 3,
        name: "Beyblade Quad Drive",
        description: "Duo Pack: Wrath Fafnir & Berserk Lynwirm",
        price: 28.99,
        stock: 1
    }
];
//
function createGrid(stock, cart) {
    const mainGrid = document.createElement("section");
    mainGrid.classList.add("container");
    mainGrid.setAttribute("id", "container");
    // left column
    for (let cl = 0; cl < stock.length; cl++) {
        const cardLeft = document.createElement("div");
        cardLeft.classList.add("leftCard");
        cardLeft.style.gridColumn = 1;
        cardLeft.style.gridRow = "span 2";
        cardLeft.innerText = stock[cl].description;
        mainGrid.appendChild(cardLeft);
    }
    // right column
    for (let cr = 0; cr < cart.length; cr++) {
        const cardRight = document.createElement("div");
        cardRight.classList.add("rightCard");
        cardRight.style.gridColumn = 2;
        cardRight.style.gridRow = cr;
        cardRight.innerText = cart[cr].description;
        mainGrid.appendChild(cardRight);
    }
    return mainGrid;
}
window.document.body.appendChild(createGrid(inStock, inShoppingCart));