const redInput = document.getElementById('redInput');
const greenInput = document.getElementById('greenInput');
const blueInput = document.getElementById('blueInput');
const generateButton = document.getElementById('generateButton');
const colorArea = document.getElementById('colorArea');
const colorSquare = document.getElementById('colorSquare');
let savedColor = null;

generateButton.addEventListener('click', generateColorBlock);
colorArea.addEventListener('click', changeBackgroundColor);

function generateColorBlock() {
    const red = redInput.value || 0;
    const green = greenInput.value || 0;
    const blue = blueInput.value || 0;

    if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;

        colorSquare.style.backgroundColor = rgbColor; // Обновляем цвет квадрата

        const colorBlock = document.createElement('div');
        colorBlock.style.backgroundColor = rgbColor;
        colorBlock.className = 'color-block';
        colorBlock.style.border = '2px solid black'; // Добавляем черную окантовку

        colorArea.appendChild(colorBlock);

        // Ограничение на количество блоков
        const colorBlocks = colorArea.querySelectorAll('.color-block');
        if (colorBlocks.length > 15) {
            colorArea.removeChild(colorBlocks[0]);
        }

        savedColor = rgbColor; // Сохраняем выбранный цвет
    } else {
        alert('Неверное значение цвета');
    }
}


function changeBackgroundColor(event) {
    const target = event.target;

    if (target.classList.contains('color-block')) {
        // Если кликнули на блок с цветом
        if (target !== colorSquare) {
            document.body.style.backgroundColor = target.style.backgroundColor;
        }
    } else if (target !== colorSquare) {
        // Если кликнули не на главную палитру и не на квадрат
        document.body.style.backgroundColor = savedColor;
    }
}