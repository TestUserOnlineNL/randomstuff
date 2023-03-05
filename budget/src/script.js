const log = console.log;
window.localStorage.clear();
//
// objects
const telOpFunc = {
  telOp: function () {
    return Object.values(JSON.parse(JSON.stringify(this))).reduce(
      (acc, getal) => acc + getal,
      0
    );
  }
};
//
const totals = {
  fixedIncomeTotal: 0,
  fixedCostTotal: 0,
  fixedBalance: 0,
  variableIncomeTotal: 0,
  variableCostTotal: 0,
  variableBalance: 0,
  balance: 0
};
//
const fixedIncome = {
  salaryman: 1000.0,
  salarywoman: 2000.0
};
//
const fixedCost = {
  rent: 500.25,
  water: 50.0,
  electricity: 100.0,
  taxes: 125.75,
  health_insurance: 150.0,
  car_insurance: 50.0
};
//
const variableIncome = {
  garage_sale: 525.25,
  birthday_money: 50.0,
  random_sales: 200.34
};
//
const variableCost = {
  food: 375.25,
  fuel: 250.0,
  clothes: 75.0,
  shoes: 125.0,
  donations: 10.0
};
// function: saveData
const saveData = (key, store) => {
  const myStore = window.localStorage;
  myStore.setItem(key, JSON.stringify(store));
};
// function: readData
const readData = (key) => {
  const myStore = window.localStorage;
  const retrieved = myStore.getItem(key);
  return Object.assign(JSON.parse(retrieved), telOpFunc);
};
// function: calculateTotal
const calculateTotal = (object) => {
  let values = Object.values(object);
  return values.reduce((total, amount) => total + amount, 0);
};
// function: calculateDifference
const calculateDifference = (totalOne, totalTwo) => {
  return parseFloat(((totalOne * 100 - totalTwo * 100) / 100).toFixed(2));
};
// function: calculateBalance
const calculateBalance = (totalOne, totalTwo) => {
  return parseFloat(((totalOne * 100 + totalTwo * 100) / 100).toFixed(2));
};
//
// totals
totals.fixedIncomeTotal = calculateTotal(fixedIncome);
totals.fixedCostTotal = calculateTotal(fixedCost);
totals.variableIncomeTotal = calculateTotal(variableIncome);
totals.variableCostTotal = calculateTotal(variableCost);
// balances
totals.fixedBalance = calculateDifference(
  totals.fixedIncomeTotal,
  totals.fixedCostTotal
);
totals.variableBalance = calculateDifference(
  totals.variableIncomeTotal,
  totals.variableCostTotal
);
totals.balance = calculateBalance(totals.variableBalance, totals.fixedBalance);
//
// store objects
saveData("fixedIncome", fixedIncome);
saveData("fixedCost", fixedCost);
saveData("variableIncome", variableIncome);
saveData("variableCost", variableCost);
saveData("totals", totals);
//
// function: createTable
const createTable = (object, name) => {
  //
  const tableSection = document.createElement("section");
  tableSection.setAttribute("class", "table");
  //
  const tableHeader = document.createElement("div");
  tableHeader.innerText = name;
  tableHeader.setAttribute("class", "tableHeader");
  tableSection.appendChild(tableHeader);
  //
  let count = 0;
  for (const k in object) {
    if (k != "telOp") {
      const row = document.createElement("div");
      count % 2
        ? row.setAttribute("class", "rowEven")
        : row.setAttribute("class", "rowOdd");
      //
      let field1 = document.createElement("div");
      field1.setAttribute("class", "nameField");
      field1.innerText = k;
      row.appendChild(field1);
      //
      let field2 = document.createElement("div");
      field2.setAttribute("class", "valueField");
      field2.innerText = Number.parseFloat(object[k]).toFixed(2);
      row.appendChild(field2);
      //
      tableSection.appendChild(row);
      count++;
    }
  }
  //
  const rowTotal = document.createElement("div");
  rowTotal.setAttribute("class", "rowTotal");
  //
  const textTotal = document.createElement("div");
  textTotal.setAttribute("class", "nameField");
  textTotal.innerText = "total";
  rowTotal.appendChild(textTotal);

  const numberTotal = document.createElement("div");
  numberTotal.setAttribute("class", "valueField");
  numberTotal.innerText = Number.parseFloat(object.telOp()).toFixed(2);
  rowTotal.appendChild(numberTotal);
  //
  tableSection.appendChild(rowTotal);

  return tableSection;
};
//
const main = document.querySelector(".main");
//
main.appendChild(createTable(readData("fixedIncome"), "fixed income"));
//
main.appendChild(createTable(readData("fixedCost"), "fixed Cost"));
//
main.appendChild(createTable(readData("variableIncome"), "variable income"));
//
main.appendChild(createTable(readData("variableCost"), "variable Cost"));
//
main.appendChild(createTable(readData("totals"), "totals"));
//
