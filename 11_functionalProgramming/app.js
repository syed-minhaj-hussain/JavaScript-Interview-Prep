//  Functional Programming
/* Higher Order Functions : A function Which takes another function as an argument is known as Higher Order Function.
=> The Function which is passed as an argument is known as Callback Function.
 */

const arr = [2, 5, 8, 6, 25];

// function calculateDiameter(arr) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(2 * arr[i]);
//   }
//   return output;
// }

// console.log(calculateDiameter(arr));

// function calculateArea(arr) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(Math.PI * (arr[i] * arr[i]));
//   }
//   return output;
// }
// console.log(calculateArea(arr));

// function calculateCircumference(arr) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(2 * Math.PI * arr[i]);
//   }
//   return output;
// }
// console.log(calculateCircumference(arr));

const area = function (item) {
  return 2 * Math.PI * item;
};

const diameter = function (item) {
  return 2 * item;
};

const circumference = function (item) {
  return Math.PI * item * item;
};

// function calculate(arr) {
//   const output = [];
//   for (let i = 0; i < arr.length; i++) {
//     output.push(circumference(arr[i]));
//   }
//   return output;
// }
// console.log(calculate(arr));

Array.prototype.calculate = function (measurement) {
  if (typeof measurement !== "function") {
    return TypeError(`Parameter "${measurement}" Is Not a Valid Function`);
  }
  const output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(measurement(this[i]));
  }
  return output;
};
console.log(arr.calculate(circumference));
