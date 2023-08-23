const buttons = document.querySelectorAll(".click");
const outputs = document.querySelectorAll(".text");
let previousText = "";

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const inputText = prompt("Введите текст:");
    if (inputText !== null) {
      previousText = inputText;
      outputs[index].textContent = previousText;
    }
  });
});
