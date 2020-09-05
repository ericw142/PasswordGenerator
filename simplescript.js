var chars = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
    var pass = "";
    var index;

    // Prompts
    var length = prompt("Please input by number how many characters long you would like the password to be (8-128)");
    var lower = confirm("Would you like lowercase characters?");
    var upper = confirm("Would you like uppercase characters?");
    var numeric = confirm("Would you like numeric characters?");
    var special = confirm("Would you like special characters?");
    
    if (length < 8 || length > 128) {
        alert("Please input between 8 and 128 for desired password length");
        return pass;
      }
    if (lower === false && upper === false && numeric === false && special === false) {
        alert("Please select at least one character type");
        return pass;
    }
    // Adding characters to the array
    if (lower === true) {
        chars.push("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    }
    if (upper === true) {
        chars.push("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
    }
    if (numeric === true) {
        chars.push("0","1","2","3","4","5","6","7","8","9");
    }
    if (special === true) {
        chars.push("!", "?", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "_", "=", "`", "~");
    }
    // Choosing random characters from array and entering them in the password
    for (var i = 0; i < length; i++) {
        index = Math.floor(Math.random() * chars.length);
        pass += chars[index];
    }
    chars = [];
    return pass;
}

// Runs the generatepassword function and writes result to textarea
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);