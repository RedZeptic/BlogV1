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
console.log("21)",z8,'<- "1"1'); // it puts them next to each other like a string!

let x21 = 10;
let y21 = 20;
let z9 = "The result is: " + x21 + y21;
console.log("22)",z9,'<- took "The result is: " and put 10 as a string next to it, then added 20 which became a string as well.'); // this makes the the string and integers into just a string..
// .. because "The result is: " + 10 = "The result is: "10 + 20 = "The result is: "1020

let z10 = "30";
console.log("23)",x21 + y21 + z10,"<- similar situation as above"); // This happens because of the order of operations..
// 10 + 20 = 30.. 30 + "30" = 3030

//TBC