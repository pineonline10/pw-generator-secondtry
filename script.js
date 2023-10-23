// Function to get user input and validate it
function getUserInput() {
    let length = parseInt(prompt("Enter password length (8-128)"));
    
    if (length < 8 || length > 128 || isNaN(length)) {
      alert("Invalid length");
      return null;
    }
    
    let useLower = confirm("Include lowercase?");
    let useUpper = confirm("Include uppercase?");
    let useNumbers = confirm("Include numbers?");
    let useSpecial = confirm("Include special characters?");
    
    if (!(useLower || useUpper || useNumbers || useSpecial)) {
      alert("At least one character type should be selected");
      return null;
    }
    
    return { length, useLower, useUpper, useNumbers, useSpecial };
  }
  
  // Function to generate password based on given criteria
  function generatePassword(criteria) {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    
    let possibleChars = '';
    if (criteria.useLower) possibleChars += lowerChars;
    if (criteria.useUpper) possibleChars += upperChars;
    if (criteria.useNumbers) possibleChars += numChars;
    if (criteria.useSpecial) possibleChars += specialChars;
    
    let password = '';
    for (let i = 0; i < criteria.length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      password += possibleChars[randomIndex];
    }
    
    return password;
  }
  
  // Write password to the #password input
  function writePassword() {
    const criteria = getUserInput();
    if (!criteria) return;
    
    const password = generatePassword(criteria);
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  