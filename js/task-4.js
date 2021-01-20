const counterRef = document.querySelector('#counter');
const valueRef = counterRef.querySelector('#value');

let counterValue = 0;
const increment = function () {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const decrement = function () {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

counterRef.firstElementChild.addEventListener('click', decrement);
counterRef.lastElementChild.addEventListener('click', increment);
//btnIncr.addEventListener('click', increment);
