const ulRef = document.querySelectorAll('.item');
console.log(`'В списке ${ulRef.length} категории.'`);
ulRef.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(
    `Количество элементов: ${item.querySelector('ul').childElementCount}`,
  );
});
