(function() {
  var x, y, _tmp$1;

  x = 1;

  y = 2;

  console.log("before: x is " + x + ", y is " + y);

  _tmp$1 = y;
  y = x;
  x = _tmp$1;

  console.log("after: x is " + x + ", y is " + y);

}).call(this);
