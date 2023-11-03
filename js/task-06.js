const input = document.querySelector("#validation-input");

input.addEventListener("blur", handleInpute);

function handleInpute(event) {
  if (
    event.currentTarget.value.trim().length === Number(input.dataset.length)
  ) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
