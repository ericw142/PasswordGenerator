// Variables
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numChar = ["0","1","2","3","4","5","6","7","8","9"];
var specChar = ["!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "`", "~"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  var pass = "";
  var index;
  var allArr;
// Prompts
var length = prompt("Please input by number how many characters long you would like the password to be (8-128)");
var lower = confirm("Would you like lowercase characters?");
var upper = confirm("Would you like uppercase characters?");
var numeric = confirm("Would you like numeric characters?");
var special = confirm("Would you like special characters?");

// If Statements to filter result
  if (length < 8 || length > 128) {
    alert("Please input between 8 and 128 for desired password length");
    pass = "";
    return pass;
  } else if (lower === false && upper === false && numeric === false && special === false) {
    alert("Please select at least one character type");
    pass = "";
    return pass;
  } 
  else if (lower === true && upper === false && numeric === false && special === false) {
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 25);
      pass += lowerChar[index];
    }
    return pass;
  } else if (lower === false && upper === true && numeric === false && special === false) {
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 25);
      pass += upperChar[index];
    }
    return pass;
  } else if (lower === false && upper === false && numeric === true && special === false) {
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 9);
      pass += numChar[index];
    }
    return pass;
  } else if (lower === false && upper === false && numeric === false && special === true) {
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 17);
      pass += specChar[index];
    }
    return pass;
  } else if (lower === true && upper === true && numeric === false && special === false) {
    allArr = lowerChar.concat(upperChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 50);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === true && upper === true && numeric === true && special === false) {
    allArr = lowerChar.concat(upperChar);
    allArr = allArr.concat(numChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 59);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === true && upper === true && numeric === true && special === true) {
    allArr = lowerChar.concat(upperChar);
    allArr = allArr.concat(numChar);
    allArr = allArr.concat(specChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 76);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === false && upper === true && numeric === true && special === false) {
    allArr = upperChar.concat(numChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 34);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === false && upper === true && numeric === true && special === true) {
    allArr = upperChar.concat(numChar);
    allArr = allArr.concat(specChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 51);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === false && upper === false && numeric === true && special === true) {
    allArr = numChar.concat(specChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 26);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === true && upper === false && numeric === true && special === false) {
    allArr = lowerChar.concat(numChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 34);
      pass += allArr[index];
    }
    return pass;
  } else if (lower === true && upper === false && numeric === false && special === true) {
    allArr = lowerChar.concat(specChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 42);
      pass += allArr[index];
    }
    return pass
  } else if (lower === false && upper === true && numeric === false && special === true) {
    allArr = upperChar.concat(specChar);
    for (var i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 42);
      pass += allArr[index];
    }
    return pass
  } else {
    alert("ERROR");
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);