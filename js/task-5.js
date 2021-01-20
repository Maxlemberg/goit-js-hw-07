const inputRef = document.querySelector('#name-input');

function consoleName() {
  if (inputRef.value === '') {
    inputRef.nextElementSibling.firstElementChild.textContent = 'незнакомец';
  } else {
    inputRef.nextElementSibling.firstElementChild.textContent = inputRef.value;
  }
}
inputRef.addEventListener('input', consoleName);
