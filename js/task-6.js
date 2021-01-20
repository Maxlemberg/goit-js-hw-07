const inputRef = document.querySelector('input');
function handleChangeColor(evant) {
  //console.log(evant.target.value.length);
  if (evant.target.value.length === 6) {
    console.log('Hello');
    inputRef.insertAdjacentElement;
    inputRef.setAttribute('id', 'validation-input.valid');
    inputRef.style.borderColor = '#4caf50';
  } else {
    inputRef.setAttribute('id', 'validation-input.invalid');
    inputRef.style.borderColor = '#f44336';
  }
}
//console.log(inputRef.dataset.length);
inputRef.addEventListener('change', handleChangeColor);
