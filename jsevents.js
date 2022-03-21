// alert("Hello");

function btnClicked() {
  console.log("button CLicked");
  var div = document.getElementById("announcement");
  if (div.classList.contains("blue")) {
    div.classList.remove("blue");
    div.classList.add("yellow");
  } else {
    div.classList.remove("yellow");
    div.classList.add("blue");
  }
}

function doBindings() {
  var btn = document.getElementById("myBtn");
  console.log(btn);
  btn.onclick = btnClicked;
}
console.log("ABount to call Set time out");
// setTimeout(doBindings, 2000);
window.onload = doBindings;
console.log("Time Out Called");
