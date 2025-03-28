// Q1:
// Write a function expression called isEven that checks if a given number is even and returns true if it is, otherwise false.

function isEven(number) {
    if ( number % 2 === 0){
        console.log("True");
    } else{
        console.log("False");
    }
}

// Q2: 
// Write a function declaration named capitalize that takes a string as input and returns the same string with the first letter capitalized.
//add prompt and alert for an input 

function Capitalize(string){
   let dataInput = Prompt("Please Enter your name");
   if (person != null){
    string.charAt(0).toUpperCase()+ string.slice(1);
}else { prompt("You did not enter a name please enter a name");}
}

// Q3:
// Define an arrow function named calculateSquare that takes a number as input and returns its square. use prommpt and alert 

function calculateSquare(){
    const number = prompt("Enter a number:");
    return number * number;
}

alert(calculateSquare());

// Q4:
// Write a function declaration named isPositive that checks if a number is positive (greater than zero) and returns true or false.
function isPositive(anyNumber){
    if (anyNumber >= 0 )
   console.log("True");
   else console.log("False");
}



// Q5:
// Define an arrow function named calculateCircleArea that calculates the area of a circle given its radius as a parameter.
const radius = prompt("what is your radius?");
const calculateCircleArea = (radius) => Math.PI * radius * radius;
console.log(calculateCircleArea);
    

// Q6:
// Write a function expression called isLeapYear that determines if a year is a leap year and returns true or false.
// Found out the calculation is if the year is divisible ny 4 but not by 100 its a leap year , if it is divisible by 400 its a leap year)

function isLeapYear(year){
    if ( year % 100 !== 0 && year % 4 === 0  || year % 400 === 0)
        console.log("True");
    else console.log("False");
}

// Q7:
// Define an arrow function named calculateAge that takes a birth year as a parameter and returns the age.

const calculateAge = birthYear => getFullYear() - birthYear;

// Q8:
// Write a function declaration named calculateHypotenuse that calculates the length of the hypotenuse of a right 
// triangle given the lengths of its two sides.

function calculateHypotenuse (sideOne,sideTwo) {
    return Math.hypot(sideOne, sideTwo);
}

// Q9:
// Write a function named findGreaterNumber that takes two numbers as parameters and returns the greater of the two.
 function findGreaterNumber(){

 } 


// Q10:
// Define a function named calculateBMI that calculates the BMI (Body Mass Index) based on a person's weight (in kilograms) and height (in meters).



// Q11:
// Write a function called calculateSimpleInterest that calculates the simple interest based on the principal amount, interest rate, and time period.



// Q12:
// Write a function named convertMinutesToHours that takes a number of minutes as input and returns the equivalent time in hours and minutes (e.g., "2 hours and 30 minutes").
