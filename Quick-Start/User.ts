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
    // ...
 }
  // get adminUser
 function getAdminUser(): User {
    // ...
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
 * 
 */