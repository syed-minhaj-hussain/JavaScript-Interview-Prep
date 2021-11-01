// Block
// var a = 200;
let c = 2000;
// console.log(a);
function x() {
  //   let a = 10;
  var a = 10;
  let b = 20;
  //   const c = 30;
  c = 1500;
  console.log(a);
  console.log(b);
  console.log(c);
  {
    let b = 500;
    console.log(b);
  }
  // for (let b = 0; b < 5; b++) {
  //   setTimeout(() => console.log(b), b * 1000);
  // }
}
x();
console.log(c);
