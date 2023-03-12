// Sir. Sibtain Assignments
// Assigntment Dated : 11-Mar-2023
var arr = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    var min = 0;
    var max = 0;
    var sortedArray = arr.sort(function (a, b) { return a - b; });
    for (var i = 0; i < (sortedArray.length - 1); i++) {
        min += sortedArray[i];
        max += sortedArray[sortedArray.length - i - 1];
    }
    console.log(min, max);
}
miniMaxSum(arr);
arr = [1, 2, 3, 4, 5];
function sumArrayExceptOneElement(arr) {
    var sum = 0;
    console.log('the given array is', arr);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            sum += arr[j];
        }
        sum -= arr[i];
        console.log("Sum everything except ".concat(arr[i], ", the sum is ").concat(sum));
        sum = 0;
    }
}
sumArrayExceptOneElement(arr);
