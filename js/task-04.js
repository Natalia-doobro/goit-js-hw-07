let counterValue = 0; // переменнфя в которой хранится текущее значение счетчика

const span = document.querySelector('#value'); // переменная которая посылается на спан (лечильник)
const decrementBtn = document.querySelector('button[data-action="decrement"]'); // переменная посылается на кнопку уменьшить на 1
const incrementBtn = document.querySelector('button[data-action="increment"]');// переменная посылается на кнопку увеличить на 1

// Функция увеличивает счетчик на один 
function increment() {
    counterValue += 1; //увеличивает переменую счетчика на один
    span.textContent = counterValue; // переменной передается (меняется) значение которое находится в counterValue
    console.log(span.textContent);
};

// Функция уменьшает счетчик на один 
function decrement() {
    counterValue -= 1;//уменьшает переменую счетчика на один
    span.textContent = counterValue; // переменной передается (меняется) значение которое находится в counterValue
    console.log(span.textContent);
};

// методы которые реагируют на клик по кнопке и вызывают соответственую функцию для изменения счетчика
incrementBtn.addEventListener('click', increment); 
decrementBtn.addEventListener('click', decrement);

