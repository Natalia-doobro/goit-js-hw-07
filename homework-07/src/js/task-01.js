const list = document.querySelector('#categories');
console.log('Количество категорий: ', list.children.length);
console.log(' ');

const category = document.querySelectorAll('.item');
console.log('Категория: ',category[0].firstElementChild.textContent);
console.log('Количество элементов: ',category[0].lastElementChild.children.length);

console.log('Категория: ',category[1].firstElementChild.textContent);
console.log('Количество элементов: ', category[1].lastElementChild.children.length);

console.log('Категория: ',category[2].firstElementChild.textContent);
console.log('Количество элементов: ',category[2].lastElementChild.children.length);