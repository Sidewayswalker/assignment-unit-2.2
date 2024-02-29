// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

//STEVEN KARL - new save and commit purposes

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Establishing variable "number" and assignming it a value of 1.
// (increment operator) add 1 to the value of "number" making the new value 2.
// Check and see if the variable "number" is great than or equal to 2. 
// if number is 2 or higher.. which it is.. console.log 'yes'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Establishing variable "name" and assignming it a value of "Dane".
// if the variable "name" is equal to "Mary".. console.log('Hi, Mary!') --- (this won't happen)
// if the variable "name" is not equal to "Mary".
// console.log('How do you do?')

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Establish variable "secret" without assigning it a value. 
// Establish variable "code" and assign it a value of 123
// if the variable "code" is equal to 123 (which it is..) change the variable "secret" to 'super'. Also, multiply the variable "code" by 2. (new value = 246)
// if the variable "code" is greater than 250 (which it's not) Console.log('secret')
// The final console.log(secret) will display 'super'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// Establish Variables (isStudent, age, zip) and assign them corresponding value (1, 34, 55407)
// if the variable "isStudent" is true and the variable "zip" is greater than 80000 console.log(`You're a student on the West Coast!`)
// if the variable isStudent is false or the variable "age" is less than 30 console.log('what are your hobbies?')
// if the variable isStudent is true console.log('Welcome to Prime!')
// if you have gotten past the first 3 if statments.. then console.log('Welcome to Prime!')
// FINAL ANWSER = console.log('Welcome to Prime!');



// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}

//4. ANSWER
// colors are mixed up. The variables need to look like this. also, colorTwo needs to be purple. 
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}


//5. ANSWER
// the variable time is a constant and will never change from 4. I think this is acceptable. 
// (temp > 39 || time >= 4) needs to be this instead (temp > 39 && time >= 4) 
//This should look like the following:
let temp = 40;
const time = 4;

if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
};
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}

// 6. ANSWER 
// There seems to be a little extra here.. This is how I would change it. 

let age = 21;
const minAge = 21;

if(age >= minAge) {
  console.log('enter');
}
*/

