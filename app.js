//Section1: Function to retrieve password length 
function getPasswordLength() {
    const length = document.getElementById("length").value;
    return Number(length);
}

//Section2: Function to retrieve password properties 
function getPasswordProperties() {
    const ids = ["lowercase", "uppercase", "numbers", "special"];
    const properties = {}

    for (const id of ids) {
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties
}

//Section3: Function to generate character set (lowercase or uppercase) 
function getChars(lowercase = true) {
    const start = lowercase ? 97 : 65
    let chars = [];

    for (let i = start; i < start + 26; i++) {
        chars.push(String.fromCharCode(i));
    }

    return chars;
}

//Section4: Function to generate numbers 0-9 
function getNumbers() {
    const nums = [];

    for (let i = 0; i < 10; i++) {
        nums.push(i);
    }

    return nums;
}

//Section5: Defines character sets 
const lowercase = getChars(true);
const uppercase = getChars(false);
const numbers = getNumbers();
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];

//Section6: Function to generate password
function generatePassword() {
    /*Part1: Retrieves password length and properties*/
    const length = getPasswordLength();
    const properties = getPasswordProperties();

    /*Part2: Generates character set based on selected properties*/
    const characters = [];
    if (properties.lowercase) characters.push(...lowercase);
    if (properties.uppercase) characters.push(...uppercase);
    if (properties.numbers) characters.push(...numbers);
    if (properties.special) characters.push(...special);

    /*Part3: Validates if at least one character set is selected*/
    if (characters.length === 0) {
        return alert("You Must Select At Least One Set of Characters!")
    }

    /*Part4: Generates password*/
    let pwd = [];
    for (let i = 0; i < length; i++) {
        const randomIdx = Math.floor(Math.random() * characters.length);
        const char = characters[randomIdx];
        pwd.push(char);
    }

    /*Part5: Displays password on the page*/
    const pwdString = pwd.join("");
    document.getElementById("password").innerHTML = "<p>" + pwdString + "<p>";

    /*Part6: Logs characters array to console*/
    console.log(characters);
} 