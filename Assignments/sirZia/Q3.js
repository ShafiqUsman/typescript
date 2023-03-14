"use strict";
/* Question # 3.
Name Cases: Store a person’s name in a variable, and then
print that person’s name in lowercase, uppercase, and titlecase. */
let name1 = "MUHAMMAD shafiq UsMaN sHEIkhaNI";
console.log(`Print string in lower-case: ${name1.toLowerCase()}`);
console.log(`Print string in upper-case: ${name1.toUpperCase()}`);
console.log(`Print string in title-case: ${toTiteleCase(name1)}`);
function toTiteleCase(str1) {
    let strArray = str1.toLowerCase().split(' ').map(ele => { return ele.charAt(0).toUpperCase() + ele.slice(1); });
    return strArray.join(" ");
}
