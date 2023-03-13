// Sir Sibtain Assignments
// Challenge NO. 3

function plusMinus(arr:number[]) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
for (let i=0; i<arr.length; i++) {
    if (arr[i] > 0) {
        positive++
    } else if (arr[i] < 0) {
        negative++
    } else {
        zero++
    }
}
console.log(positive, negative, zero);

console.log((positive/arr.length).toFixed(6));
console.log((negative/arr.length).toFixed(6));
console.log((zero/arr.length).toFixed(6));
}

let arr: number[] = [-1, -1, 0, 1, 1]
plusMinus(arr)
plusMinus([-4, 3, -9, 0, 4, 1])

export {}
