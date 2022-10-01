// Assignment code here

//Variables 
var numbers;
var upperCase;
var lowerCase;
var specialCharacters;
var passwordLength = 0;
var userChoice;
var charactersCount
var password = "";
var userchoice = "";
var charString = "";

specialCharacters = "!@#$%^&*)()";
numbers = "0123456789";
lowerCase = "abcdefghijklmnopqrstuvwxyz";
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generateBtn = document.querySelector("#generate");
function generatePassword() {
var passwordLength = prompt("How many characters you want your password to include?");
while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Password must be between 8-128 characters. How many characters do you want your password to include?");
} 
numbersPrompt = confirm("Do you want to use numbers in your password?");
if (numbersPrompt === true) {
  charString = charString.concat(numbers);
}
lowerPrompt = confirm("Do you want to use lowercases in your password?");
if (lowerPrompt === true) {
  charString = charString.concat(lowerCase);
}
upperPrompt = confirm("Do you want to use uppercases in your password?");
if (upperPrompt === true) {
  charString = charString.concat(upperCase);
}
specialcharPrompt = confirm("Do you want to use special characters in your password?");
if (specialcharPrompt === true) {
  charString = charString.concat(specialCharacters);
}
if (!charString) {
  alert("Please select at least one character type!");
}
for (var i = 0; i < passwordLength; i++) {
  var index = (Math.floor(Math.random) * charString.length);;
 password = password + charString[index]
}
return password
console.log(charString)
}
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);