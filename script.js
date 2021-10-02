var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function createPassword() {
 
  
console.log(createPassword)
  

  var pLength =  prompt("Please input the length of your desired password, from 8-128");
console.log(prompt)
  
if (pLength >= 8 && pLength <= 128) {

    var numbers = confirm("Contain numbers?    'ok' for yes, 'cancel' for no");
    var lowerCase = confirm("Contain lowercase?    'ok' for yes, 'cancel' for no");
    var upperCase = confirm("Conatin uppercase?    'ok' for yes, 'cancel' for no");
    var specialCharacters = confirm("Contain special characters?    'ok' for yes, 'cancel' for no");
  }
    
  if (pLength < 8 || pLength > 128) {
    return writePassword()
  }

 
  
  if (numbers) {
      var numbers = ["987654321"]
    }
  
if (numbers === false) {
  var numbers = [""]
}

    if (lowerCase) {
     var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
    }

if (lowerCase === false) {
  var lowerCase = [""]
}

    if (upperCase) {
     var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
}

if (upperCase === false) {
  var upperCase = [""]
}

    if (specialCharacters) {
     var specialCharacters = ["!@#$%^&*()"];
    }

    if (specialCharacters === false) {
      var specialCharacters = [""]
    }
   
  
  var randomizer = numbers + lowerCase + upperCase + specialCharacters;
  var password = "";


  for (var i = 0; i < pLength; i++) {
    var newPassword = randomizer[Math.floor(Math.random() * randomizer.length)];
    password += newPassword;
}


return password
}


function writePassword() {
  var password = createPassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


generateBtn.addEventListener("click", writePassword);