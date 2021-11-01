function a() {
  console.log(x);
  var b = 15;
  function c() {
    var y = 22;
    // console.log(b);
    function d() {
      console.log(y);
    }
    d();
  }
  c();
}
var x = 10;
a();
