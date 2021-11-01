let count = 0;
const fetchData = () => {
  console.log("Fetching Data .....", ++count);
};

const debounceFunc = function (fn, d) {
  const context = this;
  let timerID;
  let count = 0;
  return function (...args) {
    if (timerID) {
      console.log({ timerID }, "clearing setTimeout");
      clearTimeout(timerID);
    }
    count++;
    console.log(count, timerID);
    timerID = setTimeout(() => {
      fn.apply(context, args);
      console.log({ timerID }, "Executing Callback");
    }, d);
  };
};
const countPoints = function () {
  let count = 0;
  return function () {
    count++;
    console.log(count);
    return count;
  };
};
const a = countPoints();
a();
a();
a();
console.log(a());
const b = countPoints();
b();

const betterFunc = debounceFunc(fetchData, 300);
