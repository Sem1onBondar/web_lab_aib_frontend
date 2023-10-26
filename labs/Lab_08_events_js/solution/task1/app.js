const btnRed = document.getElementById('btnRed');
const btnGreen = document.getElementById('btnGreen');
const btnBlue = document.getElementById('btnBlue');

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Назначаем обработчики событий для каждой кнопки
btnRed.addEventListener('click', function() {
    changeBackgroundColor('red');
});

btnGreen.addEventListener('click', function() {
    changeBackgroundColor('green');
});

btnBlue.addEventListener('click', function() {
    changeBackgroundColor('blue');
});