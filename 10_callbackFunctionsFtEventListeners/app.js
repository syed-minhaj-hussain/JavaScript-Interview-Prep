// Callback Functions Gives us access to the whole ASYNC World in a Synchronous Single Threaded Language
// Due to callbacks we can do ASYNC things inside JS.

// setTimeout(function () {
//   console.log("ONE");
// }, 10000);
// setTimeout(() => {
//   console.log("ONE");
// }, 10000);

function x(y) {
  let a = 10;
  console.log("TWO");
  y(a);
}
// x((a) => console.log("THREE", a));

// Event Listeners
function a() {
  var a = 0;
  document.getElementById("clickMe").addEventListener("click", function () {
    console.log("clicked", ++a);
  });
  document.getElementById("clickMe2").addEventListener("click", function () {
    console.log("clicked", --a);
  });
}
a();

setInterval(() => {
  console.log("Interval");
}, 1000);

console.log("a");
console.log("b");
console.log("c");
console.log("d");
console.log("e");
console.log("f");
console.log("g");
console.log("h");
console.log("i");
console.log("j");
