// Assignment code here
var number;
var upperCase;
var lowerCase;
var specialCharacter;
var passwordLength
var userChoice;//var selection
var capitalLetters

const setsOfcharacters = ["character","number", "letters"];
character = "!@#$%^&*)()";
number = "0123456789";
letters = "abcdefghijklmnopqrstuvwxyz";
capiltalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
character = "!@#$%^&*)()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);