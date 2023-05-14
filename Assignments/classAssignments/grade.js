// Task 1: Calculate Students Grade
function grade(marks1, marks2) {
    let avg = (marks1 + marks2) / 2;
    if (avg >= 80) {
        console.log(`you Got grade: "A"`);
    }
    else if (avg >= 70) {
        console.log(`you Got grade: "B"`);
    }
    else if (avg >= 60) {
        console.log(`you Got grade: "C"`);
    }
    else if (avg >= 50) {
        console.log(`you Got grade: "D"`);
    }
    else if (avg >= 40) {
        console.log(`you Got grade: "E"`);
    }
    else if (avg >= 30) {
        console.log(`you Got grade: "F"`);
    }
    else
        console.log(`you Fail"`);
    1;
}
grade(70, 90);
grade(50, 60);
grade(10, 10);
export {};
