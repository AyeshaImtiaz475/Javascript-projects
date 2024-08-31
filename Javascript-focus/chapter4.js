// let marks = [97,82, 75, 64, 36];
// console.log(marks);
// console.log(marks.length); //property

// let heroes = ["ironman", "thor", "hulk", "spiderman"];

// //print all elements of an array
// for(let idx=0; idx<heroes.length; idx++)
// {
//     console.log(heroes[idx]);
// }
//console.log(heroes);
//array is mutable we can change the value of array element 

// for(let ele of heroes)
// {
//     console.log(ele);
// }
// let cities = ["lahore", "karachi", "Islamabad", 'KPK', "kashmire"];
// for(let city of cities)
// {
//     console.log(city.toUpperCase())
// }

// //practice question
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;
// for(let val of marks)
// {
//     sum = sum+val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items = [250, 645, 300, 900, 50];
// let result = 0;

// for(let val of items)
// {
//     result = items[val]*10/100;
// }
// console.log(result);


//practice question 
//firstly find the offer value then (-) the value 
//let items = [250, 645, 300, 900, 50];
//  let i=0;
//  for(let val of items)
//  {
//     let offer = val/10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;
//  }

// let items = [250, 645, 300, 900, 50];
// for(let i=0; i<items.length; i++)
// {
//     let offer = items[i]/10;
//     items[i] = items[i]-offer;
// }
// console.log(items);

// //Arrays Method in jS
// //some of the menthods can be change but other are changed and make a new array 

// let foodItems = ["potato", "apple", "tomato", "orange"];
// foodItems.push("chips", "pizza", "burger");
// console.log(foodItems);
// let deletedItems = foodItems.pop();
// console.log(foodItems);
// console.log(deletedItems);


//convert array into string 
// console.log(foodItems.toString()); 
// //tostring() return the string value but don't create the new string 

// let marvel_heores = ["thor", "spiderman", "ironman"];
// let val = marvel_heores.shift();
// console.log("deleted", val); //deleted the element at the end 

// let dc_heroes = ["superman", "batman"];
// let heroes = marvel_heores.concat(dc_heroes);
// console.log(heroes);

//slice() return a piece of the array -> don'r change in the orginal array

// let marvel_heores = ["thor", "spiderman", "ironman", "autman", "Dr.Strange"];
// console.log(marvel_heores);
// console.log(marvel_heores.slice(1,4));
// console.log(marvel_heores.slice(1));

//splice startIdx, DeleteCount, newElement 
// let arr = [1,2,3,4,5,6,7];
// //arr.splice(2,2,101, 102);
// console.log(arr);
// arr.splice(2,0,101);
// console.log(arr);

//practice questions
//let companies = ["Bloomberg", "Microsoft", 'Uber', "Google", "IBM", "Netflix"];

//remove the first company from the array 
//pop ->delete from end 
//shift -> delete from start
// companies.shift();
// console.log(companies);

//remove uber Na add ola in its place
// companies.splice(2,1,"Ola");
// console.log(companies);

//add amazon at the end 
//unshift-> add the element at the start
//push -> add the element at the end
// companies.push("Amazon");
// console.log(companies);










