const [inputRef, buttonRender, buttonClear]= document.querySelector('#controls').children; //ссылка на елементы в нутри дива "controls"
console.log(inputRef);
console.log(buttonRender);
console.log(buttonClear);

const box = document.querySelector('#boxes');//ссылка на елемент дыва куда мы добавляем елемент

function createBoxesRender() { //функция которая возврвшает значение введеное в инпут и передает его функцие createBoxes для обработки
    const amount = +inputRef.value;
    createBoxes(amount);// обращаемся к функции 
};

function createBoxes(amount) { // функция добавляет дыви в галерею
    for (let i = 1; i <= amount; i += 1){ // пребераем до определёного значения
        const elem = document.createElement('div'); //создаем див
        elem.textContent = `${i}`
        box.append(elem);// добавляем его в галерею
    }
};

function destroyBoxesClear() {// функция олчишает галерею
    box.innerHTML = '';
};

// методы которые реагируют на клик по кнопке и вызывают соответственую функцию
buttonRender.addEventListener('click', createBoxesRender);
buttonClear.addEventListener('click', destroyBoxesClear);