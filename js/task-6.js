const inputRef = document.querySelector('input');
function handleChangeColor(evant) {
  //console.log('Hello');
  if (evant.target.value.length === Number(inputRef.dataset.length)) {
    console.log('Hello');
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
    //inputRef.style.borderColor = '#4caf50';
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    //inputRef.style.borderColor = '#f44336';
  }
}
//console.log(inputRef.dataset.length);
inputRef.addEventListener('blur', handleChangeColor);

//const inputRef = document.querySelector('input');
////console.log(inputRef.dataset.length);
//const dataLength = document.querySelector('[data-length="6"]');
//console.log(typeof dataLength.dataset.length);
//const len = Number(dataLength.dataset.length);
//
//function checkValid(event) {
//  if (event.target.value.length === len) {
//    inputRef.classList.add('valid');
//    inputRef.classList.remove('invalid');
//  } else {
//    inputRef.classList.add('invalid');
//    inputRef.classList.remove('valid');
//  }
//}
//
//inputRef.addEventListener('blur', checkValid);
