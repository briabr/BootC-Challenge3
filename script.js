// Assignment code here

// Variables 
var numbers;
var upperCase;
var lowerCase;
var specialCharacters;
var passwordLength;
var userChoice;
var capitalLetters;
var charactersCount

setsofCharacters = ["characters","numbers", "letters"];
characters = "!@#$%^&*)()";
numbers = "0123456789";
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
  passwordLength = prompt("Enter number of characters between 8-128 for your password and at least: one number, one uppercase, one lowercase and one special character");
     if (passwordLength < 8 || passwordLength > 128) {
    // wrong number of characters was entered
    passwordLength = prompt("password must be between 8-128 characters inclusive");
  } else { // whether the user  numbers, lowercase, uppercase or specialcase()
    numbers = confirm("Do you want to use numbers in your password?");
    lowerCase = confirm("Do you want to use lowercases in your password?");
    upperCase = confirm("Do you want to use uppercases in your password?");
    specialCharacters = confirm("Do you want to use special characters in your password?");
  };
// put the selected characters together
// randomly select characters from all of the selected characters 
// put them together
}
// var charactersCount = 0

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);