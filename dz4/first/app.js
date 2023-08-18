function reverseWord(str) {
  var splitArray = str.split("");
  var reverseArray = splitArray.reverse();
  var reverseString = reverseArray.join("");
  return reverseString;
}
var word = "Kamila";
var reverseString = reverseWord(word);
console.log(reverseString);
