 const v1 = { foo: 'test' }
 const v2 = { bar: v1}

interface ReadonlyArray {
    readonly [index:string] : string
}

const arr: ReadonlyArray = { a: 'ok', b: 'not ok'}

class Person {
    constructor(private name: string, private job: string) {
    }

    say() {
        console.log(`I'm ${this.name} and a ${this.job}`)
    }
}

let man = new Person('Jack', 'teacher')
man.say()

export {}