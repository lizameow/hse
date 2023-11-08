function verify() {
    let S = parseInt(document.getElementById('S').value);
    let R = parseInt(document.getElementById('R').value);
    let K = parseInt(document.getElementById('K').value);

    if (Math.sqrt(S) - 2 * R >= K) {
        result = "Можно разместить сцену в зале.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    } else {
        result = "Невозможно разместить сцену в зале с заданными параметрами.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    }
}

function send() {
    if (check) {
        document.getElementsByName('formulation')[0].value = result;
        document.getElementById('UserEnter').submit();
    } else {
        alert("Есть недостатки. Повторите ввод");
    }
}

let messageText;

const elementK = document.getElementById("K");
elementK.addEventListener('input', verify);

const elementS = document.getElementById("S");
elementS.addEventListener('keyup', verify);

const elementR = document.getElementById("R");
elementR.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

messageText = document.getElementById("result").innerText;
