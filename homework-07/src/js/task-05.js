const input = document.querySelector('#name-input'); // переменная которая посылается на импут в которое мы впишем имя 
const span = document.querySelector('#name-output'); // переменная которая посылается на спан (имя)

function handleinput() {
    span.textContent = input.value; // передаем на спан то значение которое мы вводим в импут
};

// метод который реагирует когда ми навели фокус на импут и вызывает соответственую функцию для изменения спана (имени)
input.addEventListener('input', handleinput); 