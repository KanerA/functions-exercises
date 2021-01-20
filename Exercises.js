//Question 1
function myReverse(str) {
    let newStr="";
    for(let i=str.length-1; i>=0; i--){
        newStr+= str[i];
    }
    return newStr;
}

//Question 2
function allCombinations(str) {
    let combinations = [];
    let middle= Math.floor(str.length/2);
    for(let i=0; i<str.length; i++){
      if(i===middle){
        combinations.push(str);
      }
        combinations.push(str[i]);
        if(i<str.length-1){
        combinations.push(str[i]+str[i+1]);
        }
      }
    return combinations;
}

//Question 3
function allCaps(str) {
    const newStr= str.split(" ");
    let capWord;
    let finalStr=[];
    for(let i=0; i<newStr.length; i++){
        capWord = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
        finalStr.push(capWord);
    }
    finalStr= finalStr.join(" ");

    return finalStr;
}

//Question 4
function myPower(x, n) {
  let power=1;
  if(n>1 || n===0){  
    for(let i=n; i>0; i--){
      power=power*x
    }
    return power;
  }
  else{
    return x;
  }
}
// for negative exponents.
// else if(n<0){
//   for(let i=n; i>0; i--){
//     power=(power*x);
//   }
//   return 1/power;
// }
////////////////////////////////////////////////

//Question 5
function getFirstNotRepeating(str) {
  let chr="";
  let counter=0;
  let newStr=str;
  for(let i=0; i<newStr.length; i++){
    for(let j=1; j<newStr.length; j++){
      if(newStr[i]===newStr[j]){
        if(i!==j){
          counter++;
        }
      }
    }
     if(counter===0){
      chr = newStr[i];
      break;
    }
    counter=0; 
  }
  return chr;
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  // your code here
  return "I'm not interested in the bonus question :(";
}

// *** Playground ***
// Feel free to run and test your code here on your own
// console.log(myReverse("Hello"));// ex. 1
// console.log(allCombinations("dog"));// ex. 2
// console.log(allCaps("i am a cyber4s student"));
// console.log(myPower(3,5));
console.log(getFirstNotRepeating("dad"));
// *** End of Playground ***    

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;