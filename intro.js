let userID = {
    name: "Shafiq",
    age: 10
};
console.log("Shafiq Usman");
console.log(userID.name);
// console.log(user.email);
function addTwo(val) {
    return val + 2;
    // return "Hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    return name + " " + email + " " + isPaid;
}
console.log(addTwo(22));
console.log(getUpper('shafiq usman'));
console.log(signUpUser('shafiq', 'shafiq.usman@sms-pakistan.com', true));
console.log(signUpUser(123, 'shafiq.usman@sms-pakistan.com', 1235));
let loginUser = (name, email, isPaid = false) => {
    return name + " " + email + " " + isPaid;
};
console.log(loginUser('s', 's@.com', true));
console.log(loginUser('s', 's@.com'));
console.log(addTwo(2));
console.log(addTwo(true));
console.log(typeof loginUser);
console.log(typeof signUpUser);
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(2));
const getHello = (val) => {
    return "string";
};
function hello(val) {
    return val;
}
getHello("HI");
hello("HI");
const heros = ['thor', 'spiderman', 'ironmen'];
console.log(heros.map((hero) => {
    return `hero is ${hero}`;
    // return 1;
}));
// Object in Types-cirpt
console.log('Object in Types-cirpt');
const User = {
    name: "shafiq",
    email: "shfiq@sms.com",
    isActive: true
};
console.log(User);
function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: "shafiq", isPaid: false, email: "shafiq@sms.com" };
console.log(newUser, typeof newUser);
function createCourse() {
    return { name: "reactjs", price: 399 };
}
// Type Alias
console.log("Type Alias");
function createUser1(user) {
    return { _id: " ", name: "", email: "", isActive: true };
}
createUser1({ _id: "", name: "", email: "", isActive: true });
let myUser = {
    _id: "1245",
    name: "sha",
    email: "sha@sms.com",
    isActive: false
};
myUser.email = "sha@gmail.com";
// myUser._id = 'shfiq';
console.log(myUser._id);
// Array
console.log("Array in Java script");
const superHeros = [];
superHeros.push("spiderman");
superHeros.push(1323456);
console.log(superHeros);
const superHeros1 = [];
superHeros1.push("Shafiq", 13434);
superHeros1.push(true, undefined);
console.log(superHeros1);
const HeroPower = [2, 4];
console.log(HeroPower);
const HeroPower1 = [];
const allUsers = [];
allUsers.push({ name: "Shafiq", isActive: true });
allUsers.push({ name: "Misbah", isActive: false });
console.log(allUsers);
const MLModels = [
    [255, 255, 255],
    [36, 24, 60]
];
console.log(MLModels);
// Union Type
console.log("Union Type");
let score = 33;
score = "thirty three";
score = 50;
let shafiq = {
    name: "shafiq",
    id: 334
};
console.log(shafiq);
shafiq = {
    userName: "msusman",
    id: 7885
};
console.log(shafiq);
console.log(typeof shafiq);
function getDbId(id) {
    if (typeof id === 'string') {
        console.log(`DB id is: ${id.toUpperCase()}`);
    }
    else {
        console.log(`DB id is: ${id}`);
    }
}
getDbId(3);
getDbId('Three');
// Unions in Array
console.log("Unions in Arrays");
const data = [1, 2, 3];
const data2 = ['a', 'b', 'c'];
const data3 = [1, 2, 3, 'a', 'b', 'c', true];
console.log(data);
console.log(data);
console.log(data);
let pi = 3.14; // to strict & Fix a value to a varibale
let seatAllotment;
seatAllotment = "aisle";
// tuples (Order of the array really matter in tupples)
console.log("tuples are only part of typeScript not Java Script");
const user2 = ['su', 7]; // its an array
console.log(user2);
let tUser = ['su', 7, true];
tUser.push(true);
console.log(tUser);
// tUser = [false, 7, "su"]
let rgb = [255, 123, 112];
let tUser2 = [7, "shfaiq usman"];
tUser2[1] = 'su.com';
tUser2.push("i am worng, why are you allow me");
console.log(tUser2);
// INTERFACE IN TYPESCRIPT
console.log("\nINTERFACE IN TYPESCRIPT");
const sha = { dbId: 22, email: "shafiq@gmail.com", userId: 2211,
    startTrial: () => { return "trial started"; },
    getCoupon: (couponName, value) => { return 10; }
};
console.log(sha);
export {};
