function verify() {
    console.log("S, R, K")
    let S = parseInt(document.getElementById('S').value);
    let R = parseInt(document.getElementById('R').value);
    let K = parseInt(document.getElementById('K').value);
    console.log(S, R, K)

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
        let texCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById('UserEnter').submit();
}
}

function verify_send() {
  verify();
  send();

}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementK = document.getElementById("K");
elementK.addEventListener('input', verify);

const elementS = document.getElementById("S");
elementS.addEventListener('keyup', verify);

const elementR = document.getElementById("R");
elementR.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
