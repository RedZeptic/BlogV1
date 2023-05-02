// Arithmetic Operations

let x1 = 100 + 50; 
console.log("1)",x1); // = 150


let a = 2, b = 1;
let x2 = a + b;
console.log("2)",x2); // = 3

let x3 = (100 + 50) * a;
console.log("3)",x3); // = 300

let x_1 = 5;
let y_1 = 2;
let z_1 = x_1 % y_1;
console.log("4)",z_1); // = 1

//

let x4 = 5;
x4--;
let z1 = x4;
console.log("5)",z1); // = 4

let x5 = 5;
x5++;
let z2 = x5;
console.log("6)",z2) // = 6

//

let x6 = 5;
let z3 = x6 ** 2; // to the power of 2
console.log("7)",z3) // = 25

// Same result as above, in below

let x7 = 5;
let z4 = Math.pow(x7,2);
console.log("8)",z4) // Also = 25

//

// Basically PEMDAS next

let x8 = 100 + 50 * 3;
console.log("9)",x8); // = 250

let x9 = (100 + 50) * 3;
console.log("10)",x9); // = 450

let x10 = 10;
let y10 = 5;
console.log("11)",x10 += y10); // = 15

x11 = 10;
y11 = 5;
x11 *= y11;
console.log("12)",x11); // = 50

//

let x12 = 3.14; // A number with decimals
let y12 = 3; // A number without decimals
console.log("13)",x12,"<- with decimal, without ->",y12);

let x13 = 123e5; // 12300000
let y13 = 123e-5; // 0.00123
console.log("14)",x13,"<- extra large, & extra small ->",y13);

// JavaScript numbers are stored in 64-bit floating points
// 0-51 bits = the value, 52 - 62 = exponent, 63 = sign
// meaning integers with or without a decimal point are accurate..
// .. only up to 15 digits

let x14 = 999999999999999; // x will be 999999999999999
let y14 = 9999999999999999; // y will be 1000000000000000
console.log("15)", x14, "<- max accuracy, beyond ->", y14)

// floating precision - max num of decimals = 17

let x15 = 0.2 + 0.1;
console.log("16)",x15,"<- silly 04"); // silly, it has a 000004 at the end...

let x16 = (0.2 * 10 + 0.1 * 10) / 10;
console.log("17)",x16,"accurate decimal number") // accurate decimal

// number vs string

let x17 = 10;
let y17 = 20;
let z5 = x17 + y17;
console.log("18)",z5); // = 30

let x18 = '10';
let y18 = '20';
let z6 = x18 + y18;
console.log("19)",z6,"<- combining strings together"); // this is putting both strings next to each other

let x19 = 'Hell';
let y19 = 'o!';
let z7 = x19 + y19;
console.log("20)",z7,"<- same as above but with letters"); // this puts Hell and o! into Hello!

let x20 = '1';
let y20 = 1;
let z8 = x20 + y20;
console.log("21)",z8,'<- "1"1'); // it puts them next to each other like a string! // NOT A STRING actually, its a full numeric integer now
console.log("ignore for now ->",isNaN(z8)); // means that z8 is a integer
console.log("ignore for now ->",isNaN(y20)); // shows that integers show us as false in the output.

let x21 = 10;
let y21 = 20;
let z9 = "The result is: " + x21 + y21;
console.log("22)",z9,'<- took "The result is: " and put 10 as a string next to it, then added 20 which became a string as well.'); // this makes the the string and integers into just a string..
// .. because "The result is: " + 10 = "The result is: "10 + 20 = "The result is: "1020

let z10 = "30";
console.log("23)",x21 + y21 + z10,"<- similar situation as above"); // This happens because of the order of operations..
// 10 + 20 = 30.. 30 + "30" = 3030

// Numeric Strings

let x22 = 100;
let y22 = "100";
let z11 = x22 / y22;
console.log("24)",z11); // JS will convert strings into numeric operations

let x23 = "100";
let y23 = "10";
let z12 = x23 * y23;
console.log("25)",z12,isNaN(z12),"<- means it is a number/integer from 2 strings")

// NaN - Not a Number
let apple = 100 / "apple";
console.log("26)",apple);

console.log("27)",typeof NaN);

// Infinity
// let myNumber = 2;
// // execute until infinity
// while (myNumber != Infinity) {
//     myNumber = myNumber * myNumber;       // This seems to crash the live server preview lol
// }
console.log("28)",typeof Infinity);

//

let myNumber = 32;
console.log(
    "29)",
    myNumber.toString(32),
    myNumber.toString(16),
    myNumber.toString(12),
    myNumber.toString(8),
    myNumber.toString(2)
);

// JS Num as Obj

let xx = 123;
let yy = new Number(123); // this is an object now
console.log("30)",xx,yy);

let xx1 = 500;
let yy1 = new Number(500);

console.log("31)",xx1 == yy1); // == converts the variable values to the same type before performing comparison. This is called type coercion.
console.log("32)",xx1 === yy1); //=== does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.

// end of this document, I will be using the JS developer tools console for the MDN doc

