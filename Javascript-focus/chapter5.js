console.log("hello!");
//function -> build in and user defined functions 

//function definition 
// function functionName()
// {
//     //do some work
// }

// function functionName(para1, para2)
// {
//     //do some work
// }

//function definition
// function myFunction()
// {
//     console.log("Welcome to apna college");
//     console.log("We are learning JS");
// };

// //function Call
// myFunction();
// myFunction();
// myFunction();

// function fun(msg)
// {
//     console.log("Hello!.");
// }
// fun("I love Js"); //argument 

// //function -> 2 numbers, sum
// function CalculateSum(x, y) //parameters are local variables -> block scope of function they are alive
// {
//     s = x + y;
//     return s;
// }
// let result = CalculateSum(3,4);
// console.log(result);

//return key word return the value of an one element only 

//arrow function 
//multiplication function
//sum function arrow version
// const arrowSum = (a , b) => {
//     console.log(a+b);
// };

// const arrowMultiple = (c,d) => {
//     console.log(c * d);
// };

// const arrowdivide = (f,g) => {
//     return f /g ;
// };

// const printHello = () => {
//     console.log("Hello world");
// };

//practice Questions 
//1. create a function using the "function" keyword that takes a String 
//as an argument & returns the number of vowels in the string

// function VowelFun(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char ==='u')
//         {
//             count++;
//         }
//     }
//    return count;
// }

// const countVow = (str) => {
//     let count=0;
//     for(const char of str)
//     {
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o'|| char ==='u')
//         {
//             count++;
//         }
//     }
//    return count;
// }

//forEach loop in Arrays
//it is an method 

//A callback is a function passed as an argumnet to other function
// let arr = [1,2,3,4,5];

// arr.forEach(function printValue(val){ //value at each index 
//       console.log(val);
// })

// //parameters 
// let cities = ["lahore", "karachi", "Islamabad"]
// cities.forEach((value, idx, cities) => {
//     console.log(value.toUpperCase(), idx, cities );
//})
//forEach loop are more prefered to used for integer array instead of string

//higher order function/ methods: Take other function as paramters & return the value (forEach function)

//practice Question
// let Arr = [11,33,6,88,9];
// Arr.forEach((ele, index, Arr) => {
//     console.log(ele*ele);
// })

// let nums = [67, 52, 39];
// let calSquare = (num) => {
//   console.log(num * num);
// };
// nums.forEach(calSquare);

// //Some more array methods 
// //map -> create a new arrays with the results of some operation. The value its callback returns are used to form new array.

// //arr.map(callbasckfunx(value,index,array))

// let Nums = [99,76,43,22];
// // Nums.map((el) => {
// //     console.log(el);
// // });

// let newArr = Nums.map((el) => {
//     return val;
// });
// console.log(newArr);

//filter 
//create a new array of elements that give true for a condition/filter 

// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// });

// console.log(evenArr);

// let myArr = [1,3,2,7,8,9];
// let OddArr = myArr.filter((ele) => {
//     return ele%2 === 1;
// });

// console.log(OddArr);

//reduce method -> perform the operation and return the value when we give alot of input
//parameter -> result and value 

// let arr = [1,2,3,4];
// const output = arr.reduce((prev, curr) => {
//     return prev + curr;
// });
// console.log(output);

// let arr= [1,2,3,4];

// const output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);


// //practice questions 
// let marks = [56,105,220,890,345,670];
// let scoreFilter = marks.filter((ele) => {
//     return ele > 90;
// })
// console.log(scoreFilter);


//1. sum of all the number using reducer function 
// let n = prompt("Enter a number :");

// let arr = [];
// for(let i=1; i<=n; i++)
// {
//     arr[i-1] = i; // 1(0),  2(1),  3(2),  4(3) 
// }
// console.log(arr);
// // let sum = arr.reduce((prev, curr) => {
// //     return prev + curr;
// // })

// // console.log(sum);

// let product = arr.reduce((prev, curr) => {
//     return prev * curr;
// });

// console.log(product);

