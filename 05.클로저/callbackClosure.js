const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var fruits = ["apple", "banana", "peach"];
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
var $ul = dom.window.document.createElement("ul");

fruits.forEach(function (fruit) {
  var $li = dom.window.document.createElement("li");
  $li.textContent = fruit;
  $li.addEventListener("click", function () {
    console.log("your choice is " + fruit);
  });
  $ul.appendChild($li);
});

console.log($ul.outerHTML);
