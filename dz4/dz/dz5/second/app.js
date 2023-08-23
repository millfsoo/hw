const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const multiplicationButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const calculateButton = document.getElementById("calculate");
const resultDisplay = document.getElementById("total");

plusButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultDisplay.textContent = `Результат: ${result}`;
});

minusButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 - num2;
  resultDisplay.textContent = `Результат: ${result}`;
});

multiplicationButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 * num2;
  resultDisplay.textContent = `Результат: ${result}`;
});

divisionButton.addEventListener("click", () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 / num2;
  resultDisplay.textContent = `Результат: ${result}`;
});
