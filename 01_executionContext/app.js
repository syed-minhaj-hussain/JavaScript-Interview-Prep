console.log("Hello World!");

// How Javascript Works

// var num = 2;
// function square(num) {
//   var result = num * num;
//   console.log(result);
// }

// var square2 = square(num);
// var square4 = square(4);

// console.log(a);
// console.log(b);
// console.log(c);

// const a = 10;
let b = 20;
var c = 30;
// var b = 40;

// console.log(a);

// const flat = arr.reduce((acc, element) => {
//   if (typeof element === "number") {
//     // console.log(acc.push(element));
//     acc.push(element);
//   } else {
//     if (Array.isArray(element)) {
//       console.log(true);

//     }
//   }
//   return acc;
// }, []);

// console.log(flat);

const arr = [1, 2, 3, [4, 5], [6, 7, [8, 9]]]; // []
function x(arr) {
  const abc = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      abc.push(arr[i]);
    } else {
      if (Array.isArray(arr[i])) {
        console.log("else");
        return abc.concat(x(arr[i]));
        // return abc;
      }
    }
  }
}

console.log(x(arr));
