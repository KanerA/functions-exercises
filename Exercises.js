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
  // your code here
  return "";
}

//Question 5
function getFirstNotRepeating(str) {
  // your code here
  return "";
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
console.log(allCaps("i am a cyber4s student"));
// *** End of Playground ***    

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;