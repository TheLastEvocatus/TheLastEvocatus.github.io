var cursor = document.getElementById("cursor");
var body = document.getElementById("body");

body.onmousemove = function (e) {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
  if (e.target.dataset.mouse == "hoverable") {
    cursor.className = "cursor hover";
  }
  if (e.target.dataset.mouse == "none") {
    cursor.className = "cursor";
  }
};

body.onclick = function (e) {
  cursor.style["animation-name"] = "click";
  cursor.style["animation-duration"] = "0.25s";
  setTimeout(retime, 250);
};
function retime() {
  cursor.style["animation-name"] = "";
  cursor.style["animation-duration"] = "";
}