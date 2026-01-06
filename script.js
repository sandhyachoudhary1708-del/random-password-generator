document.getElementById("generateBtn").addEventListener("click", generatePassword);

function generatePassword() {

    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const lowercase = document.getElementById("lowercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    let characters = "";

    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()_+";

    if (characters === "") {
        alert("Please select at least one option");
        return;
    }

    let password = "";
    let i = 0;

    while (i < length) {
        let index = (i * 3 + length) % characters.length;
        password = password + characters.charAt(index);
        i++;
    }

    document.getElementById("result").value = password;
}

