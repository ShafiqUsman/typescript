// I want to draw a lucky draw or committee with a given number and store the result in an array without duplications so no one can get double prize and everyone get the chance just like a committee
let drawList = []; // Final List of Prizes who get 1st and so on...
function committeeDraw(max) {
    let draw = 0;
    while (drawList.length !== max) {
        draw = Math.ceil(Math.random() * max);
        if (!drawList.includes(draw)) {
            drawList.push(draw);
        }
    }
    return drawList;
}
console.log(committeeDraw(50000));
export {};
