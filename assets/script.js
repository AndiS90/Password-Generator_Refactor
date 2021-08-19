// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newpassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newpassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){



var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~";
var newStri;

var chosenChars= [uppercase, lowercase, numbers, specialChar];

var min = 8
var max = 128;

var userInput = prompt("How long would you like your password? \nMust be a number between 8 and 128 characters.");

if( userInput<min || userInput>max ){

  alert("Password length must be a number between 8 and 128 characters.")
 
}else{

  var upperIncluded = confirm("Do you want to include uppercase letters?");
  var lowerIncluded = confirm("Do you want to include lowercase letters?");
  var numbersIncluded = confirm("Do you want to include numbers?");
  var specialsIncluded = confirm("Do you want to include special characters?");

 var allOptions= [upperIncluded, lowerIncluded, numbersIncluded,specialsIncluded];

 var newArray=[]

 for (i=0; i<(allOptions.length-1); i++){

        if (allOptions[i]) {
            newArray = newArray.concat(chosenChars[i]) 
            }
    }


    var NewStr = newArray.join();
        //for loop that creates password based on what newStr =
    for (i=1; i<=passLength; i++){
         var charIndex = Math.floor( (Math.random()*newStr.length) + 1);             
        password += newStr.charAt(charIndex);             
        }   
return password;    } 
    }

        


//       if(!upperIncluded || !lowerIncluded || !numbersIncluded || !specialsIncluded){
//         alert("You have to include some type of character.");
//       }else {
//           {passLength = Math.floor(userInput);}

//       //only one type of character is chosen
//    while (upperIncluded || !lowerIncluded || !numbersIncluded || !specialsIncluded){
//                newStr= uppercase;
//         }
 
//     while (!upperIncluded || lowerIncluded || !numbersIncluded || !specialsIncluded){
//                 newStr= lowercase;              
//         }             
           
//     while (!upperIncluded || !lowerIncluded || numbersIncluded || !specialsIncluded){
//                 newStr= numbers;            
//         }

//     while (!upperIncluded || !lowerIncluded || !numbersIncluded || specialsIncluded){
//                 newStr= specialChar;                 
//              }
       
//         //end only one type of character chosen

//         //pairs including upperIncluded
//     while (upperIncluded || lowerIncluded || !numbersIncluded || !specialsIncluded){
//             var newStr = uppercase + lowercase;  
//         }


//      while (upperIncluded || !lowerIncluded || numbersIncluded || !specialsIncluded){
//              var newStr = uppercase  + numbers; 
//         }

//      while (upperIncluded || !lowerIncluded || !numbersIncluded || specialsIncluded){
//                 var newStr = uppercase + specialChar; 
//         }
//         //end pairs including upper included

//         //start rest of pairs w/ lower included
//     while (!upperIncluded || lowerIncluded || numbersIncluded || !specialsIncluded){
//             var newStr = lowercase + numbers; 
//         }
    
//     while (!upperIncluded || lowerIncluded || !numbersIncluded || specialsIncluded){
//         var newStr = lowercase + specialChar; 
//         }
//         // end rest of pairs w/ lower included

//         //start last of pairs with numbers and/or special pairs included
//     while (!upperIncluded || !lowerIncluded || numbersIncluded || specialsIncluded){
//         var newStr = numbers + specialChar; 
//         }
//     // end pairs

//         //start upperIncluded triples
//     while (upperIncluded || lowerIncluded || numbersIncluded || !specialsIncluded){
//         var newStr = uppercase + lowercase + numbers; 
//         }   

        
//     while (upperIncluded || !lowerIncluded || numbersIncluded || specialsIncluded){
//         var newStr = uppercase + numbers + specialChar; 
//         }

//     while (upperIncluded || lowerIncluded || !numbersIncluded || specialsIncluded){
//         var newStr = uppercase + lowercase + specialChar; 
//          }
//         //end upperIncluded triples

//          //start rest of lowerIncluded triples
//      while (!upperIncluded || lowerIncluded || numbersIncluded || specialsIncluded){
//          var newStr = lowercase +  numbers + specialChar ; 
//          }   
//          //end triples

//          //all included
//     while (upperIncluded || lowerIncluded || numbersIncluded || specialsIncluded){
//         var newStr = uppercase +  lowercase +  numbers + specialChar ; 
//         }     
    








