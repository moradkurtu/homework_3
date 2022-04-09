var characterLength;
var choiceArr = [];

var specialCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "?", "/","<", ">"];
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O","P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
   var correctPromts = getPrompts(); //returns true or false
   var passwordText = document.querySelector("#password");

   if (correctPromts){
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
  }


  function generatePassword(){
  // I would generatePasswork based on the prompts
    var password = "";
    for(var i = 0; i < characterLength; i++){
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      console.log(choiceArr[randomIndex])
      password += choiceArr[randomIndex];
      }
      return password;
}

function getPrompts(){
  choiceArr = [];
    characterLength = parseInt(prompt("How many characters do you want your password to be? (8- 128 characters"));
    var lowercaseOption = false;
    var uppercaseOption = false;
    var specialchartOption = false;
    var numberOption = false;
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128){  // I'm hoping that this is all false
      alert("Character lenght has to be a number, 8 - 128 digits. Please try again. ");
      getPrompts();
    }
    if (confirm("Would you like lowercase letters in your password?")){
      choiceArr = choiceArr.concat(lowerCaseArr);
      lowercaseOption = true;
    }
    if (confirm("Would you like uppercase letters in your password?")){
      choiceArr = choiceArr.concat(upperCaseArr);
      uppercaseOption = true;
    }
    if (confirm("Would you like special characters in your password?")){
      choiceArr = choiceArr.concat(specialCharArr);
      specialchartOption = true;
    }
    if (confirm("Would you like numbers in your password?")){
      choiceArr = choiceArr.concat(numberArr);
      numberOption = true;
    }
 
    if(lowercaseOption || uppercaseOption || specialchartOption || numberOption ){
      return true;
    }  else {
      alert("Please select atlest one character type for your password");
      getPrompts()
    }

}