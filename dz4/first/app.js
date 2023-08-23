function incrementCounter(button) {
  const counterElement = button.previousElementSibling;
  const counterValue = parseInt(counterElement.value);
  counterElement.value = counterValue + 1;
}

function decrementCounter(button) {
  const counterElement = button.previousElementSibling.previousElementSibling;
  const counterValue = parseInt(counterElement.value);
  if (counterValue > 0) {
    counterElement.value = counterValue - 1;
  }
}
