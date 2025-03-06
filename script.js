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
    let button = document.getElementById("checkButton");
    if (input === "ОТВЕТ") {
        document.getElementById("caesarCipher").classList.remove("hidden");
        document.getElementById("caesar-word").style.fontWeight = "bold";
        document.getElementById("decrypt-word").style.fontWeight = "bold";
    } else {
        button.classList.add("error");
        setTimeout(() => button.classList.remove("error"), 3000);
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