//  Global Space === Window object
console.log(this);
/*
If we use "use strict", then at the global space, this will be "undefined"
*/

/*
 This keyword points to the "callie" of the function. 
  function statement / declaration / expression === window object.
  Ex : a();
  => Here there is no "callie", therefore "this" keyword points to the "window object". 
  => In Case of "Arrow Functions" "this kweyword" "points to" "this" of it's "Parent's Scope"
*/
function a() {
  console.log(this);
}
// a(); // Window
let b = function () {
  console.log(this);
};
// b(); // Window
/*
 This keyword points to the "callie" of the function. 
 Ex : person.checkThis(), 
 => Here the "callie" is the "person" Object.
*/
let person = {
  checkThis: function () {
    console.log(this);
    let a = function () {
      console.log(this);
    };
    a();
    let arrowFunc = () => console.log(this);
    arrowFunc(); // this points to It's prents this
  },
};
// person.checkThis();

// Here the "callie" of the function is nothing, therefore this refers to "window object"
let c = person.checkThis;
c();

let arrow = () => () => console.log(this);
arrow();

/*
=> for setTimeout & Event-Listeners in-case of arrow function, this points to undefined.
=> for Event-Listener in-case of "Regular Functions", this points to the "Button / TAG" 
=> for setTimeout in case of "Regular Functions", this points to the "Window Object"
*/
