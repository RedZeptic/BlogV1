// ########## VARIABLES ##########

let message;

message = 'Hello'; // store the string 'Hello' in the variable named message

alert(message); // shows the variable content

// ########## = New line (for organization)

let message1 = 'Hello'; // define the variable and assign the value

alert(message1); // Hello!

// ##########

let user1 = 'John', age1 = 25, message2 = 'Hello';

let user2 = 'John';
let age2 = 25;
let message3 = 'Hello';

let user3 = 'John',
    age3 = 25,
    message4 = 'Hello'
;
// ##########

let message5;
message5 = 'Hello!';
message5 = 'World!'; // value changed
alert(message5);

// ##########

let hello = 'Hello world';

let message6;

// copy 'Hello world' from hello into message6
message6 = hello;

// now two variables hold the same data
alert(hello);
alert(message6);

// ########## VARIABLE NAMING ##########

let userName;
let test123;

// ##########

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

// Reserved words/names that cannot be used as var/let/const = "let" "class" "return" "function"

// ##########

// note: no "use strict" in this example
// num = 5; // the variable "num" is created if it didn't exist
// alert(num); // 5

// "use strict";
// num = 5; // error: num is not defined

// ########## CONSTANTS ##########

const myBirthday = '01.05.2000';

// myBirthday = '01.01.2000'; // error, can't reassign the constant!

alert(myBirthday);

// ########## UPPERCASE CONSTANTS ##########

// This section is for constants that are known prior to execution (like hexadecimal)
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

// ##########

// This is a good example for const's that are known after execution, so they get the normal naming scheme
//const pageLoadTime = /* time taken by webpage to load */;

// ########## TASKS ##########

// 1
let name1 = 'John';

let admin = name1;
alert(admin);

// 2
let ourPlanetName = 'Earth';
let currentVisitor = 'New Visitor';

// 3
const BIRTHDAY = '01.05.2000';
const age = someCode(BIRTHDAY);

// end of js lesson 1 work log #1