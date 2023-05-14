let firstName = 'Shafiq'
let lastName = 'Usman'

let person = {
    firstName,
    lastName
}

// console.log(person);
// console.log(person.firstName);
// console.log(person.lastName);

function createPerson(firstName:string, lastName:string) {
    let fullName = firstName + " " + lastName
    return {firstName, lastName, fullName} 
}

let p = createPerson("Minhaj", 'Maaz')
console.log(p.firstName);
console.log(p.lastName);
console.log(p.fullName);

console.log(p);

function createPerson2(firstName:string, lastName:string, age:number) {
    let fullName = firstName + " " + lastName
    return {
        firstName,
        lastName,
        fullName,
        isSenior(){
            return age>60 ? "Senior Citizen" : age
        }}
}

let p2 = createPerson2("Maliha", 'Anas', 18)
console.log(p2.firstName);
console.log(p2.lastName);
console.log(p2.fullName);
console.log(p2.isSenior());

let ln = "last name"
let person2 = {
    "first name": "shafiq",
    [ln]: "usman"
}
console.log(person2["first name"]);
console.log(person2["last name"]);
console.log(person2);

let emp = ['shafiq', 'usman', "Male"]
let [fname, lname, gender] = emp
let [, , gender] = emp
let [, ...elements] = emp

console.log(fname);
console.log(lname);
console.log(gender);
console.log(elements);

let emp2 = {
    fname: "Misbah",
    lname: "Haroon",
    gender: "female"
}

let {fname, lname, gender} = emp2
console.log(fname);
console.log(lname);
console.log(gender);

let {fname: f, lname: l, gender: g} = emp2
console.log(f);
console.log(l);
console.log(g);

let user = "Maaz"
let greet = `Welcome ${user} to ES2015
            This is the second line
                Third and so            on.`

console.log(greet);

let colors = ['Red', 'Blue', "Green"]

for(let index in colors){
    console.log(colors[index]);    
}

for(let ele of colors) {
    console.log(ele);    
}

for(let letters of colors[2]){
    console.log(letters);    
}

class Person{
    // Construrctor Method, which is called during object creation
    constructor(name) {
        this.name = name;
        console.log(this.name + " Constructor, it is called automatically when an objec is created");        
    }
    // static method
    static staticMethod(){
        console.log("its a Static Method, which  can be called directly with the help of a class and not with object"); 
    } 

    // Finally we have 3rd prototype method
    greet(){
        console.log("Welcome " + this.name +"! its a Prototye Method which can be called with each object of the class");        
    }
    getID():string | number{
        return "42301-xxxxxxx-5"
    }

}

let P = new Person("Musa Khalil")
console.log(typeof P);
console.log(P.greet === Person.prototype.greet);
Person.staticMethod();
P.greet()

class Employee extends Person{
    constructor(name) {
        super(name)
        console.log(name + " Employee Class Constructor");        
    }
    
    getID():string | number{
        console.log(super.getID())
        return 78
    }
}

let e = new Employee("Shafiq");
console.log(e.getID());

e.greet();

// A Set is a data structure which contains a list of values that are unique, it does't contain any duplicte values

let mySet = Object.create(null)
mySet.id = 0
if (mySet.id) {
    console.log("id exists");    
} else {
    console.log("id does't exist")
}
console.log(mySet);

let mySet2 = new Set();
mySet2.add("Hello")
mySet2.add(1)
mySet2.add(1)   // when we try to Insert or Add a duplicate value it is going to ignore that particular value

let ob1 = {}
let ob2 = {}
mySet2.add(ob1)
mySet2.add(ob2)
console.log(mySet2);

let newSet = new Set([1,2,3,4,4,4,4])
console.log(newSet);
console.log(newSet.has(3));
console.log(newSet.has(5));
console.log(newSet.delete(1));
console.log(newSet);

let chainSet = new Set().add("hello").add("world")
console.log(chainSet);

let mySet3 = new Set()
let key = {}
mySet3.add(key)
console.log(mySet3);
key = null
key = [...mySet3][0]     // to get null object back
console.log(mySet3.add('Shafiq'));

let set4 = new WeakSet()
key = {}
set4.add(key)
console.log(set4.has(key));
key = null;
console.log(set4.has(key));

/* Map is a data structure, as an ordere list of key value
   Map nothing more than a collection of key value pairs
   in Map both the key & the value can be of any type, unlike object where the type of the property is always String.
*/

let myMap = new Map()
myMap.set('fname', "shafiq")
myMap.set('age', 30)
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get('fname'));

ob1 = {}
ob2 = {}
myMap.set(ob1, 10)
myMap.set(ob2, 20)
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get(ob1));
console.log(myMap.has('fname'));
console.log(myMap.delete(ob2));
console.log(myMap.delete('isMarried'));
console.log(myMap);
// myMap.clear()       // remove all the key value pair from a Map
console.log(myMap);

let myMap2 = new Map()
myMap2.set('name', 'Minhaj')
myMap2.set('class', 2)
console.log(myMap2);

let myMap3 = new Map([
    ['fname', "Mishah"],    
    ['age', "42"],
    ['isMarried', 'true'],
])
console.log(myMap3);

for (let key of myMap3.keys()) {
    console.log(key);    
}
console.log((myMap3.keys()))

// forEach Loop

var nums = [2,4,6,8]
nums.forEach(function (value) {
    console.log(value);    
})

// nums.forEach(element => console.log({element}));
// nums.forEach(index => console.log(index));
// nums.forEach(array => console.log(array));


nums.forEach((element, index, array) => console.log(element, index, array));


function arrayFunction(element,index,array){
    console.log("arr["+ index+ "]= "+element);    
}

const ratings = [5,4,5]
let sum = 0
const sumFunction = async (a, b) => a+b

ratings.forEach(async (rating) => {
    sum = await sumFunction(sum, rating)
})

console.log(sum);       // Naively expected output: 14, but Actual output: 0


const arraySparse = [1,3, /* empty */, 7]
let numCallbackRuns = 0

arraySparse.forEach((element) => {
    console.log({ element });
    numCallbackRuns++    
})

console.log(numCallbackRuns);

const items = ['Maliha', 'Mashail', 'Maria']
const copyItems = []

for (let i = 0; i < items.length; i++) {
    copyItems.push(items[i])    
}
console.log(copyItems);

copyItems = []
items.forEach((item) => {
    copyItems.push(item)
})
console.log(copyItems);

console.log(myMap);
myMap.forEach(mapFunction)

function mapFunction(value, key, callingMap){
    console.log(callingMap);    
    console.log(key + " " + value);
    console.log(myMap === callingMap);    
}

// Symobls in ES2015, a new primitive type known as "Symbols", A

let s = Symbol("First Symbol")
console.log(typeof s);
console.log(s.toString());
console.log(s.valueOf());
console.log(s.description);

let s2 = Symbol()
let s3 = Symbol()
console.log(s2 === s3)      // expected true, but false because a symbol create a unique id

s2 = Symbol("Test")
s3 = Symbol("Test")
console.log(s2 === s3)      // expected true, but false because a symbol create a unique id

let s4 = Symbol.for("RegSymbol")
let s5 = Symbol.for("RegSymbol")

console.log(s4 === s5)      // its true now
console.log(Symbol.keyFor(s4));
console.log(s4);


/* for..of Loop  --> iterator method --> use symbol.iterator 
   the main use purpose of symbol.iterator  check a for off loop can be used
   with a particular object of not*/    

let str = "Hello"
let arr = [1,2,3]
let num = 5
let obj = {name: "Shafiq"}
console.log("for string -" + typeof str[Symbol.iterator]);
console.log("for array -" + typeof arr[Symbol.iterator]);
console.log("for number -" + typeof num[Symbol.iterator]);      // its undefined so we can't us for-of loop with number & object
console.log("for object -" + typeof obj[Symbol.iterator]);


/* iterables & iterators
   An Iterable is any object that implements a method whoes kay a Symbol.iterator
*/

let iterable = [1,2,3]

function aIterator(array) {
    let count = 0;
    return{
        next: function(){
            return count < array.length? 
            {value: array[count++], done:false}:
            {value: undefined, done: true}
        }
    }
}

let myIterator = aIterator(iterable)

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());

/* Generators a new featrue in ES2015
   Generators is a special type of function which can be paused in the middle of execution run some other code & then resuem the same function from where we left off, it performed by yield keyword
   function *name(){
    yield 1    
   }
*/

function *createGenerator(){
    yield 1;
    console.log('After 1st yield');
    yield 2;        
}

let myGen = createGenerator()
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

// use of tyep-inference
var x = 10;    
var y = 'hi'
var z = true

// use of annotations

var a:number = 10
var b:string;
var n1 = 10
//n1 ='hi'

var n2 = n1 + 'hello' 

// data type any, i.e no compile type checking

var info: any
info = 10;
info = "hello"
info = true

var information;        // auto declare any

// enum, enumeration

enum EyeColor {
    Brown, Black, Blue
}

enum FaceStyle {long=1, flat=2, round=3, smiley=5}

var myEyeColor = EyeColor.Brown
var myFaceType = FaceStyle.smiley

console.log(`my Eyes are ${myEyeColor} & I have a ${myFaceType} face.`);
console.log(`my Eyes are ${EyeColor[myEyeColor]} & I have a ${FaceStyle[myFaceType]} face.`);

console.log(EyeColor.Blue);

// Array & Tuple in typescripts

let strArr1: string[] = ['shafiq', 'minhaj']
let strArr2 = ['mashail', 'maria']
let anyArr: any[] = ['maaz', 10, true]

let myTuple: [string, number] = ['Hi', 10]
console.log(myTuple);
console.log(myTuple[0]);

// Iterface in typsscript is to describe a particular type

interface Staff {
    fname: string         // Mandatory  
    lname: string          // Mandatory
    age?: number          // Optional 
}

let staff1: Staff = {
    fname: "Shafiq",
    lname: "Usman",
    age: 44
}

let staff2: Staff = {
    fname: "Misbah",
    lname: "Shafiq"
}
console.log(staff1 , "\n" , staff2);























// let myMap = Object.create(null);
// myMap.name = 'Shafiq';
// let val = myMap.name
// console.log(val);
// console.log(myMap.name);

// myMap[100] = "Hello"
// console.log(myMap['100']);
// console.log(myMap);


// let ob1 = {}
// let ob2 = {}

// myMap[ob1] = "World"
// console.log(myMap);

// console.log(myMap[ob1]);
// console.log(myMap[ob2]);
// console.log(ob1.toString());
// console.log(ob2.toString());










// Modules are introduce in ES2015
// Module Sytax
// Module Loading






export {}
