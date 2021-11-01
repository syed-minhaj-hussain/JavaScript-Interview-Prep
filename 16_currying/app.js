/* 
We Can Achieve Currying in 2 Ways.
1) Using Bind Method.
2) Closures
=> There is also one "Complex / Advanced" Method for achieving currying.
 */

// Using Bind Metohd

const sum = function (a, b) {
  console.log(this);
  return a + b;
};

const result = sum.bind(this, 2); // "this-context" could be anything
// console.log(result(24));

// Using Closures
const calculateSum = function (a) {
  return function (b) {
    return a + b;
  };
};

// console.log(calculateSum(2)(2));

// "Complex / Advanced" Method

const total = function (func) {
  return function curried(...args) {
    if (args.length == func.length) {
      console.log(args);
      return func.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
};

const sumFunc = (a, b, c) => a + b + c;
const getTotal = total(sumFunc);
// console.log(getTotal(1)(2)(3));

// Sum(1)(2)(3)........

const getSumUsingRecursion = function a(x) {
  return function (y) {
    if (y) {
      return getSumUsingRecursion(x + y);
    }
    return x;
  };
};
console.log(getSumUsingRecursion(1)(2)());
