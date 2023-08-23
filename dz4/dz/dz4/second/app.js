function averageCalculator() {
  var sum = 0;
  var count = arguments.length;
  for (var i = 0; i < count; i++) {
    sum += arguments[i];
  }
  var average = sum / count;
  return average;
}
var total = averageCalculator(26, 11, 5, 19, 28, 4);
console.log(total);
