// Assignment Code
var generateBtn = document.querySelector("#generate");
var num = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*?";

function generatePassword() {
  var completedPassword = ""
  var charactersSelected = ""

  

  var passwordLength = prompt("Choose a number between 8 and 128")
  if (passwordLength > 7 && passwordLength < 128) {
    var confirmnum = confirm("Do you want Numbers?")
    if (confirmnum === true) {
      charactersSelected += num
      console.log(charactersSelected)
    }
    console.log(passwordLength)
    var confirmLowerCase = confirm("Do you want lower case letters?")
    if (confirmLowerCase === true) {
      charactersSelected += lowerCase
      console.log(charactersSelected)
    }
    console.log(confirmLowerCase)
    var confirmUpperCase = confirm("Do you want upper case letters?")
    if (confirmUpperCase === true)
    {
      charactersSelected += upperCase
      console.log(charactersSelected)
    }
      console.log(confirmUpperCase)
    var confirmSpecialCharacters = confirm("Do you want special characters?")
    if (confirmSpecialCharacters === true)
    {
      charactersSelected += specialCharacters
      console.log(charactersSelected)
    }
      console.log(charactersSelected)
  }
  else {
    generatePassword()
  }

 for (let i = 0; i < passwordLength; i++) {
  completedPassword += charactersSelected[Math.ceil(Math.random() * charactersSelected.length)]

 
 }

  console.log(passwordLength)


  return completedPassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  ;

