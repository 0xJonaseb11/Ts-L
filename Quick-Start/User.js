// 1. DEFINING TYPES
;
;
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
// delete the user
function deleteUser(User) {
    return User;
}
// get adminUser
function getAdminUser() {
    return user;
}
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
function logPoint(p) {
    console.log("".concat(p.x, ", ").concat(p.y));
}
//  logs "12, 26"
var point = { x: 12, y: 26 };
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
var point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
var rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"
var color = { hex: "#187ABF" };
logPoint(point3);
