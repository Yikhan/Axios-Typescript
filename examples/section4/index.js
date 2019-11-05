var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return 'Hello, ' + this.greeting;
        }
        else {
            return Greeter.standardMessage;
        }
    };
    Greeter.standardMessage = 'Hello, there';
    return Greeter;
}());
var greeter = new Greeter();
var greeterMaker = Greeter;
greeterMaker.standardMessage = "Hey, there";
var greeter2 = new greeterMaker();
console.log(greeter.greet());
console.log(greeter2.greet());
