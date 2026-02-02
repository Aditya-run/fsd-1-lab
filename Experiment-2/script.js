const text = document.getElementById("txt");
const counter = document.getElementById("counter");

text.addEventListener("input", function () {
  counter.textContent = text.value.length;
});
