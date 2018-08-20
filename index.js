// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "Greg";
var bestCustomer;

function upperCaseCustomerName() {
  customerName = "BOB";
};

function setBestCustomer() {
  bestCustomer = "not bob";


};
// overwriteBestCustomer(): See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
};

//below is correct
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Ryder";
};
