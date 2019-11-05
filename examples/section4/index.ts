class Greeter {
    static standardMessage = 'Hello, there'

    greeting:string 

    constructor(message?:string) {
        this.greeting = message
    }

    greet() {
        if (this.greeting) {
            return 'Hello, ' + this.greeting
        } else {
            return Greeter.standardMessage
        }
    }
}

let greeter: Greeter = new Greeter()
let greeterMaker: typeof Greeter = Greeter
greeterMaker.standardMessage = "Hey, there"

let greeter2:Greeter = new greeterMaker()

console.log(greeter.greet())
console.log(greeter2.greet())
