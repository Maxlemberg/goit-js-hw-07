import images from './imageArr.js';
const ulRef = document.querySelector('#gallery');
ulRef.classList.add('listImg');
//const liRef = document.insertAdjacentHTML();
const imgArr = images.map(item => {
  const liRef = document.createElement('li');
  liRef.insertAdjacentHTML(
    'beforeend',
    `<img src=${item.url} alt=${item.alt} class ='img-class'>`,
  );
  return liRef;
});

ulRef.append(...imgArr);
