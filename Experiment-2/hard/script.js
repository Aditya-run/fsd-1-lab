let canvas_area;
const canvas = document.getElementById("canvas");

let isDrawing = false;

canvas.addEventListener("mousedown", function () {
  isDrawing = true;

  canvas_area = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "polyline",
  );

  canvas.appendChild(canvas_area);
});
canvas.addEventListener("mouseup", function () {
  isDrawing = false;
  canvas_area = null;
});
canvas.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    let points = canvas_area.getAttribute("points") ?? "";
    points += event.clientX + "," + (event.clientY - 80) + " ";
    canvas_area.setAttribute("points", points);
  }
});

document.getElementById("clear").addEventListener("click", function () {
  canvas.innerHTML = "";
});
