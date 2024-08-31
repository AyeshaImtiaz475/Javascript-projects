console.log("Welcome to JavaScipt basics");
console.log("Ayesha Imtiaz");

// Variables in JS
//Variables are containers for data & its value can be changed with the passage of time
//Variables names are case sensitive "a" & "A"
//only letters, digits, $ and _underscore is allowed (no even space)
//Only a letter, underscore and $ the first letter 
//Reserved words cannot be variable names
//Convention in js:
//fullName - camel case
//full-name -> kabab case
//FullName -> Snake case

Fullname = "Robina Shaheen";
console.log(Fullname);

age = 24;
console.log("My age is :" + age );

price = 99.99;
console.log("Price of shoes :" + price);

x=null;//pata ha value kai ha but khali ha 
console.log(x);

y=undefined; //pata hi nahi ha value kai ha 
console.log(y);

//boolean: true and false
isFollow = true;
console.log(isFollow);

Fullname = 223455;
console.log(Fullname);

//assignment operator is used to store the right side values into left side.
// 1. fullname = "Muqaddas";
// FULLNAME = "Imtiaz";
// console.log(fullname);
// console.log(FULLNAME);

//generate error 
//full name = 
//123fullName 

_lastName = "Diana Princeses";
$lastName = "Wonder Women";
console.log(_lastName);
console.log($lastName);

//let,const & var 
//Var: varaible can be re-declared & upadted. A global scope variable. (x) Used till 2015 then es6 came 
//let: Variable cannot be re-decalred but can be updated. A block scope variable
//const: Variable cannot be redeclared and updated. A block scope variable

let name = "Saba";
let myage = 21;
let totalprice= 10000;
console.log(totalprice);
console.log(myage);

var Age = 24;
var Age = 59;
console.log(Age); //59

const totalproject = 20;
console.log(totalproject);
//totalproject = 30;
//console.log(totalproject); //error: assignment to constant variable 


//if you declare the constant after that you don't provide the value it is undefined
//let y;
//console.log(y); //null
//const x;
//console.log(x); //Missing initializer in const declartion 
//var z ;
//console.log(z); //cannot access the value of z 

//scope 
{
    let channel = "Apnacollege";
    console.log(channel);
}
//console.log(channel); cannot access the value ouside the scope 


//DATA TYPES IN JS
//Primitive data types(7) & Non-Primitive data types (objects)
//Primitive data types: Numbers , null, boolean, string, undefined,BigInt, Symbol

let NewPrice = 134.56;
console.log(NewPrice); //typeof(NewPrice) -> number

let UniqueName = "Captain Marvel";
console.log(UniqueName); //typeof(UniqueName) -> string

let Follow = true;
console.log(Follow); //boolean

let notes;
console.log(notes); //undefined

let data = BigInt('123');

//Non-primitive data type: 
//objects -> Collection of values 
 //array 

 const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
 };
console.log(student.fullName);
console.log(student["cgpa"]);
//access the key: obj.keyvalue 

//how to assign the value in object
student["age"] = student["age"] + 1;
console.log(student["age"]);

student["name"] = "Rahul Sharma";
console.log(student["name"]);
//In object we used const variable which cannot be change but we can update the objects keys 


//Practice Questions
//name, rating, deal, price , offer
const product = {
  title: "Ball Pen",
  rating: 4,
  offer: 5,
  price: 270
};
console.log(product);

//name, isFollow, Message, No_of_posts, followers, following, description
const Profile = {
    FullName: "shradhaKapra",
    isFollow: true,
    Mesage: "Hello, How are you!",
    No_posts: 195,
    followers: 569,
    following: 4,
    description: "Enterpreneur | Apna College | Ex-Microsoft DRDO | To educate someone is the highest privilege"
};
console.log(Profile);




