// Sir. Sibtain Assignments
// // Assigntment Dated : 11-Mar-2023
// let arr = [1,2,3,4,5]
// function miniMaxSum(arr:number []) {
//     let min = 0
//     let max = 0
//     let sortedArray = arr.sort((a,b) => a-b)
//     for (let i=0; i<(sortedArray.length - 1); i++) {
//         min += sortedArray[i]
//         max += sortedArray[sortedArray.length-i-1]        
//     }
//     console.log(min, max)
// }
// miniMaxSum(arr)
// arr = [1,2,3,4,5]
// function sumArrayExceptOneElement(arr:number[]) {
//     let sum = 0
//     console.log('the given array is', arr);
//     for (let i=0; i<arr.length; i++){
//         for (let j=0; j<arr.length; j++) {
//             sum += arr[j]
//         }
//         sum -= arr[i]
//         console.log(`Sum everything except ${arr[i]}, the sum is ${sum}`);
//         sum = 0       
//     }
// }
// sumArrayExceptOneElement(arr)
// Assigntment Dated : 12-Mar-2023
function timeConversion(s) {
    var _a = s.split(':'), h = _a[0], m = _a[1], ss = _a[2];
    if (h === '12') {
        h = '00';
    }
    if (s.at(-2) === "P") {
        h = parseFloat(h) + 12;
    }
    return "".concat(h, ":").concat(m, ":").concat(ss.substring(0, 2));
}
console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));
console.log(timeConversion('12:00:00PM'));
console.log(timeConversion('12:00:00AM'));
console.log(timeConversion('10:00:00AM'));
console.log(timeConversion('10:00:00PM'));
function timeChang(s) {
    var d = new Date('3/12/2023 ' + s);
    console.log(d.getHours() + ":" + d.getMinutes());
}
timeChang('10:20:30 PM');
timeChang('10:20:30 AM');
