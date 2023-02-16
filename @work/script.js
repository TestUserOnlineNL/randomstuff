const log = console.log;
//
// function: saveData
const saveData = (key, store) => {
  const myStore = window.localStorage;
  myStore.setItem(key, JSON.stringify(store));
};
// function: readData
const readData = (key) => {
  const myStore = window.localStorage;
  const retrieved = myStore.getItem(key);
  return JSON.parse(retrieved);
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
// define objects
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
  salaryman: 1000,
  salarywoman: 2000
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
//display results
log(totals);