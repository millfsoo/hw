var array = ["name", "John", "lastname", "Black", "age", "23"];
var totalObject = {};
for (var i = 0; i < array.length; i += 2) {
  var key = array[i];
  var value = array[i + 1];
  totalObject[key] = value;
}
console.log(totalObject);
