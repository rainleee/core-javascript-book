//클로저의 메모리 관리
var outer = function () {
  var a = 1;
  var inner = function () {
    return ++a;
  };
  return inner;
};

console.log(outer());
console.log(outer());

outer = null; //outer 식별자의 inner 함수 참조를 끊음

console.log(outer); // null

// ---------------------------------------------

// setInterval/setTimeout
(function () {
  var a = 0;
  var intervalId = null;
  var inner = function () {
    if (++a >= 10) {
      clearInterval(intervalId);
      inner = null; //inner 식별자의 함수 참조를 끊음
    }
    console.log(a);
  };
  intervalId = setInterval(inner, 1000);
})();
