const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients'); //ссылка на елемент с айди "ingredients"

const products = ingredients.map(elem => { //создаем масив 
  const item = document.createElement('li'); // создаем елемент (тег) <li></li>
  console.log(item); //  выводим результат на екран для проверки
  item.textContent = elem; // каждой li присваеваем значение которое содержиться в переменной 
  return item;
});

list.append(...products); //  и теперь добавляем масив елементов в DOM (в разметку HTML), во внутерь елемент с айди "ingredients"