const inputRef = document.querySelector('#name-input');

function consoleName(event) {
  if (event.target.value === '') {
    inputRef.nextElementSibling.firstElementChild.textContent = 'незнакомец';
  } else {
    inputRef.nextElementSibling.firstElementChild.textContent =
      event.target.value;
  }
}
inputRef.addEventListener('input', consoleName);
