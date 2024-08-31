//loop in Js
//for-loop (let a=1 //initilize , a<=5 //stopping condition, a++ updation)
//Print 1 to 5
// for(let count = 1; count<=5; count++)
// {
//     console.log("Apna College"); //executed five time 
// }
// console.log("Loop has ended...");

//calculate sum of 1 to 5
// let sum=0;
// for(let i=1; i<=5; i++)
// {
//     sum = sum + i;
// }
// console.log("Sum is :", sum);
// console.log("loop has ended");

// for(let i= 1; i<=5; i++)
//     {
//       console.log("i =", i);
//     }
// console.log("Loop has ended...");

//Infinite loop: A loop that never ends 
//while loop

// let i=1;
// while( i <= 5)
// {
//     console.log("Apna College");
//     i++;
// }
// let sum=0;
// let i= 1;
// while(i<=5)
// {
//     sum = sum+ i;
//     i++;
// }
// console.log("Sum :", sum);
// console.log("Loop has been ended");

// do {
// //do some work -> atleast 1 time this loop run
// }
// while()

// let i=20;
// do {
//     console.log("APNA cOLLEGE");
//     i++;
// }
// while(i<=10)

// //for-of loop
// let str = "Apna College ";
// let length = 0;

// for(let i of str)
// {
//     console.log("i =", i);
//     length++;
// }
// console.log("String size is:", length); //13 we don't use this loop for objects

//for in loop work with objects it return the keys of our objects
// let student = {
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// };

// for(let key in student)
// {
//     console.log("Key =", key, "value =", student[key]);
// }

//practice Questions 
//1. Print all even numbers from 0 to 100

// for(let i=0; i<=100; i++)
// {
//      if(i % 2 == 0)
//      {
//         console.log("Even number :", i);
//      }
// }

// let correctValue= 345;
// for(let i=1; i<=10; i++)
// {
//     if(guessingNumber == correctValue)
//     {
//         console.log("Congradulation, for guessing the correct value is :", correctValue)
//     }
//     else{
//         console.log("OOYOO, Don't losse hope.. Just Try again");
//     }
// }

// let correctValue = 25;
// let userNum = prompt("Guess the correct value :");

// while(userNum != correctValue)
// {
//     userNum = prompt("OOHOO, Try gain ");
// }

// console.log("Congradulation, You guess the right number");




//string in JS
//String is a sequence of characters used to represent text
//string length 

// let str1="apnacollege"; //11
// let str2="js";          //2

// //string indices str[0], str[1], str[2]
// console.log(str1[0]);
// console.log(str1[1]);
// console.log(str1[2]);
// console.log(str1[3]);


// //template literals 
// let specialString= `This is a template literal`;
// console.log(typeof specialString);

// let obj = {
//     item:"pen",
//     price: 10,
// };
// let output = `The cost of ${obj.item} is ${obj.price} rupees`; //simplest version 
// console.log(output);
// //here we are adding the placeholders which is called string interpolation
// console.log("The cost of", obj.item, "is", obj.price, 'rupees');

// let newString = `This is another template literal ${1+2+3}`;
// console.log(newString);

// //escape character
// console.log("Apna \n College");
// let str = "Apna\tCollege";
// console.log(str.length);


//String Methods in JS
//thses are build in functions to manipulate a string 

// str.toUpperCase();
// str.toLowerCase();
// str.trim(); -> it remove the white spaces at the start and end 

// let str = "Apna College"; //string method don't change the original string value it generate a new string value 
//string are immutable 

// let str = "             Apna College js         ";
// console.group(str.trim());
//str.slice(start,end?)//return part fo string

// let str = "0987654321";
// console.log(str.slice(1,6)); //ending indice is not included 

// let str1 = "apna";
// let str2 = "college";
// let result = str1.concat(str2);
// //result = result 1 + result 2
// console.log(result);



//to search a value replace two parameter 
// let str = "hellololoh";
// console.log(str.replaceAll("h", "p"));

//replace all 

//charAt
// let str = "ILoveJS";
// console.log(str.charAt(3)); //v

// let userInput = prompt("Enter your name");

// let str = "@";
// result = str + userInput+ userInput.length ;
// console.log(result);

