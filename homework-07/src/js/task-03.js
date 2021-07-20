const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('#gallery'); //ссылка на елемент с айди "gallery"

const gallery = (acc, { url, alt }) => acc + `<li class='gallery__item'><img class='img' src = ${url} alt = ${alt} width = "640"></li>`;
//калбек функцыя которая генерирует стрроку , и переносит значение елементов из images
const photo = images.reduce(gallery, '');//переменая хранит полученую строку от  калбек функцыи

list.insertAdjacentHTML('beforeend', photo);
//добавляем с помощью шаблонной строки сгенерированую строку в переменной photo (тег li внутри которого тег img ),
//во внутерь списка с айди "gallery"


console.log(list); //  выводим результат на екран для проверки
list.setAttribute("style", "list-style:none; display: flex; flex-wrap: wrap; justify-content: center;");// на елемент с айди "gallery" (у нас ето <ul>) добавляем минимальніе стили


const img = document.querySelector('.img');//ссылка на елемент с класом "img"
img.setAttribute("style", "display: block; margin-bottom: 10px;");// на елемент с класом "img" (у нас ето уже созданый <img>) добавляем минимальніе стили
