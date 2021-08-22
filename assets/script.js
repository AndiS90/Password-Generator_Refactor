// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){



var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var numbers ="1234567890";
var specialChar ="!\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~";

var newpassword = "";
var chosenChars= [uppercase,lowercase,numbers,specialChar];

var min = 8
var max = 128;

var userInput = prompt("How long would you like your password? \nMust be a number between 8 and 128 characters.");

if( userInput<min || userInput>max ){

  alert("Password length must be a number between 8 and 128 characters.")

  generatePassword();
   
}else{
    

  var passLength = Math.floor(userInput);  
  var upperIncluded = confirm("Do you want to include uppercase letters?");
  var lowerIncluded = confirm("Do you want to include lowercase letters?");
  var numbersIncluded = confirm("Do you want to include numbers?");
  var specialsIncluded = confirm("Do you want to include special characters?");

    if (!upperIncluded && !lowerIncluded && !numbersIncluded && !specialsIncluded){
        alert("You have to include at least one type of character.")

        generatePassword();
    } else {

    var allOptions= [upperIncluded, lowerIncluded, numbersIncluded,specialsIncluded];
        
    var newArray=[]

    for (i=0; i<(allOptions.length); i++){

        if (allOptions[i]) {
            newArray = newArray.concat(chosenChars[i]) 
            }
    }
      
       var newStr = newArray.join(''); //combines the new array elements into one long string
        //for loop that creates password based on what newStr =
    for (i=1; i<=passLength; i++){
         var charIndex = Math.floor( (Math.random()*newStr.length) + 1);             
        newpassword += newStr.charAt(charIndex);             
        } 
        
   return newpassword; } 
    
    }
}
          
    








