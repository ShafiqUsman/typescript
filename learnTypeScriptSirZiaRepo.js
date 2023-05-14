import a from "./first.js";
import { b, c as d } from "./second.js";
import inquirer from "inquirer";
import chalk from "chalk";
// ***************step00_helloWrold***************
{
    let msg = "Hello World";
    console.log(msg);
}
// ***************step01_strong_typeing***************
{
    // strongly typed syntax
    let a = "Pakistan";
    a = "USA";
    let b = 9;
    let c = true;
    // type inference
    let e = "USA";
    let f = 10.9;
    f = 22;
    let g = false;
    g = true;
}
// ***************step_02_const_let***************
{
    // use const where variable values don't change
    const h = 5;
    const i = 33;
    const j = "best";
    // use let instead of var everywher, because let has blocked scope
    if (true) {
        let z = 4;
        console.log(z);
    }
    else {
        let z = "string";
        console.log(z);
    }
    // console.log("let: " + z);  Error z is not defined in this scope
}
// ***************step03a_modules***************
{
    // import a from "./first";
    // import {b, c as d} from "./second"
    console.log(a + b + d);
}
// ***************step03b_native_ECMAScript_modules***************
{
    // import a from "./first.js";
    // import {b, c} from "./second.js"
    console.log(a + b + d);
}
// ***************step03c_import_inquirer_ECMAScript_module***************
{
    let answers = await inquirer.prompt([
        {
            name: 'age',
            type: "number",
            message: "Enter you Age: "
        }
    ]);
    console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 year old.");
}
// ***************step03d_chalk***************
{
    let answers = await inquirer.prompt([
        {
            name: 'age',
            type: "number",
            message: "Enter you Age: "
        }
    ]);
    console.log(chalk.blue("Insha Allah, in " + (60 - answers.age) + " years you will be 60 year old."));
}
// ***************step04_unions_literals***************
{
    let myname;
    myname = null;
    console.log(myname);
    myname = "zia";
    console.log(myname);
    myname = 13; // Error 
    console.log(myname);
    let myAge;
    myAge = 16; // narrowing
    console.log(myAge);
    // myAge.toLowerCase();        // Error
    myAge = "Dont Know"; // narrowing    
    console.log(myAge.toLowerCase());
    console.log(myAge.toString()); // common to both types can be called even w/o narrowing
    let newAge = Math.random() > 0.6 ? "Khan" : 60;
    // newAge.toLowerCase();       // Error transplier can't narrow
    if (newAge === "Khan") {
        console.log(newAge.toUpperCase());
    }
    if (typeof newAge === "string") {
        console.log(newAge.toLowerCase());
    }
    typeof newAge === "string"
        ? newAge.toUpperCase() // ok its string
        : console.log(newAge.toFixed()); // ok its number
    let age;
    age = 40;
    age = 'died';
    age = "unknown";
    age = 'living';
    console.log(age);
    let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
    if (yourName) {
        console.log(yourName.toLowerCase());
    }
    // yourName.toLowerCase()      // Error: Object is possible "undefined"
    yourName?.toLowerCase(); // OK
    let data;
}
// ***************step05a_objects***************
{
    let teacher = {
        name: "Zeeshan",
        experience: "10"
    };
    console.log(teacher.name);
    console.log(teacher['experience']);
    // Object Type Declaration
    let student;
    student = {
        name: "Hira",
        age: 30
    };
    console.log(student);
}
// ***************step05b_object_aliased***************
{
    // anonymous
    let teacher = {
        name: "Zeeshan",
        exp: 10
    };
    let student = {
        name: "Shafiq",
        age: 40
    };
    console.log(student);
    let storeManager = {
        name: "Abdul Samad",
        subordinates: 5
    };
    console.log(storeManager);
}
// ***************step05c_structural_typing_object_literals***************
{
    let ball = { diameter: 10 };
    let sphere = { diameter: 20 };
    sphere = ball;
    ball = sphere;
    console.log(ball);
    console.log(sphere);
    let tube = { diameter: 12, length: 3 };
    // tube = ball;        // Error: property length is missing in type ball
    ball = tube;
    console.log(ball);
    console.log(ball.diameter);
    console.log(ball.length);
    ball.diameter = 50;
    ball.length = 70;
    console.log("I am a ball object", ball);
    tube = ball;
    console.log("I am a tube object", tube);
}
// ***************step05d_nested_object***************
{
    const myBook = {
        author: {
            firstName: "Zia",
            lastName: "Khan",
        },
        name: "My best Book"
    };
    console.log("My first book name is: ", myBook);
    console.log(myBook.author.lastName);
}
// ***************step05e_intersection_types***************
{
    let obj1 = {
        student_id: 3232,
        name: "rita",
        teacher_id: 7873,
        teacher_name: "seema"
    };
    console.log(obj1);
    let obj2 = {
        student_id: 234,
        name: "hassan",
        teacher_id: 2,
    };
    console.log(obj2);
}
// ***************step05f_any_unknown_never_types***************
{
    // Any 
    let myVal;
    myVal = true;
    myVal = 42;
    myVal = "Hello World!";
    myVal = [];
    myVal = {};
    myVal = Math.random;
    myVal = null;
    myVal = undefined;
    myVal = () => { console.log("Hey again!"); };
    myVal();
    // unknown
    let value;
    value = true;
    value = 43;
    value = "shafiq";
    value = [];
    value = {};
    value = Math.random;
    value = null;
    value = undefined;
    value = () => { console.log("Hey I am Undefined function"); };
    // Assigning a value of type unknown to variables of others types
    let value1;
    const val1 = value1;
    const val2 = value1;
    const val3 = value1;
    const val4 = value1;
    const val5 = value1;
    const val6 = value1;
    const val7 = value1;
    const val8 = value1;
    console.log(val3, val4, val5, val6, val7, val8);
    // Never
    // Function returning never must not have a reachable end point
    function error(message) {
        throw new Error(message);
    }
    // inferred return type is never
    function fail() {
        return error("Something wrong Failed");
    }
    // fail()
    // Function returning never must not have a reachable end point
    function infiniteLoop() {
        while (true) { }
    }
}
// ***************step06_explict_casting***************
{
    let myName = "Zia";
    console.log(myName.length);
    console.log(myName);
    let name = myName;
}
// ***************step07a_enum***************
{
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ; // indexing starts with 0
    let c = Color.Green;
    let Color1;
    (function (Color1) {
        Color1[Color1["Red"] = 1] = "Red";
        Color1[Color1["Green"] = 2] = "Green";
        Color1[Color1["Blue"] = 3] = "Blue";
    })(Color1 || (Color1 = {}));
    ;
    let c1 = Color1[2];
    let Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 10] = "Red";
        Color2[Color2["Green"] = 20] = "Green";
        Color2[Color2["Blue"] = 30] = "Blue";
    })(Color2 || (Color2 = {}));
    ; // we can assing values to all index
    let c2 = Color2['Blue'];
    console.log(c, c1, c2);
    let myColor = Color[2];
}
;
let c = 1 /* Color.Green */;
// let myColor = Color[2];     // Not allow with const enums but without const we can use like it
let myColor = 1 /* Color["Green"] */;
console.log(myColor);
;
// let colorName: String = Color[2];
// ***************step07b_const_enum***************
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    else {
        return padding + input;
    }
}
console.log(padLeft(20, 'Shafiq'));
console.log(padLeft("Hello", 'Shafiq'));
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
    else {
        console.log("do nothing");
    }
}
printAll(["Shafiq Usman", " hil ", "new"]);
printAll("Shafiq Usman");
printAll(null);
