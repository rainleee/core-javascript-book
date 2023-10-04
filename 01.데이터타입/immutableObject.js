/**
 * 불변객체
 */
var user = {
  name: "minwoo",
  gender: "male",
};

var changeName = function (user, newName) {
  var newUser = user;
  newUser.name = newName;
  return newUser;
};

var user2 = changeName(user, "Lee");

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log("불변성 테스트 return newUser");
console.log(user.name, user2.name); // Lee Lee
console.log(user === user2); //true

//-------------------------------------

changeName = function (user, newName) {
  return {
    name: newName,
    gender: user.gender,
  };
};

var user3 = changeName(user, "Lee2");

if (user !== user3) {
  console.log("유저 정보가 변경되었습니다.");
}
console.log("불변성 테스트 return {} ");
console.log(user.name, user3.name); // Lee Lee2
console.log(user === user3); //false
