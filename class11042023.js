// // ***************step05c_structural_typing_object_literals***************
// {
//     // These two interfaces are completely transferrable in a structrual type system:
//     interface Ball {
//         diameter: number;
//     }
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
console.log(`ball = ${ball.diameter} & sphere = ${sphere.diameter}`);
sphere = ball;
ball = sphere;
console.log(`ball = ${ball.diameter} & sphere = ${sphere.diameter}`);
let tube = { diameter: 12, lenght: 3 };
ball = tube;
console.log(ball);
ball.diameter = 50;
ball.lenght = 70;
console.log(ball);
export {};
