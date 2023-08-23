document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.querySelector(".counter");
  const incrementBtn = document.querySelector(".incrementBtn");
  const decrementBtn = document.querySelector(".decrementBtn");

  incrementBtn.onclick = function () {
    const counterValue = parseInt(counterElement.value);
    counterElement.value = counterValue + 1;
  };

  decrementBtn.onclick = function () {
    const counterValue = parseInt(counterElement.value);
    counterElement.value = counterValue - 1;
  };
});
