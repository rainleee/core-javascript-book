var add = function () {
  var result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial());
/**[Arguments] {
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': 5,
*/

console.log(addPartial(6, 7, 8, 9, 10));
/**[Arguments] {
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': 5,
  '5': 6,
  '6': 7,
  '7': 8,
  '8': 9,
  '9': 10
}
*/
