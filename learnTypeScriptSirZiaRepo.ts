import a from "./first.js";
import { b, c as d } from "./second.js"
import inquirer from "inquirer";
import chalk from "chalk";
import { log } from "console";


// ***************step00_helloWrold***************
{
    let msg = "Hello World";
    console.log(msg);
}

// ***************step01_strong_typeing***************
{
    // strongly typed syntax
    let a: string = "Pakistan";
    a = "USA";
    let b: number = 9;
    let c: boolean = true;

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
    const i: number = 33;
    const j = "best";

    // use let instead of var everywher, because let has blocked scope
    if (true) {
        let z = 4
        console.log(z);
    } else {
        let z = "string"
        console.log(z);
    }
    // console.log("let: " + z);  Error z is not defined in this scope
}

// ***************step03a_modules***************
{
    // import a from "./first";
    // import {b, c as d} from "./second"

    console.log(a + b + d)
}

// ***************step03b_native_ECMAScript_modules***************
{
    // import a from "./first.js";
    // import {b, c} from "./second.js"

    console.log(a + b + d)
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
    let myname: string | null;
    myname = null;
    console.log(myname);

    myname = "zia";
    console.log(myname);

    myname = 13;        // Error 
    console.log(myname);

    let myAge: string | number;
    myAge = 16;      // narrowing
    console.log(myAge);
    // myAge.toLowerCase();        // Error

    myAge = "Dont Know";         // narrowing    
    console.log(myAge.toLowerCase());
    console.log(myAge.toString());      // common to both types can be called even w/o narrowing

    let newAge = Math.random() > 0.6 ? "Khan" : 60

    // newAge.toLowerCase();       // Error transplier can't narrow

    if (newAge === "Khan") {
        console.log(newAge.toUpperCase());
    }

    if (typeof newAge === "string") {
        console.log(newAge.toLowerCase());
    }

    typeof newAge === "string"
        ? newAge.toUpperCase()      // ok its string
        : console.log(newAge.toFixed());          // ok its number

    let age: number | "died" | "unknown";
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

    yourName?.toLowerCase()         // OK

    // we can also define a type alias

    type RawData = boolean | number | string | null | undefined

    let data: RawData;

    type Id = number | string
    type IdMaybe = Id | undefined | null
}

// ***************step05a_objects***************
{
    let teacher = {
        name: "Zeeshan",
        experience: "10"
    }

    console.log(teacher.name);
    console.log(teacher['experience']);

    // Object Type Declaration
    let student: {
        name: string,
        age: number
    }

    student = {
        name: "Hira",
        age: 30
    }
    console.log(student);
}

// ***************step05b_object_aliased***************
{
    // anonymous

    let teacher: { name: string, exp: number } = {
        name: "Zeeshan",
        exp: 10
    }

    // Alliase Object Type
    type Student = {
        name: string,
        age?: number
    }
    let student: Student = {
        name: "Shafiq",
        age: 40
    }

    console.log(student);

    // Interfaces
    interface Manager {
        name: string,
        subordinates?: number
    }

    let storeManager: Manager = {
        name: "Abdul Samad",
        subordinates: 5
    }
    console.log(storeManager);
}

// ***************step05c_structural_typing_object_literals***************
{
    // These two interfaces are completely transferrable in a structrual type system:
    interface Ball {
        diameter: number;        
    }

    interface Sphere {
        diameter: number;
    }

    let ball: Ball = {diameter: 10};
    let sphere: Sphere = {diameter: 20};

    sphere = ball;
    ball = sphere;

    console.log(ball);
    console.log(sphere);

    interface Tube {
        diameter: number;
        length: number;
    }
    
    let tube: Tube = {diameter: 12, length: 3}

    // tube = ball;        // Error: property length is missing in type ball
    ball = tube
    console.log(ball);
    console.log(ball.diameter);
    console.log(ball.length);

    let myType = {name: "Zia", id:1}
}

