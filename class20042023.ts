class Point {
    x: number;
    y: number;
    z!: number;     // Assertion operator " ! "

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

class Square {
    pt: Point;

    constructor(pt: Point) {
        this.pt = pt;
    }

    printPoint() {
        console.log("Your point is: ", this.pt);

    }
}

const pt1 = new Point(10, 20);     // New Create a new Object of 
const pt2 = new Point(20, 40);     // New Create a new Object of 
const sq1 = new Square(pt1);

console.log(this);
console.log(pt1);
console.log(pt2);
console.log(sq1);
sq1.printPoint();

class Greeter {
    readonly name: string = "World";

    constructor(ohterName?: string) {
        if (ohterName !== undefined) {
            this.name = ohterName;
        }
    }

    err() {
        this.name = 'not ok';
    }
}

const g = new Greeter();
g.name = "Metavarse";
console.log(g);
g.err();
console.log(g);



