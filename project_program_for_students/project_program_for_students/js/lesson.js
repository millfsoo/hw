//PHONE VALIDATOR

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /^\+996 [5792]\d{2} \d{2}-\d{2}-\d{2}$/;

phoneButton.onclick = () => {
  if (regExp.test(phoneInput.value)) {
    phoneResult.innerHTML = "OK";
    phoneResult.style.color = "green";
  } else {
    phoneResult.innerHTML = "NOT OK";
    phoneResult.style.color = "red";
  }
};

//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabItems = document.querySelectorAll(".tab_content_item");
const parentTabs = document.querySelector(".tab_content_items");

let currentTabIndex = 0;
const intervalTime = 3000;

const hideTabContent = () => {
  tabContentBlocks.forEach((tabContentBlock) => {
    tabContentBlock.style.display = "none";
  });
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove("tab_content_item_active");
  });
};

const showTabContent = (indexElement) => {
  tabContentBlocks[indexElement].style.display = "block";
  tabItems[indexElement].classList.add("tab_content_item_active");
};

const autoSlider = (i = 0) => {
  setInterval(() => {
    i++;
    if (i > tabItems.length - 1) {
      i = 0;
    }
    hideTabContent();
    showTabContent(i);
  }, intervalTime);
};

showTabContent(currentTabIndex);
autoSlider(currentTabIndex);

parentTabs.onclick = (event) => {
  if (event.target.classList.contains("tab_content_item")) {
    tabItems.forEach((tabItem, tabIndex) => {
      if (event.target === tabItem) {
        hideTabContent();
        showTabContent(tabIndex);
        currentTabIndex = tabIndex;
      }
    });
  }
};

//Converter

const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const won = document.querySelector("#won");

// som.addEventListener(`input`, () => {
//   const request = new XMLHttpRequest();
//   request.open("GET", "../data/converter.json");
//   request.setRequestHeader("Content-type", "application/json");
//   request.send();

//   request.addEventListener(`load`, () => {
//     const response = JSON.parse(request.response);
//     usd.value = (som.value / response.usd).toFixed(2);
//   });
// });

const converter = (element, target1, currency) => {
  element.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "../data/converter.json");
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.onload = () => {
      const response = JSON.parse(request.response);
      if (currency === "som") {
        target1.value = (element.value / response.usd).toFixed(2);
        won.value = (element.value / response.won).toFixed(2);
      } else if (currency === "usd") {
        target1.value = (element.value * response.usd).toFixed(2);
        won.value = ((element.value * response.usd) / response.won).toFixed(2);
      } else if (currency === "won") {
        target1.value = (element.value * response.won).toFixed(2);
        usd.value = (element.value / response.usd).toFixed(2);
      }
      element.value === "" && (target1.value = "");
    };
  };
};

converter(som, usd, "som");
converter(usd, som, "usd");
converter(won, som, "won");

//CARD SWITCHER

//CARD SWITCHER

const card = document.querySelector(".card");
const btnNext = document.querySelector("#btn-next");
const btnPrev = document.querySelector("#btn-prev");
let count = 1;

function fetchCard(cardNumber) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
    .then((response) => response.json())
    .then((data) => {
      card.innerHTML = `
      <p>${data.title}</p>
      <p style="color: ${data.completed ? "green" : "red"}">${
        data.completed
      }</p>
      <span>${data.id}</span>
      `;
    });
}

function handleButtonClick(isNext) {
  if (isNext) {
    count = count === 200 ? 1 : count + 1;
  } else {
    count = count === 1 ? 200 : count - 1;
  }
  fetchCard(count);
}
fetchCard(count);

btnNext.onclick = () => handleButtonClick(true);
btnPrev.onclick = () => handleButtonClick(false);
