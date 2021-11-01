// Map Function is used to transform an array

const arr = [5, 1, 100, 2, 69, 54];

const double = (number) => number * 2;
const triple = (number) => number * 3;
const binary = (number) => number.toString(2);

// console.log(arr.map(triple));

// Filter Function is used to filter the values based on some conditions
// filter odd values
const oddNumbers = (number) => number % 2;
const evenNumbers = (number) => number % 2 === 0;
const greaterThanFour = (number) => number > 4;

console.log(arr.filter(greaterThanFour));

// Reduce Function is used where we want to come up with an signle value from given array
// Accumulator Pattern
const findSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
const findMax = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
// console.log(findSum(arr));
// console.log(findMax(arr));

const sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum);

const getMax = arr.reduce((acc, num) => (num > acc ? (acc = num) : acc), 0);
// console.log(getMax);

// Exercises :
const users = [
  { firstName: "Syed", lastName: "Minhaj", age: 20 },
  { firstName: "John", lastName: "Cena", age: 60 },
  { firstName: "Elon", lastName: "Musk", age: 40 },
  { firstName: "Elon", lastName: "Musk", age: 40 },
  { firstName: "Laith", lastName: "Harb", age: 20 },
];
// {20 : 2, 60 : 1, .....}
const totalUsersByAgeGroup = users.reduce((acc, user) => {
  if (acc[user.age]) {
    ++acc[user.age];
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});
console.log(totalUsersByAgeGroup);

// get all user's firstName where age < 30
const usersWithAgeLessThanThirty = users
  .filter(({ age }) => age < 30)
  .map(({ firstName }) => firstName);
// console.log(usersWithAgeLessThanThirty);

const usersWithAgeLessThanThirtyUsingReduce = users.reduce(
  (acc, { age, firstName }) => {
    if (age < 30) {
      return [...acc, firstName];
    }
    return acc;
  },
  []
);
console.log(usersWithAgeLessThanThirtyUsingReduce);

const numList = [
  { type: "odd", payload: 1 },
  { type: "even", payload: 5 },
  { type: "even", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "even", payload: 2 },
  { type: "odd", payload: 1 },
];

const oddEvenSumReducer = numList.reduce(
  (acc, { type, payload }) => {
    if (type === "odd") {
      return { ...acc, odd: acc.odd + payload };
    }
    return { ...acc, even: acc.even + payload };
  },
  {
    odd: 0,
    even: 0,
  }
);
console.log(oddEvenSumReducer);

const numbers = [1, 2, 5, 7, 56, 56, 2, 7];
const removeDuplicate = numbers.reduce((acc, number) => {
  if (acc.includes(number)) {
    return acc;
  } else {
    // acc.push(number);
    return [...acc, number];
  }
  // return acc;
}, []);
console.log(removeDuplicate, "abc");

// Filter Polyfill
Array.prototype.myFilter = function (callback) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};
// console.log(arr.myFilter((num) => num >= 5));

// Reduce Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

console.log(arr.myReduce((a, num) => a + num, 0));

// forEach Polyfill
Array.prototype.myForEach = function (callbalck) {
  for (let i = 0; i < this.length; i++) {
    callbalck(this[i], i, this);
  }
};
// console.log(arr.myForEach((num, i, arr) => console.log(num, i, arr)));

// find polyfill
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};
// console.log(arr.myFind((num) => num > 5));
