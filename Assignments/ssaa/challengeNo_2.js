// Sir. Sibtain Assignments
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
function timeChange(s) {
    var d = new Date('3/12/2023 ' + s);
    console.log(d.getHours() + ":" + d.getMinutes());
}
timeChange('10:20:30 PM');
timeChange('10:20:30 AM');
