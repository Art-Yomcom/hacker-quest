/* script.js */
document.getElementById("main-title").addEventListener("click", function() {
    if (!document.getElementById("caesarCipher").classList.contains("hidden")) {
        document.getElementById("binaryCode").classList.remove("hidden");
    }
});

function checkCode() {
    let input = document.getElementById("codeInput").value.trim().toUpperCase();
    let button = document.getElementById("checkButton");
    if (input === "ОТВЕТ") {
        document.getElementById("caesarCipher").classList.remove("hidden");

        // Находим слова
        let caesar = document.getElementById("caesar-word");
        let decrypt = document.getElementById("decrypt-word");

        // Запускаем анимацию
        caesar.style.animation = "highlight 60s forwards";
        decrypt.style.animation = "highlight-decrypt 60s forwards";
    } else {
        button.classList.add("error");
        setTimeout(() => button.classList.remove("error"), 2000);
    }
}

function checkBinary() {
    let input = document.getElementById("binaryInput").value.trim().toUpperCase();
    let button = document.querySelector("#binaryCode button"); // Находим кнопку в блоке binaryCode
    if (input === "DECRYPT") {
        document.getElementById("chatGPT").classList.remove("hidden");
    } else {
        button.classList.add("error"); // Краснеет кнопка в блоке binaryCode
        setTimeout(() => button.classList.remove("error"), 2000); // Убираем красный через 2 секунды
    }
}

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Устанавливаем размеры канваса на всю страницу
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Символы, используемые в потоке (можно поменять)
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charArray = characters.split("");

// Определяем колонки (каждая колонка отвечает за 1 поток символов)
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0);

// Функция отрисовки фона
function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Полупрозрачный чёрный для затухания следов
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0"; // Ярко-зелёный цвет символов
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Запускаем анимацию с частотой 50 FPS
setInterval(drawMatrix, 50);

// Подстраиваем канвас при изменении размера окна
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
// Вешаем обработчики на кнопки
document.getElementById("checkButton").addEventListener("click", checkCode);
document.querySelector("#binaryCode button").addEventListener("click", checkBinary);