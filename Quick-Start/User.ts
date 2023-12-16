// 1. DEFINING TYPES

// const user = {
//     name: "Hayes",
//     id: 0,
// };

// interface  case
interface User {
    name: string,
    id: number,
};

/*Since JavaScript supports classes and object-oriented programming, 
*so does TypeScript. You can use an interface declaration with classes: */

interface User {
    name: string,
    id: number
 };

class UserAccount {
    name: string;
    id: number;

    constructor (name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1);

 // delete the user
 function deleteUser(User: User) {

    return User;
 }
  // get adminUser
 function getAdminUser(): User {
    return user;
 }

 // 2. COMPOSING TYPES
/* With TypeScript, you can create complex types by combining simple ones.
* Unions
*Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
*A popular use-case for union types is to describe the set of string or number literals that a value is allowed to be

*/

type MyBool  = true | false;
type WindowStates = "open" | "closed" | "minimised";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 2 | 3 | 5 | 7 | 9;


function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}

/**
 * GENERICS
 * They provide variables to types
 * Forexample, is an array. without generics, an array can
 * contain anything BUT with generics , it can only describe the values of an array
 */

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string}>;

// u can declare your own types that use generics
// shortcut
interface BackPack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

/* Full form oddf the AnimationPlaybackEvent
*declare const backpack: BackPack<string>;
*const object = backpack.get();
*backpack.add("name");
*/

/*
 * STRUCTURAL TYPE SYSTEM
 *Type checking focuses on the shape that the values have
 *sometimes called "duck typing" | "structural typing"
 *In structural system, if two objects have the same shape, they are considered to be of the same type
 */

 interface Point {
    x: number;
    y: number;
 }

 function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
 }

//  logs "12, 26"
const point = { x: 12, y: 26};
logPoint(point);

/*
 * The point variable is never declared
 *  to be a Point type. However, TypeScript
 *  compares the shape of point to the shape
 *  of Point in the type-check. They have the same
 *  shape, so the code passes.
 * 
 * The shape-matching only requires a subset of the object’s fields to match.
 * 
 */

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(point3);
// logPoint(color); This obviously throws an error

/*
 * There is no difference btn classes and objects conform to shapes
 */

class VirtualPoint {
    x: number;
    y:number;

    constructor(x: number, y:number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
