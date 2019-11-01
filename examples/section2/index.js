"use strict";
exports.__esModule = true;
var v1 = { foo: 'test' };
var v2 = { bar: v1 };
var arr = { a: 'ok', b: 'not ok' };
var Person = /** @class */ (function () {
    function Person(name, job) {
        this.name = name;
        this.job = job;
    }
    Person.prototype.say = function () {
        console.log("I'm " + this.name + " and a " + this.job);
    };
    return Person;
}());
var man = new Person('Jack', 'teacher');
man.say();
