const list = document.querySelector('#categories'); //ссылка на елемент с айди "categories"
console.log('Количество категорий: ', list.children.length);// подсчитываем длину получившегося масива (количество елементов внутри списка )из вложеных елементов, и выводим результат на екран для проверки 
console.log(' ');

const category = document.querySelectorAll('.item');//ссылка на елемент с класом "item"
console.log('Категория: ',category[0].firstElementChild.textContent); // присваеваем текстовое значение первого вложеного елемента, и выводим результат на екран для проверки 
console.log('Количество элементов: ', category[0].lastElementChild.children.length);
// подсчитываем длину получившегося масива (количество елементов внутри списка )из вложеных елементов , 
//внутри последнего ребёнка елемента с класом "item", и выводим результат на екран для проверки

console.log('Категория: ',category[1].firstElementChild.textContent); // присваеваем текстовое значение первого вложеного елемента, и выводим результат на екран для проверки 
console.log('Количество элементов: ', category[1].lastElementChild.children.length);
// подсчитываем длину получившегося масива (количество елементов внутри списка )из вложеных елементов , 
//внутри последнего ребёнка елемента с класом "item", и выводим результат на екран для проверки

console.log('Категория: ',category[2].firstElementChild.textContent); // присваеваем текстовое значение первого вложеного елемента, и выводим результат на екран для проверки 
console.log('Количество элементов: ', category[2].lastElementChild.children.length);
// подсчитываем длину получившегося масива (количество елементов внутри списка )из вложеных елементов , 
//внутри последнего ребёнка елемента с класом "item", и выводим результат на екран для проверки