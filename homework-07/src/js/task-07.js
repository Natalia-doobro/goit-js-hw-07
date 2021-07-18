const inputRef = document.querySelector('#font-size-control'); // переменная которая посылается на импут  
const span = document.querySelector('#text'); // переменная которая посылается на спан (текст который мы меняем)

function handleFontSize() {
    span.setAttribute("style", `display: block; font-size: ${inputRef.value}px`)
    // добаляем на спан инлайновые стили font-size: который реагирует на изменение положения ползунка
};

// метод который реагирует когда ми навели фокус на импут (ползунок) и вызывает соответственую функцию для изменения размера шрифта спана (текста)
inputRef.addEventListener('input', handleFontSize); 