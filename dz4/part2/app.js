const xhr = new XMLHttpRequest();

xhr.open("GET", "jisoo.json", false);
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

if (xhr.status === 200) {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
}
