// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
  if (shift > 25 || shift < -25 || shift === 0) {
    return false;
  }
  
  let alphabetArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let resultString = '';
  let inputToLowercase = input.toLowerCase();
    
    console.log(input); 
  for(let i = 0; i < inputToLowercase.length; i++) {
    let inputChar = inputToLowercase[i];
     console.log(inputChar);
    let charNum = alphabetArr.indexOf(inputChar);
    console.log(charNum);
    if (charNum < 0) {
      resultString += inputChar;
      continue;
    }
    let newCharNum = encode? charNum + shift: charNum - shift;
      console.log(newCharNum);
    
    if(newCharNum > 25) {
      newCharNum = newCharNum - 26;
    }
    if(newCharNum < 0) {
      newCharNum = newCharNum + 26;
    }
    
    resultString += alphabetArr[newCharNum];
  } 
    
    return resultString;
 }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
