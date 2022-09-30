// Assignment code here
var number;
var upperCase;
var lowerCase;
var specialCharacter;
var passwordLength;
var userChoice;
var capitalLetters;

setsOfcharacters = ["character","number", "letters"];
character = "!@#$%^&*)()";
number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
capiltalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// setting password parameters
function generatePassword() {
  // choose number of characters for your password
  passwordLength = prompt("Enter number of characters between 8-128 for your password");
     if (length < 8 || length > 128) {
    // wrong number of characters was entered
    passwordLength = prompt("password must be between 8-128 characters inclusive");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);