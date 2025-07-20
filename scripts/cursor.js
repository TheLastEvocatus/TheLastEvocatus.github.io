var cursor = document.getElementById("cursor");
var body = document.getElementById("body");

body.onmousemove = function (e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  if (e.target.dataset.mouse == "hoverable") {
    cursor.className = "cursor hover";
  }
  if (e.target.dataset.mouse == "none") {
    cursor.className = "cursor hover-out";
  }
};