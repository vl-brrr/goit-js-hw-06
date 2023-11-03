let counterValue = 0;

const minusOne = document.querySelector('button[data-action="decrement"]');
const plusOne = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

minusOne.addEventListener("click", (event) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
plusOne.addEventListener("click", (event) => {
  counterValue += 1;
  value.textContent = counterValue;
});
