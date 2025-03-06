/* script.js */
let incorrectAttempts = [];
let visitCount = localStorage.getItem("visitCount") || 0;
visitCount++;
localStorage.setItem("visitCount", visitCount);
console.log("Посещений: " + visitCount);

document.getElementById("main-title").addEventListener("click", function() {
    if (!document.getElementById("caesarCipher").classList.contains("hidden")) {
        document.getElementById("binaryCode").classList.remove("hidden");
    }
});

function checkCode() {
    let input = document.getElementById("codeInput").value.trim().toUpperCase();
    if (input === "ОТВЕТ") {
        document.getElementById("caesarCipher").classList.remove("hidden");
        document.getElementById("caesar-word").style.fontWeight = "bold";
        document.getElementById("decrypt-word").style.fontWeight = "bold";
    } else {
        document.getElementById("codeInput").classList.add("error");
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

function checkBinary() {
    let input = document.getElementById("binaryInput").value.trim().toUpperCase();
    if (input === "DECRYPT") {
        document.getElementById("chatGPT").classList.remove("hidden");
    } else {
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

function checkChatGPT() {
    let input = document.getElementById("chatInput").value.trim().toLowerCase();
    if (input === "final-url.com") {
        document.getElementById("final").classList.remove("hidden");
    } else {
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

// Функция для анимации матрицы
const canvas = document.createElement("canvas");
document.getElementById("matrix-background").appendChild(canvas);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const columns = canvas.width / 20;
const drops = Array.from({ length: columns }, () => Math.random() * canvas.height);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.font = "20px monospace";
    drops.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        ctx.fillText(text, index * 20, y);
        drops[index] = y > canvas.height || Math.random() > 0.95 ? 0 : y + 20;
    });
}
setInterval(drawMatrix, 50);
