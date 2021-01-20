import ingredients from './ingredients.js';

const ingredientsRef = document.querySelector('#ingredients');
const creatEle = function (tag, text) {
  const liRef = document.createElement(tag);
  liRef.textContent = text;
  return liRef;
};

const liArr = ingredients.map(item => creatEle('li', item));
ingredientsRef.append(...liArr);
