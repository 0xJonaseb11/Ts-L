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
 function getAdminUser() {
    // ...
 }