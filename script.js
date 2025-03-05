let incorrectAttempts = []; // Ошибочные попытки
let visitCount = localStorage.getItem("visitCount") || 0; // Счётчик посещений

visitCount++;
localStorage.setItem("visitCount", visitCount);
console.log("Посещений: " + visitCount);

// Проверка первого ключа
function checkCode() {
    let input = document.getElementById("codeInput").value.trim().toUpperCase();
    if (input === "ОТВЕТ") { 
        document.getElementById("caesarCipher").classList.remove("hidden");
    } else {
        document.getElementById("codeInput").classList.add("error");
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

// Проверка шифра Цезаря
function checkCaesar() {
    let input = document.getElementById("caesarInput").value.trim().toUpperCase();
    if (input === "ТЫКНИ НА ИГРА 3 РАЗА") {
        alert("Теперь кликни на слово 'ИГРА' три раза!");
    } else {
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

// Проверка Морзе
function checkMorse() {
    let input = document.getElementById("morseInput").value.trim();
    if (input === "42") {
        document.getElementById("chatGPT").classList.remove("hidden");
    } else {
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}

// Проверка ChatGPT
function checkChatGPT() {
    let input = document.getElementById("chatInput").value.trim().toLowerCase();
    if (input === "final-url.com") {
        document.getElementById("final").classList.remove("hidden");
    } else {
        incorrectAttempts.push(input);
        console.log("Ошибочные попытки: ", incorrectAttempts);
    }
}
