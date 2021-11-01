console.log("Hoisting In Functions & Variables");

console.log(number);
printNumber();

var number = 15;

var printNumber2 = function () {
  console.log(`number : ${number}`);
};
function printNumber() {
  console.log(`number : ${number}`);
}
