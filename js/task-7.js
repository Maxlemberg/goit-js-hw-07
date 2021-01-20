const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

function handlerTextSize(event) {
  textRef.style.fontSize = `${event.target.value}px`;
}

inputRef.addEventListener('input', handlerTextSize);
