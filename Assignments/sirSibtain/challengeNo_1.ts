// Sir. Sibtain Assignments

// Assigntment Dated : 11-Mar-2023

let arr = [1,2,3,4,5]
function miniMaxSum(arr:number []) {
    let min = 0
    let max = 0
    let sortedArray = arr.sort((a,b) => a-b)
    for (let i=0; i<(sortedArray.length - 1); i++) {
        min += sortedArray[i]
        max += sortedArray[sortedArray.length-i-1]        
    }
    console.log(min, max)
}
miniMaxSum(arr)

arr = [1,2,3,4,5]

function sumArrayExceptOneElement(arr:number[]) {
    let sum = 0
    console.log('the given array is', arr);
        
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr.length; j++) {
            sum += arr[j]
        }
        sum -= arr[i]
        console.log(`Sum everything except ${arr[i]}, the sum is ${sum}`);
        sum = 0       
    }
}

sumArrayExceptOneElement(arr)
