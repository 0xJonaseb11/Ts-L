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
