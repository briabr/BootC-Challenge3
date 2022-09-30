// Assignment code here
var number;
var upperCase;
var lowerCase;
var specialCharacter;
var passwordLength;
var userChoice;
var capitalLetters;

const setsOfcharacters = ["character","number", "letters"];
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
  // choose number of characters for new password
  passwordLength = prompt("Enter number of characters between 8-10 for your password");
  if (!passwordLength) {
    alert("Please enter the right number of charachters");
  } else if (length < 8 || length > 10) {
    // wrong number of characters was entered
    passwordLength = prompt("password must be from 8-10 characters");
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);