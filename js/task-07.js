const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", handleInput);

function handleInput(event) {
  span.style.fontSize = `${event.currentTarget.value}px`;
}
