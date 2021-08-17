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





var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~";

var min = 8
var max = 128;

//function random(min, max) {
  //const num = Math.floor(Math.random() * (max - min + 1)) + min; 
  //return num;    }


var userInput = prompt("How long would you like your password? \nMust be a number between 8 and 128 characters.");

if( userInput<min || userInput>max ){

  alert("Password length must be a number between 8 and 128 characters.")
 
}else{

  var upperIncluded = confirm("Do you want to include uppercase letters?");
  var lowerIncluded = confirm("Do you want to include lowercase letters?");
  var numbersIncluded = confirm("Do you want to include numbers?");
  var specialsIncluded = confirm("Do you want to include special characters?");

      if(!upperIncluded || !lowerIncluded || !numbersIncluded || !specialsIncluded){
        alert("You have to include some type of character.");
      }else 
          {passLength = Math.floor(userInput);}


    while (upperIncluded || !lowerIncluded || !numbersIncluded || !specialsIncluded){

            for (i=1; i<=passLength; i++){
              var charIndex = Math.floor( (Math.random()*uppercase.length) + 1);
              
              password+=uppercase.charAt(charIndex);                

            }
          }

    while (!upperIncluded || lowerIncluded || !numbersIncluded || !specialsIncluded){

            for (i=1; i<=passLength; i++){
                var charIndex = Math.floor( (Math.random()*lowerIncluded.length) + 1);
                
                password+=lowerIncluded.charAt(charIndex);          
                }     
           }

    while (!upperIncluded || !lowerIncluded || numbersIncluded || !specialsIncluded){

            for (i=1; i<=passLength; i++){
                var charIndex = Math.floor( (Math.random()*numbersIncluded.length) + 1);
                    
                password+=numbersIncluded.charAt(charIndex);      
              }
          }
           
    while (!upperIncluded || !lowerIncluded || !numbersIncluded || specialsIncluded){

          for (i=1; i<=passLength; i++){
              var charIndex = Math.floor( (Math.random()*specialsIncluded.length) + 1);
                      
              password+=specialsIncluded.charAt(charIndex);             
             }
        }




    
    }



