// // ***************step05c_structural_typing_object_literals***************
// {
//     // These two interfaces are completely transferrable in a structrual type system:
//     interface Ball {
//         diameter: number;
//     }

//     interface Sphere {
//         diameter: number;
//     }

//     let ball: Ball = { diameter: 10 };
//     let sphere: Sphere = { diameter: 20 };

//     sphere = ball;
//     ball = sphere;

//     console.log(ball);
//     console.log(sphere);

//     interface Tube {
//         diameter: number;
//         length: number;
//     }

//     let tube: Tube = { diameter: 12, length: 3 }

//     // tube = ball;        // Error: property length is missing in type ball
//     ball = tube
//     console.log(ball);
//     console.log(ball.diameter);
//     console.log(ball.length);

//     let myType = { name: "zia", id: 1 }

//     myType = { id: 2, name: "Tom" }
//     // myType = {id:2, name_person: "Tom"}

//     var x: { id: number, [x: string]: any }   // Use of Index Signature
//     x = { id: 1, firstName: "Zia" }

//     // myType = {id: 2, name: "Zia", age:22}   // Error excess property

//     let myType2 = { id: 2, name: "Tom" }

//     myType = myType2

//     let myType3 = { id: 2, name_person: "Tom" }

//     // myType = myType3     name

//     // Stale Object is used object & Other is Fresh Object

//     let myType4 = {id:2, name:"Tom", age: 22}

//     console.log(myType);
//     myType = myType4

//     console.log(myType);
//     console.log(myType4);

// }

interface Ball {
    diameter: number
}

interface Sphere {
    diameter: number
}

let ball: Ball = {diameter: 10}
let sphere: Sphere = {diameter: 20}
console.log(`ball = ${ball.diameter} & sphere = ${sphere.diameter}`);

sphere =  ball;
ball = sphere;
console.log(`ball = ${ball.diameter} & sphere = ${sphere.diameter}`);

interface Tube {
    diameter: number;
    lenght: number
}

let tube: Tube = { diameter: 12, lenght: 3}

ball = tube;
console.log(ball);
ball.diameter = 50;
ball.lenght = 70;
console.log(ball);
