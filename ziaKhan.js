"use strict";
/*{
console.log("Hello World!");

// Variable declaration:
console.log("Variable Declaration");
var variable1 = 1; var variable2 = 2; var variable3 = 3;
if(variable1 ===1) {
    console.log(variable1);
    if(variable2===1){
        console.log(variable2);
    }  else {
        console.log(variable3);
    }
}

//"Primitive Data Types"
console.log("Primitive Data Types");
let firstName = 'Ali';
let score = 25;
let isMarried = false;
let unAssigned;
let empty = null;
console.log(firstName, typeof firstName);
console.log(score, typeof score);
console.log(isMarried, typeof isMarried);
console.log(unAssigned, typeof unAssigned);
console.log(empty, typeof empty);

let testVariable = 1;
console.log(testVariable, typeof testVariable);

let a = 2;
// a = '2'; // Error Not assing string to Number

// Atithmetic Operators:
console.log("Atithmetic Operators:");
let n1 = 1;
let n2 = 2;
let str1 = '1';
let str2 = '2';
console.log(n1 + n2); // 3
console.log(str1 + str2); // 12

n1 = 5;
n2 = 2;
console.log(`${n1} + ${n2} = ${n1 + n2}`);
console.log(`${n1} - ${n2} = ${n1 - n2}`);
console.log(`${n1} * ${n2} = ${n1 * n2}`);
console.log(`${n1} / ${n2} = ${n1 / n2}`);
console.log(`${n1} ** ${n2} = ${n1 ** n2}`);
 
// Assignment Operators:
console.log("Assignment Operators:");
let n = 5;
console.log(n +=5);
console.log(n -=5);

// Comparison Operators:
console.log("Comparison Operators:");
n = 5;
console.log(n == 5); // true
console.log(n === 5); // true
console.log(n != 5); // false
console.log(n > 8); // false
console.log(n < 8); // true
console.log(n >= 8); // false
console.log(n <= 8); // true

// Logical Operators:
console.log("Logical Operators:");
n = 5;
console.log(n >= 5 && n < 10); // true
console.log(n > 5 && n < 10); // false
console.log(n >= 5 || n < 10); // true
console.log(n > 5 || n < 10); // true
console.log(!(n < 10)); // false
console.log(!(n > 10)); // true

// strongly typed syntax
let a1 : string = "Pakistan";
a1 = "USA"

let b: number = 9;
let c: boolean = true;

// type inference

let e = "USA";
let f = 10.9;
f = 22;
let g = false;
g = true;

// Parameter type annotation:
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Shafiq Usman");

// use const where variable values do not change
console.log(' use const where variable values do not change');

const a2 = 5;
const b2 : number = 33;
const c2 = 'best';

if (true) {
    let z = 4
    console.log(`z = ${z}`);
} else {
    let z = "shafiq";
    console.log(z);
}

// Unions Literals:
console.log("Unions LIterals");

let myName: string | null;

myName = null;
console.log(myName);

myName = "zia";
console.log(myName);

// myName = undefined; // Error
// myName = 12; // Error

let myAge: string | number;

myAge = 34;
console.log(myAge);
console.log(myAge.toString());
// console.log(myAge.toLowerCAase()); // Error

myAge = "Don't know";
console.log(myAge);
console.log(myAge.toString());
console.log(myAge.toLowerCase());

let newAge = Math.random() > 0.6 ? "Khan" : 60;
console.log(newAge);

if (newAge === "Khan") {
    newAge.toUpperCase();
}

if(typeof newAge === "string"){
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number

let age: number | "died" | 'unknown';

age = 90;
age = 'died';
age = 'unknown';
// age = 'alive'; // error
console.log(age);

// we can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData;

// we can even combine them
type Id = number | string;
type IdMaybe = Id | undefined | null;


function printId(id: number | string) {
    // console.log(id.toUpperCase()); //error
    if (typeof id === 'string') {
        console.log("Your ID is: " + id.toUpperCase());
    } else {
        // here, id is typeOf "number"
        console.log("Your ID is: " + id);
    }
}

// OK
printId(101);
printId('Shafiq-7885');
printId('myId' + 22342);

function welcomePeople (x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    } else {
        console.log("Welcome lone traveler " + x);
    }
}

welcomePeople(["Shafiq", "Misbah", "Minhaj"]);
welcomePeople("Shafiq Usman Sheikhani");

function getFirstThree(x: number[] | string) {
    return x.slice(0,3);
}

console.log(getFirstThree("Shafiq"));
console.log(getFirstThree("788500"));

type Point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 96 });
 
  const value = Math.random() < 0.5 ? "a" : "b";
  if (value === "a") {
    console.log("You Got Head");
  } else {
    console.log("You Got tail");
  }

// Practice in Script

str1 = "string value";
console.log(str1);

} */
// let heading = document.createElement('h1')
// h1 = "Typescript"
// let heading2 = document.createElement('h2')
// let p1 = document.createElement('p')
// let msg: string = "Hello Everyone!"
// let msg2 = 'Welcome to TypeScript World!, Teach by Panaverse Dao "Sir. Zia Khan"'
// {
//     let p:any = 'Variables'
// heading.textContent = msg
// heading2.textContent = msg2
// p1.textContent = p
// document.body.appendChild(heading)
// document.body.append(heading2)
// document.body.append(p1)
// let myName: string | null
// myName = null
// document.write(`myName = <b>${myName}</b><br>`)
// myName = "Shafiq Usman Sheikhani"
// document.write(`myName = <b>${myName}</b><br>`)
// let myAge: string | number = 23 // narrowing to number
// document.write(`myAge = <b>${myAge}</b><br>`)
// myAge = "don't know"
// document.write(`myAge convert to toLowerCase() = <b>${myAge.toLowerCase()}</b><br>`)
// let newAge = Math.random() > 0.6 ? "khan" : 60
// if (typeof newAge === 'string') {
//     newAge = newAge.toUpperCase()
// }
// typeof newAge === 'string' ? newAge.toUpperCase() : newAge.toFixed()
// document.write(`newAge by Math.random() generated = <b>${newAge}</b><br>`)
// let age: number | 'died' | 'unknown'
// age = 90            // ok
// age = 'died'        //ok
// age = 'unknown'     //ok
// age = 'sixty'      // error
// let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined
// if (yourName) {
//     yourName.toUpperCase()
// }
// document.write(`your name is : ${yourName?.toUpperCase()}`)
// }
// use of Union Types 
// {
// document.write("<b><hr> Union Types:</b><br>" )
// document.write("<i>A union type is a type formed from two or more other types,</i>" )
// document.write(`<br><b>Type system </b>allows you to build new types out of existing ones using a large variety of operators. following are some example, <ul><li>type RawData = boolean | number | string | null | undefined</li><li>type Id = number | string</li><li>type IdMaybe = Id | null</li></ul>let data: RawData<br> let id = IdMaybe<br>`)
// type RawData = boolean | number | string | null | undefined
// type Id = number | string
// type IdMaybe = Id | null
// let data: RawData
// function printId(id: Id) {
//     document.write(`Your ID is: ${id} <br>` )
// }
// printId(42)
// printId('shafiq1234')
// function welcomePeople(x:string[] | string) {
//     if (Array.isArray(x)) {
//         document.write(`Hello, ${x.join(' and ')}<br>`)
//     } else {
//         document.write(`Welcome lonely trveler ${x}<br>`)
//     }
// }
// welcomePeople(['shafiq', 'misbah', 'minhaj'])
// welcomePeople('Sir. Zia Khan')
// }
// document.write("<hr>")
// {
// document.write(`<b><u>Interfaces</b></u><br>`)
// document.write(`<i>An interface declaration is another way to name an object type.<br></i> Almost all features of an interface are available in type, the <b>key distinction is that a type cannot be re-opened to add new properties vs an interface whiche is alway extendable</b><br>
// Interface Animal {<br>
//     name: string <br>
// } <br>
// interface Bear extends Animal { <br>
//     honey: boolean <br>
// }<br>
// const bear = getBear() <br>
//     bear.name <br>
//     bear.honey <br>
// interface Window { <br>
//     title: string <br>
// }<br>
// interface Window {              // not allowed in type alias <br>
//     ts: TypeScriptAPI <br>    
// }<br>
// // `)
// }
// Objects
// document.write("<hr><b><u>Objects</b></u><br>")
// let teacher = {
//     name: "Zeeshan",
//     exp: "10"
// }
// document.write(teacher.name, '<br>');
// document.write(teacher["exp"], '<br>');
// // tyep Declaration
// let englishMarks = 0
// let mathMarks = 0
// let avg = (englishMarks + mathMarks) / 2
// // Task 1: Calculate Students Grade
// function grade(marks1:number, marks2:number) {
//     let avg = (marks1 + marks2) / 2
//     if (avg >= 80) {
//         console.log(`you Got grade: "A"`);        
//     } else if (avg >=70) {
//         console.log(`you Got grade: "B"`);
//     } else if (avg >= 60) {
//         console.log(`you Got grade: "C"`);
//     } else if (avg >= 50) {
//         console.log(`you Got grade: "D"`);
//     } else if (avg >= 40) {
//         console.log(`you Got grade: "E"`);
//     } else if (avg >= 30) {
//         console.log(`you Got grade: "F"`);
//     } else 
//     console.log(`you Fail"`);    1
// }
// grade(70,90)
// grade(50,60)
// grade(10,10)
// // Task 2: Array Manipulation Program
// let fruits = ['apple', 'banana', 'cherry', 'mango']
// console.log(fruits)
// fruits.push("Orange")       // append Orange in the end of the array
// console.log(fruits)
// fruits.unshift('Grapes')    // append Grapes in the start of the array 
// console.log(fruits)
// fruits.splice(3,1, "Water Mellon")  // remove Cherry from index 3 and replace it with Water-Mellon
// console.log(fruits)
// // Task 3: Discount Amount for a Product
// function inovice(price:number, disc:number) {
//     let discount = price * (disc/100)
//     if (disc >= 50) {
//         console.log("error: You have somthing wrong with your discout voucher, try again...")
//     } else {
//         console.log(`Item Discription      Discount           Net Amount`);
//         console.log(`================      ========           ==========`);
//         console.log(`Pizza deal 1          ${disc}% `);
//         console.log(`Rs.${price.toFixed(2)}            Rs.-${discount.toFixed(2)}          Rs.${(price-discount).toFixed(2)}`);        
//     }
// }
// inovice(1000, 30)
// inovice(1000, 50)
// inovice(1000, 20)
// inovice(1000, 100)
// // Factorial of a number
// function factor(num:number):number {
//     let result = 1
//     for (let i = 1; i<=num; i++) {
//         result = result * i
//     }
//     console.log(`Factorial of ${num} = ${result}`)
//     return result
// }
// factor(5)
// factor(4)
// factor(10)
// Classes * Constructor is optional, a class does't nee to have a constructor.
// class Foo {}
// let f = new Foo()
// console.log(f);
// class Point {
//     x: number;
//     y: number;
//     constructor(x:number, y:number) {
//         this.x = x;
//         this.y = y
//     }
//     add(point: Point) {        
//         return new Point(this.x + point.x, this.y + point.y)
//     }
// }
// var p1 = new Point(0, 10)
// var p2 = new Point(10,20)
// var p3 = p1.add(p2)
// console.log(p1);
// console.log(p2);
// console.log(p3);
// // Class Inheritance
// class Point3D extends Point {
//     z: number
//     constructor (x:number, y:number, z:number) {
//         super(x, y)
//         this.z = z
//     }
//     add(point: Point3D) {
//         var point2D = super.add(point)
//         return new Point3D(point2D.x, point2D.y, this.z + point.z)  
//     }
// }
// let p4 = new Point3D(p1.x, p1.y, 25)
// let p5 = new Point3D(p2.x, p2.y, 45)
// let p6 = p4.add(p5)
// console.log(p4);
// console.log(p5);
// console.log(p6);
// // Class Statics Properties, which are shared by all instances of the class
// class Something {
//     static instances = 0;       // we also have static functions
//     constructor() {
//         Something.instances++
//     }
// }
// let s1 = new Something()
// let s2 = new Something()
// console.log(Something.instances)
// s2 = new Something()
// s2 = new Something()
// s2 = new Something()
// console.log(Something.instances);
// // Access Modifiers public, private & protected
// class FooBase {
//     public x: number
//     private y:number
//     protected z:number
// }
// var foo = new FooBase()
// foo.x   // ok:      public
// // foo.y   // error:   private
// // foo.z   // error:   protected
// class FooChild extends FooBase {
//     constructor() {
//         super()
//         this.x  // ok:      public 
//         // this.y  // error:    private
//         this.z  // ok:      protected
//     }
// }
// // Class Abstract * abstract classes can't be directly instantiated. Instead the user must create some class tha inherits from the abstract class
// // similarly abstract memeber can't be directly acces and a child class must provide the functionality.
// abstract class FooCommand { abstract execute(): string}
// class BarCommmand extends FooCommand {
//     execute() {
//         return `command bar executed`
//     }
// }
// // let fc1 = new FooCommand()   // error:   Can't create an instance of abstract class
// let fc2 = new BarCommmand()
// console.log(fc2.execute())
// Arrow Functions
// var inc = (x) =>x++
// console.log(inc(3));
// function Person(age:number) {
//     this.age = age
//     this.growOld = () => {
//         this.age++
//     }
// }
// var person = new Person(1)
// setTimeout(person.growOld,1000)
// setTimeout(function() {console.log(person.age); }, 2000)
// let foo = 123
// if (true) {
//     let foo = 456
// }
// console.log(foo);
// Object & Array Destructuring
// var rect = {x: 0, y:10, w: 15, h:20}
// var {x, y, w, h} = rect
// console.log(x, y, w, h);
// x= 5, y=12, w=17, h=22
// console.log(x, y, w, h);
// console.log(rect);
// rect.x = 10
// console.log(x, rect.x);
// // Object Destructuring with rest
// var {w, x, ...remaining} = {w:1, x:2, y:3, z:4}
// console.log(w, x, remaining)
// const point3D = {x:1, y:2, z:3}
// const {z, ...point2D} = point3D
// console.log(point2D)
// // How to swap two variables without using a third one?
// var x = 1, y = 2;
// console.log(x, y);
// [x, y] = [y, x]
// console.log(x, y);
// let [a, b, ...others] = ['shafiq', 'zia', 'daniyal', 'adil']
// console.log(a, b, others)
// // Array Destructuring with ignoes
// var [x, , y, , ...etc] = [1, 2, 3, 4, 5, 6]
// console.log(x, y, etc);
// // Destructuring can make your code more readable and maintainable by reducing the line count and making the intent clear.
// // Spread Operator
// function foo(x:number, y:number, z:number) {
//     x++, y++, z++
//     return x+y+z
// }
// var args = [0, 1, 2]
// console.log(foo(...args));
// // Array Assignment, the spread operator allow you to easily place an expanded version of an array into another array.
// var list = [1, 2]
// list = [...list, 3, 4]
// console.log(list);
// list = [0, ...list]
// console.log(list);
// // Object Spread, We can also spread an object into another object
// let p2D = {x:1, y:2}
// let p3D = {...p2D, z:3}
// console.log(p2D, p3D)
// p3D = {x:5, z:4, ...p2D}
// console.log(p2D, p3D);
// let rec = {...p2D, x:5, w:10, h:20}
// console.log(p2D, rec)
// let odd = [1, 3, 5, 7, 9]
// let even = [2, 4, 6, 8, 10]
// let oddEven = [...odd, ...even]
// console.log(oddEven);
// Generate Random Numbers Math.rando()
// function getRandomInt(max:number) {
//     console.log(Math.floor(Math.random() * max));    
// }
// getRandomInt(100)
// Getting a random number b/w two values
// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min) + min)
// }
// console.log(getRandom(50,55));
// function getRandomNum(min, max) {
//     min = Math.ceil(min)
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min) + min)  // max is exclusive & min is inclusive    
// }
// console.log(getRandomNum(2,5))
// function getRandomNumInc(min, max) {
//     return Math.floor(Math.random() * (max-min + 1) + min)  // both limits are inclusive
// }
// console.log(getRandomNumInc(2,5))
// console.log(getRandomNumInc(1,7))
let drawlist = [];
function committeDraw(max) {
    let draw = 0;
    while (drawlist.length !== max) {
        draw = Math.ceil(Math.random() * max);
        if (!drawlist.includes(draw)) {
            drawList.push(draw);
        }
    }
}
committeDraw(7);
console.log(drawlist);
// Arrays
// const fruits = []
// fruits.push('banana', 'apple', 'peach')
// console.log(fruits.length);
// fruits[5] = 'mango'
// console.log(fruits.length);
// console.log(fruits);
// console.log(Object.keys(fruits));
// // Increasing the lenght of an array
// fruits.length = 10
// console.log(fruits);
// console.log(Object.keys(fruits));
// console.log(fruits.length);
// console.log(fruits[7]);
// // Decreasing the lenght
// fruits.length = 3
// console.log(fruits);
// const arr1 = ['a', 'b', 'c']
// const arr2 = ['d', 'e', 'f']
// const arr3 = arr1.concat(arr2, arr1, arr2, 'e', 'i','j', [1, 2, 3])
// console.log(arr3);
// // Concatenaating Nasted Arrays
// const num1 = [[1]]
// const num2 = [2, [3]]
// const num3 = num1.concat(num2)
// console.log(num3, num3.length);
// num1[0].push(4)
// num2[1].push(5)
// console.log(num3);
// console.log();
// num1.push(6)
// num2.push(7)
// console.log(num1);
// console.log(num2);
// console.log(num3);
