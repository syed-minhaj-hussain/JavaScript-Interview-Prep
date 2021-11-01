// Polyfill for Bind

const person = {
  name: "Minhaj",
  age: 20,
};

const printPerson = function (country, state) {
  console.log(`${this.name} & ${this.age} ${country} ${state} `);
};
// printPerson.call(person, "India");
const printPerson2 = printPerson.bind(person, "India");
printPerson2("Telangana");

// Polyfill for Bind
Function.prototype.myBind = function (...args) {
  const thisObj = this;
  const argOne = args[0];
  const params = args.slice(1);
  return function (...args2) {
    thisObj.apply(argOne, [...params, ...args2]);
  };
};

const polyfillForBind = printPerson.myBind(person, "India", "Telangana");
polyfillForBind();
