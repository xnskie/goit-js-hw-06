let counterValue = 0;
const button = {
    up: document.querySelector("[data-action='increment']"),
    down: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};
const increment = () => {
    counterValue += 1;
    button.span.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    button.span.textContent = counterValue;
};
button.up.addEventListener("click", increment);
button.down.addEventListener("click", decrement);
