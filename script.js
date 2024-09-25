//Exercise 1
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

//Exercise 2
function isAdult(number){
    if(number>=18){
        return "Adult";
    }
    else {
        return "Minor";
    }
  }
   console.log('Exercise 2 Result:', isAdult(21));
//Exercise 3
function isCharAVowel(character) {
    if(character === 'a' || character === 'e' || character === 'i' ||character === 'o' || character === 'u' ){
       return true
    }
    else {
        return false
    }
}
console.log('Exercise 3 Result:', isCharAVowel("a"));
//Exercise 4
function generateEmail(name , domain){
    return `${name}@${domain}`
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));
//Exercise 5
function greetUser(name1 , timeOfDay){
    return `Good ${timeOfDay}, ${name1}`
}
console.log('Exercise 5 Result:', greetUser("Sam!", "morning"));
//Exercise 6
function maxOfThree(num1 , num2 , num3){
    if(num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));
//Exercise 7
function calculateTip(bill , tip){
return (bill *tip)/100 ;
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
//Exercise 8
function convertTemperature(temperature , scale){
    if (scale === 'C'){
    return (temperature*(9/5) + 32);
    }
    return temperature - 32;

}
console.log('Exercise 8 Result:', convertTemperature(32, "C"));
//Exercise 9 
function basicCalculator(number1 , number2 , operation){
    if(operation === 'add'){
        return number1 + number2;
    }
    else if(operation === 'subtract'){
        return number1 - number2;
    }
    else if(operation === 'multiply'){
        return number1 * number2;
    }
    else {
        return number1 / number2; 
    }
}
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
//level Up 
//Exercise 10
function calculateGrade(score){
    if (score>=90){
        return "A"
    }
    else if (score >=80 && score <=89){
        return "B"
    }
    else if (score >=70 && score <=79){
        return "C"
    }
    else if (score >=60 && score <=69){
        return "D"
    }
    else {
        return "F"
    }

}
console.log('Exercise 10 Result:', calculateGrade(85));
//Exercise 11
function createUserName(firstName , lastName){
    let firstThreeFirstName = firstName.substring(0,3);
    let lastThreeLastName = lastName.substring(0,3);
    let totalChar = firstName.length + lastName.length 
    let userName = firstThreeFirstName + lastThreeLastName + totalChar
    return userName
}
console.log('Exercise 11 Result:', createUserName("Samantha", "Green"));
