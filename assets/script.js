var generateBtn = document.querySelector("#generate");
var getPasswordLength = () => {
    var length = parseInt(prompt("Choose a password length from 8 to 128 characters."));
    if (( length < 8 || length > 128) || isNaN(length)){
        alert('please choose a NUMBER from 8-128.')
        return getPasswordLength();
    }
    return length;
}
function generatePassword() {
    var characterSets = {
        number: "1234567890",
        "lower case": "abcdefghijklmnopqrstuvwxyz",
        "upper case": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
         special: "!@#$%^&**()_+=-",
    }
    var chosenCharacters = "";
    var password = "";
    var passwordLength = getPasswordLength();
    for (var key in characterSets) if (confirm(`Would you like to use ${key} characters?`)) 
chosenCharacters +=  characterSets[key]; 

for (var i = 0; i < passwordLength; i++) password += chosenCharacters[Math.floor(Math.random() * chosenCharacters.length)];
return password
}
// Write password 
function writePassword() {
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);