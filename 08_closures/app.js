// closures

function x() {
  const a = 10;
  const b = 50;
  return function y() {
    console.log(a);
  };
}
const z = x();
z();
