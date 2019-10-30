"use strict";
exports.__esModule = true;
var sentence = "\nHello\nWorld\n";
var x;
x = ['hi', 10];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 10] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
})(Color || (Color = {}));
var colorName = Color[1];
var list = [1, true];
var list2 = [2, 'yes'];
function createObj(o) { }
createObj({ a: 10 });
var useLess2 = 10;
// 类型断言 - 强制转换
var someVal = 1;
var strLength = someVal.length;
var strLength2 = someVal.length;
console.log(colorName);
console.log(someVal);
