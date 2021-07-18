const inputRef = document.querySelector('#validation-input'); // переменная которая посылается на импут в которое мы впишем имя 
const characters = +inputRef.dataset.length; // переменная которая посылается на количество допустимых символов в импут  
console.log('необходимое количество символов:',characters);//  выводим результат на екран для проверки

function handleLengthElem(name) {
    const enteredValue = name.currentTarget.value.length;
    console.log('введено:',enteredValue,'символов');//  выводим результат на екран для проверки

    if (enteredValue === characters) { // проверка на каличество символов 
        inputRef.classList.add('valid');//добавляем на импут клас 'valid'
        inputRef.classList.remove('invalid');//удаляем на импут клас 'invalid'
    } else 
    {
        inputRef.classList.add('invalid');//добавляем на импут клас 'invalid'
        inputRef.classList.remove('valid');//удаляем на импут клас 'valid'
    }
};
// метод который реагирует когда ми навели фокус на импут и вызывает соответственую функцию для добавления класа
inputRef.addEventListener('change', handleLengthElem); 