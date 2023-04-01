// Assignment code here
// var characterLenght = 8; 128
var choiceArr;
var specialCassArr = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
];
var lowerCassArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upercassArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];;
var numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    

    var newpassword = getPrompt();
    console.log(newpassword)
    var passwordText = document.querySelector("#password");
    passwordText.value = newpassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    console.log(choiceArr)
    var password = ""
    for (var i = 0; i < characterLenght; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length)
        password = password + choiceArr[randomIndex];
    }
    return password;

}

function getPrompt() {
    choiceArr = [];
    characterLenght = parseInt(prompt("how many charcters do you want your password to be (8-128)"));
    if (isNaN(characterLenght) === "true" || characterLenght < 8 || characterLenght > 128) {
        alert("lenght needs to be a number 8-128 digits");
        return false;
    }
    if (confirm("Do you want lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerCassArr);

    }
    if (confirm("Do you want uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upercassArr);
    }
    if (confirm("Do you want special charcters in your password?")) {
        choiceArr = choiceArr.concat(specialCassArr);
    }
    if (confirm("Do you want numbers in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    console.log(choiceArr)
    var password = ""
    for (var i = 0; i < characterLenght; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length)
        password = password + choiceArr[randomIndex];
    }
   
    console.log (password)
    return password
}

