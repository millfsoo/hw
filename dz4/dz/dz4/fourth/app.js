var typeList = [
  null,
  123,
  undefined,
  null,
  "qwerty",
  34,
  65,
  undefined,
  null,
  null,
  43,
  "aerg",
  "пкцйк",
  null,
  "uioo",
];
var typeGroup = {};
for (var i = 0; i < typeList.length; i++) {
  var item = typeList[i];
  var itemType = typeof item;
  if (!typeGroup[itemType]) {
    typeGroup[itemType] = [];
  }
  typeGroup[itemType].push(item);
}
var array = Object.values(typeGroup);
array.sort(function (a, b) {
  return a.length - b.length;
});
console.log(array);
