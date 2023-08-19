let passwordEl = document.getElementById("password")

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 11;
let password = "";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function generatePassword() {
    password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        console.log(randomNumber);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    passwordEl.textContent = password;
}


function copyPassword(id) {
    let r = document.createRange();
    r.selectNode(passwordEl);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function copyAnim() {
    document.getElementById('copyTxt').classList.add('copyAnimation');
    sleep(1000).then(() => { document.getElementById('copyTxt').classList.remove('copyAnimation'); });
}



