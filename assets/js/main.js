//lifecycle function
//declaration: 3 types
//Calling

// Declaration Notation
function sayHi() {
    console.log('hi')
}
sayHi()

function sayHiWithName(yourName) {
    console.log(`Hi ${yourName}`)
}

sayHiWithName('Superman')

// Functions as Variables
let sayHi2 = function () {
    console.log('Hallo')
}
sayHi2()

// x => x*x
let square = function (x) {
    console.log(x * x)
}
square(2)

// Arrow functions (ES5)
let sayHi3 = () => {
    console.log('Hola')
}
sayHi3()

let sayHi3WithName = (yourName) => {
    console.log(`Hallo ${yourName}`);
}
sayHi3WithName('Batman')

let square2 = (x) => {
    console.log(x * x);
}
square2(5)

// Surface1
// Declaration Notation
function surface1(w, l) {
    console.log(w * l)
}
surface1(5, 10)
// Surface2
// Function as Variable
let surface2 = function (w, l) {
    console.log(w * l)
}
surface2(10, 10)
// Surface3
// Arrow Function

let surface3 = (w, l) => {
    console.log(w * l)
}
surface3(4, 10)


//return 
// give something back
// end the block

function trySomething(param1) {
    return param1
}

let result = trySomething('test')
console.log(result)

let function1 = () => {
    return 'My '
}
let function2 = () => {
    return 'Name is '
    console.log('test')
    if (true) {
        console.log('more test')
    }
}
let mainFunction = (username) => {
    let text1 = function1()
    let text2 = function2()
    return username;
    console.log(text1 + text2 + username)
}
console.log(mainFunction('Mickey'))
const counterElt = document.getElementById('counter')
let index = 0
let counter = () => {
    if (index == 5) {
        return;
    }
    index = index + 1
    counterElt.innerHTML = index
}

// Hoisting
// Behaviour of using variable* or functions before declaration 
// Variable: var  // let and const are not hoisted

num1 = 10
console.log(num1)
var num1
sayHello()
function sayHello() {
    console.log('hello')
}
sayHello()

// scope in javascript
// global scope
// local scope
console.log('we are on the global scope')
function foo1() {
    console.log('we are on the local scope of the function foo1')
    console.log('foo1')
    foo3()
    function foo2() {
        console.log('we are on the local scope of the function foo2')
        console.log('foo2')
        foo3()
    }
    foo2()
}
foo1()
// foo2() : ReferenceError
function foo3() {
    console.log('foo3')
}
// local scope: function scope und block scope

if (true) {
    console.log('local scope')
    console.log('block scope')
}

switch (true) {
    case true:
        console.log('local scope1')
        console.log('block scope1')
        break;

}

// let : function block scoped
// const:function block scoped
// var: function scoped

let fizz = 'outside'
console.log(fizz)
if (true) {
    let fizz = 'inside'
    console.log(fizz)
}
console.log(fizz)
console.log('-------------')
const fizz2 = 'outside'
console.log(fizz2)
if (true) {
    const fizz2 = 'inside'
    console.log(fizz2)
}
console.log(fizz2)

console.log('-------------')

var fizz3 = 'outside'
console.log(fizz3)
if (true) {
    var fizz3 = 'inside'
    console.log(fizz3)
}
console.log(fizz3)



var fruit = 'apple'
console.log(fruit) // apple

function fruits() {
    var fruit = "Orange"
    console.log(fruit) // orange
    if (true) {
        var fruit = 'banana'
        console.log(fruit) // banana
    }
    console.log(fruit) // banana
}

fruits()
console.log(fruit) // apple



function vegetables() {
    let vegetable = 'tomato'
    console.log(vegetable)
}

vegetables()
console.log(vegetable)


