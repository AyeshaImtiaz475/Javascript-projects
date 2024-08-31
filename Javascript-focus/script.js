//Operators in JS ( Used to perform some operation on data)
//Arithemetic Operators 
//+ , -, *, / 

// let a= 5;
// let b=10;
// let c= a + b;
// console.log(" Value of a + b :" , c);

// let d= 5;
// let e=5;
// let f= e - d;
// console.log(" Value of d - e :" , f);
// console.log("Value of d * e:", d*e);
// console.log("Value of d / e:", d/e);

// //modulus % -> remainder 
// console.log("Value of d % e:", d%e);

// //exponentiation -> power (**)
// console.log("Value of d ** e:", d ** e);

//till now these all are the arithematic opertaor whose who need operator + oprand also

//Unary operators 
//Increment , Decrement 

// let a= 5;
// let b=10;

// a = a+ 1;
// console.log(" value of a :" , a);
// a = a-1;
// console.log("Value of a:", a);
// //a++ (post) , a--(post), ++a(pre), --a(pre)
// console.log("++a" , ++a);
// console.log("Value of a:", a);

// console.log("a--", a--);
// console.log("Value of a:", a);

// console.log("--a" , --a);
// console.log("Value of a:", a);


//Assignment Operator =, +=, -=, *=, &=, **=

// let a= 5;
// let b=10;
// a+=4;
// console.log("Value of a :", a);//9
// a-=4;
// console.log("Value of a:", a);

// a/=4;
// console.log("value of a:", a);

// a%=4;
// console.log("Value of a:", a);

// a **=4;
// console.log("Value of a:", a);

//Comparsion operator 
// let a= 5;
// let b=10;
// console.log("a == b:", a == b);
// console.log("a != b:", a != b);

// let c= 2;
// let d="2";
// console.log("c == d", c==d);
// //==== strict version : it check the datatype + value 
// console.log("value of c === d", c === d);

// let x= 3;
// let y= 2;
// console.log(" 3 > 2", x> y);
// console.log("3<2", x < y);
// console.log(" 3 >= 2", x >= y);
// console.log("3 <= 2", x <= y);

//logical operator  (false | true) &&, || , !
//logical and 
// let a= 6;
// let b=5;

// // let cond1 = a > b; //true 
// // let cond2 = a != 6; //true 
// // console.log("cond1 && cond2 =", cond1 && cond2);
// // console.log("cond1 || cond2 =", cond1 || cond2); //pipe symbol 

// // //logical not  (!)
// // console.log("!(6 < 5) =" , !(a == 6)); //true 

// //conditional statments 
// //if statments 

// let age = 16;
// if( age > 18)
// {
//     console.log("You can Vote");
// }
// if( age < 18)
// {
//     console.log("You cannot vote");
// }

// //if-else statments 
// let mode = "dark";
// let color;
// if(mode ==="dark")
// {
//     color="black";
// }
// else
// {
//     color="white";
// }
// console.log(color);

// //find out the number is odd /even
// let num = 12;
// if(num % 2 == 0)
// {
//     console.log("Num is :" , num , "is even");
// }
// else
// {
//     console.log("Num is :" , num , "is odd");
// }

//else if statments
// let mode = "dark";
// let color;

// if(mode === "dark")
// {
//     color="black";
// }
// else if(mode === "blue")
// {
//     color="pink";
// }
// else 
// {
//     color="white";
// }
// console.log(color);

//ternay operator (only single operant)
// let age = 15;
// //let result = age >= 18 ? "adult" : "not adult";
// //console.log(result);
// let result = age >= 18 ? console.log("adult") : console.log("not adult");


//Practice Questions 
//1. Multiple of five 
// let Input = prompt("Enter your number");
// if(Input % 5 == 0)
// {
//     console.log("Number is :", Input, "multiple of 5");
// }
// else{
//     console.log("Number is :", Input, "is not a multiple of 5");
// }

// //2. Write a code which can give grades to stduents accrding to tehir scores.
// let score = prompt("Enter your score");
// if(score >= 90 && score<= 100)
// {
//     console.log("Your grade is : A");
// }
// else if(score >=70 && score <=89)
// {
//     console.log("Your grade is B");
// }
// else if(score >=60 && score<= 69)
// {
//     console.log("Your grade is : C");
// }
// else if(score>=50 && score <=59){
//     console.log("Your grade is D");
// }
// else{
//     console.log("Your grade is F");
// }