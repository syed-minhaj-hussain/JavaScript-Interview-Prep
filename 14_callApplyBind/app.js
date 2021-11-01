/* 
=> We use call, appply & bind method to set the context of the function while executing it, regardless where it is being declared.
=> Since "typeof Function is an Object", therefore we are able to access these methods
*/

const person = {
  name: "Minhaj",
  age: 20,
};
const person2 = {
  name: "Hussain",
  age: 20,
};
function getUserDetails(arg1, arg2) {
  console.log(`${this.name} & ${this.age} ${arg1} ${arg2}`);
}
getUserDetails.call(person, "ABc", "DD");
getUserDetails.call(person2, "ABc", "DD");

getUserDetails.apply(person, ["ABc", "DD"]);

const a = getUserDetails.bind(person, "CDE", "FG");
a();
