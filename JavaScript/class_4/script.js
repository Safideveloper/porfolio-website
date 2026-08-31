// logical operators

let email = "test@gmail.com";
let password = "12345";
let termcondition = true;
// table (AND )
/*
True  True = True
True  False = False
False True = False
False False = False
*/

console.log(email == "test@gmail.com" && password == "h12345"); // false
console.log(
  email == "test@gmail.com" && password == "12345" && termcondition == true,
); // true

// table (OR )
/*
True  True = True
True  False = True
False True = True
False False = False
*/
console.log(
  email == "test@gmail.com" || password == "12345" || termcondition == true,
); // true

//                     DATA TYPES

//           there are two data type
//           primitive AND     non-primitives

//                   primitives :
//  string,
//  number,
//  boolean,
//  null,
// undefined,
//  symbol
/*let a = 100;
console.log(typeof a); // number

let name = "hello";
console.log(typeof name); // string

let islogin = true;
console.log(typeof islogin); // boolean

let b = null;
console.log(typeof b); // object

let c;
console.log(c); // undefined
console.log(typeof c); // undefined

let d = Symbol("hello");
let e = Symbol("hello");
console.log(typeof d); // symbol

console.log(d == e); // false */
