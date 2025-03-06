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
        let caesar = document.getElementById("caesar-word");
        let decrypt = document.getElementById("decrypt-word");
        caesar.style.fontWeight = "bold";
        decrypt.style.fontWeight = "bold";
        caesar.style.fontSize = "larger";
        decrypt.style.fontSize = "larger";
    } else {
        button.classList.add("error");
        setTimeout(() => button.classList.remove("error"), 3000);
    }
}

function checkBinary() {
    let input = document.getElementById("binaryInput").value.trim().toUpperCase();
    if (input === "DECRYPT") {
        document.getElementById("chatGPT").classList.remove("hidden");
    }
}

function checkChatGPT() {
    let input = document.getElementById("chatInput").value.trim().toLowerCase();
    if (input === "final-url.com") {
        document.getElementById("final").classList.remove("hidden");
    }
}
