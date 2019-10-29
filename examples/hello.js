"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greet(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('Yihan', 'Xiao');
console.log(greet(user));
