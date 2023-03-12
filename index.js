console.log("Hello World!");
// Variable declaration:
console.log("Variable Declaration");
var variable1 = 1;
var variable2 = 2;
var variable3 = 3;
if (variable1 === 1) {
    console.log(variable1);
    if (variable2 === 1) {
        console.log(variable2);
    }
    else {
        console.log(variable3);
    }
}
//"Primitive Data Types"
console.log("Primitive Data Types");
var firstName = 'Ali';
var score = 25;
var isMarried = false;
var unAssigned;
var empty = null;
console.log(firstName, typeof firstName);
console.log(score, typeof score);
console.log(isMarried, typeof isMarried);
console.log(unAssigned, typeof unAssigned);
console.log(empty, typeof empty);
var testVariable = 1;
console.log(testVariable, typeof testVariable);
var a = 2;
// a = '2'; // Error Not assing string to Number
// Atithmetic Operators:
console.log("Atithmetic Operators:");
var n1 = 1;
var n2 = 2;
var str1 = '1';
var str2 = '2';
console.log(n1 + n2); // 3
console.log(str1 + str2); // 12
n1 = 5;
n2 = 2;
console.log("".concat(n1, " + ").concat(n2, " = ").concat(n1 + n2));
console.log("".concat(n1, " - ").concat(n2, " = ").concat(n1 - n2));
console.log("".concat(n1, " * ").concat(n2, " = ").concat(n1 * n2));
console.log("".concat(n1, " / ").concat(n2, " = ").concat(n1 / n2));
console.log("".concat(n1, " ** ").concat(n2, " = ").concat(Math.pow(n1, n2)));
// Assignment Operators:
console.log("Assignment Operators:");
var n = 5;
console.log(n += 5);
console.log(n -= 5);
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
var a1 = "Pakistan";
a1 = "USA";
var b = 9;
var c = true;
// type inference
var e = "USA";
var f = 10.9;
f = 22;
var g = false;
g = true;
// Parameter type annotation:
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet("Shafiq Usman");
// use const where variable values do not change 
console.log(' use const where variable values do not change');
var a2 = 5;
var b2 = 33;
var c2 = 'best';
if (true) {
    var z = 4;
    console.log("z = ".concat(z));
}
else {
    var z = "shafiq";
    console.log(z);
}
// Unions Literals:
console.log("Unions LIterals");
var myName;
myName = null;
console.log(myName);
myName = "zia";
console.log(myName);
// myName = undefined; // Error
// myName = 12; // Error
var myAge;
myAge = 34;
console.log(myAge);
console.log(myAge.toString());
// console.log(myAge.toLowerCAase()); // Error
myAge = "Don't know";
console.log(myAge);
console.log(myAge.toString());
console.log(myAge.toLowerCase());
var newAge = Math.random() > 0.6 ? "Khan" : 60;
console.log(newAge);
if (newAge === "Khan") {
    newAge.toUpperCase();
}
if (typeof newAge === "string") {
    // Type of newAge: string
    newAge.toUpperCase(); // Can be called
}
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
var age;
age = 90;
age = 'died';
age = 'unknown';
// age = 'alive'; // error
console.log(age);
var data;
function printId(id) {
    // console.log(id.toUpperCase()); //error
    if (typeof id === 'string') {
        console.log("Your ID is: " + id.toUpperCase());
    }
    else {
        // here, id is typeOf "number"
        console.log("Your ID is: " + id);
    }
}
// OK
printId(101);
printId('Shafiq-7885');
printId('myId' + 22342);
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
welcomePeople(["Shafiq", "Misbah", "Minhaj"]);
welcomePeople("Shafiq Usman Sheikhani");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("Shafiq"));
console.log(getFirstThree("788500"));
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 96 });
var value = Math.random() < 0.5 ? "a" : "b";
if (value === "a") {
    console.log("You Got Head");
}
else {
    console.log("You Got tail");
}
// Practice in Script
str1 = "string value";
console.log(str1);
