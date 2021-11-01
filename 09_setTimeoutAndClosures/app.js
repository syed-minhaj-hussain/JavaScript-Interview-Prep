// SetTimeout + closures

function x() {
  const a = 10;
  var b = 20;
  return function () {
    console.log(a, b);
  };
}
// x()();

function a() {
  const x = 10;
  setTimeout(() => console.log(x), 2000);
}

// a();

function b() {
  for (let i = 0; i <= 5; i++) {
    setTimeout(() => console.log(i), i * 1000);
  }
  console.log("HI");
}
// b();

function c() {
  for (var i = 0; i <= 5; i++) {
    function close(x) {
      setTimeout(() => console.log(x), x * 1000);
    }
    close(i);
  }
  console.log(close);
}
c();
{
  // Overall Scope
  let i = 0;

  {
    // Scope 0
    let i = 0;
    if (i <= 5) {
      setTimeout(() => console.log(i), i * 1000);
    }
    // i++;
  }
  {
    // Scope 1
    let i = 0;
    i++;
    if (i <= 5) {
      setTimeout(() => console.log(i), i * 1000);
    }
  } //......
}
