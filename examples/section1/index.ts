let sentence: string = `
Hello
World
`

let x: [string, number]
x = ['hi', 10]

enum Color {
    Red = 1,
    Green = 10,
    Blue = 100
}

let colorName:string = Color[1]
let list: Array<any> = [1, true]
let list2: any[] = [2, 'yes']


function createObj(o: object): void {}

createObj({ a:10 })

let useLess2: number = 10

// 类型断言 - 强制转换
let someVal: any = 'This is a string'
// 两种转换方式
let strLength: number = (<string>someVal).length
let strLength2: number = (someVal as string).length

console.log(colorName)
console.log(someVal)

export {}