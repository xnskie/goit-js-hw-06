let ctrl = document.getElementById("font-size-control");

let text = document.getElementById("text");

ctrl.oninput = function () {
    text.style.fontSize = ctrl.value + "px";
};