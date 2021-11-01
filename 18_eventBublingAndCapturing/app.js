const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
// const text = document.getElementById("text");

grandParent.addEventListener(
  "click",
  (e) => {
    console.log("grandParent Clicked");
    // e.stopPropagation();
  }
  //   true
);
parent.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Parent Clicked");
  },
  true
);
child.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("Child Clicked");
  }
  //   true
);
// text.addEventListener(
//   "change",
//   (e) => {
//     // e.stopPropagation();
//     console.log("Text Changed");
//   }
//   //   true
// );
