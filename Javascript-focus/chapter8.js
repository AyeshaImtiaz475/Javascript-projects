//classes & objects 

//prototypes in jS
//objects + function inside the objects 
const student = {
    fname: "ayesha",
    lname: "imtiaz",
    age: 21,
    cgpa: 3.49,
    degree: "Software Engineering",
    height: '5.2',
    semeter: 6,
    printMarksCurrSemester: function()
    {
        console.log("Marks is :", this.marks); //student.marks
    }
}

//JS obejcts have a special property called prototype (object inside obejcts)

let arr = ["apple", "banana", "mango", "litchi", "oranges"];
console.log(typeof arr);
arr.push("Grapes");
console.log(arr);

const employee = {
    calcTax () {
        console.log("Tax rate is 10%");
    },
};

const AliAhmed =
{
      salary: 50000,
      calcTax()
      {
        console.log("Tax rate is 20%") //if objects & prototype has the same method then the object will win
      }
};

AliAhmed.__proto__ = employee;

//we can set __proto__ (reference to an objects)

//CLASSES
//class is a program-code template for creating obejcts.
//those objects will have the some state(varaiables) & some behaviour(functions) inside it

class ToyotaCar{
    //constructor 
    constructor(color, milega)
    {
        console.log("Creating new object");
        this.color=color;
        this.milega = milega;
    }
    start()
    {
        console.log("start");
    }

    stop()
    {
        console.log("Stop");
    }

    setBrand(brand)
    {
        this.brandName = brand;  //this.brandName -> object property 
    }
    setColor(color)
    {
        this.color = color;
    }
};

//creating an object
let fortuner = new ToyotaCar("fortuner", 10); //constrcutor 
console.log(fortuner);
//fortuner.setBrand("fortuner");
//fortuner.setBrand("fortuner");
//fortuner.setColor("Black");
let lexus = new ToyotaCar("lexus", 12);   //constructor envoke 
console.log(lexus);
//lexus.setBrand("fortuner");


//constructor() method is automatically called 


//Inheritance in JS
//Inheritance is passing down properties & methods from parents class to child class
//extend keyword 

class Parent {
    hello()
    {
        console.log("Hello");
    }
}

class Child extends Parent{ }
let obj = new Child();

//super keyword 

class Person{
    constructor(name)
    {
        console.log("Enter Parent constructor");
        this.species = "homo spanies";
        this.name = name;
    }
    eat()
    {
        console.log("eat");
    }
    // sleep()
    // {
    //     console.log("sleep");
    // }
    // work()
    // {
    //     console.log("Doing nothing...");  //method overriding -> if child & parent have same method, child's method will be used.
    // }
}

class Engineer extends Person{
    constructor(name)
    {
        console.log("Enter child constructor");
        super(name);
         //to invoke the parent constructor 
        //this.branch = branch;
        console.log("Exit child constructor");
    }
    work()
    {
        super.eat();
        console.log("Solve problems, build something");
    }
}

// class Doctor extends Person{
//     work()
//     {
//         console.log("Treat patients");
//     }
// }
// let ayeshaObj = new Engineer();
// let engObj = new Engineer("Chemical Engineer");
let engObj = new Engineer("Shradha");

//Practice Questions 
//1.You are creating a website for your college.Create a class user with 2
//properties, name & email. It also has a method called viewData() that allows user to view website data.

let DATA = "Private Information";
class User{
    constructor(name, email)
    {
        console.log("Enter into Parent Constructor");
        this.name = name;
        this.email=email;
        console.log("Exit from Parent constrcutor");
    }
    viewData()
    {
       console.log("User data displayed :" , DATA);
    }

}

let student1 = new User("ayesha", "ayeshaimtiaz456@gmail.com");
let teacher1 = new User("Dean", "deanabc@email.com");

//2.Create a new class called Admin which interits from User. Add a new method called
//editData to Admin allows it to edit website data.

class Admin extends User{
     constructor(name, email)
     {
        super(name,email);
        console.log("Enter into child constructor");
        console.log("Welcome to Admin class");
        console.log("Exit from child constructor");
    }
    editData()
    {
        
        DATA = "Dean, can edit the student data";
    }
}

let admin1 = new Admin("admin", "admin@college.com");


//Error Handling in js
let a= 5;
let b=10;
console.log("a =", a);
console.log("b =", b);
try{
    console.log("a + b =", a + c);
}
catch(err)
{
    console.log(err);
}
console.log("a + b =", a + b);
console.log("a + b =", a + b);
console.log("a + b =", a + b);
//if you get the error between the no ofnline of code then the other line processing stop


// try{
//     //normal code
// }
// catch{

// }































