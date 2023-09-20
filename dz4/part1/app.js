const people = [
  {
    name: "Jisoo",
    birthday: "January 03, 1995",
    zodiac: "Capricorn",
    album: "ME",
    group: "BLACKPINK",
    image: "images/jisooforelle.webp",
  },
  {
    name: "Taehyng",
    birthday: "December 30, 1995",
    zodiac: "Capricorn",
    album: "LayoVer",
    group: "BTS",
    image: "images/taehyungcartier.webp",
  },
  {
    name: "BIBI",
    birthday: "September 27, 1998",
    zodiac: "Libra",
    album: "Lowlife Princess: Noir",
    group: "solo artist",
    image: "images/bibiven.jpg",
  },
  {
    name: "Yeonjun",
    birthday: "September 13, 1999",
    zodiac: "Virgo",
    album: "The chaos",
    group: "Tomorrow X Together",
    image: "images/yeonjuniiiiejpeg.jpeg",
  },
  {
    name: "Nayeon",
    birthday: "September 22, 1995",
    zodiac: "Virgo",
    album: "Im Nayeon",
    group: "Twice",
    image: "images/Nayeon_Ready_To_Be_Profile.webp",
  },
  {
    name: "Baekhyun",
    birthday: "May 6, 1992",
    zodiac: "Taurus",
    album: "Bambi",
    group: "EXO",
    image: "images/baek.jpeg",
  },
];

const wrapper = document.querySelector(".wrapper");

people.forEach((person) => {
  const personCard = document.createElement("div");
  personCard.setAttribute("class", "person-card");
  personCard.innerHTML = `
  <img src="${person.image}" alt="">
    <h3>Name: ${person.name}</h3>
    <span>Birthday: ${person.birthday}</span>
    <span>Zodiac: ${person.zodiac}</span>
    <span>Album: ${person.album}</span>
    <span>Group: ${person.group}</span>
  `;

  wrapper.append(personCard);

  personCard.addEventListener("click", () => {
    const request = new XMLHttpRequest();
    request.open("GET", person.image);
    request.setRequestHeader("Content-type", "application/json");
    request.send();

    request.addEventListener("load", () => {
      if (request.status === 200) {
        const imageUrl = JSON.parse(request.responseText).image;
        const image = new Image();
        image.src = imageUrl;
        personCard.appendChild(image);
      } else {
        console.error("Failed to load image");
      }
    });
  });
});
