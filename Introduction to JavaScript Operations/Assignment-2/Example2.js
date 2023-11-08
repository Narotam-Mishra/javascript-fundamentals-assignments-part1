// 1). Arithmetic Operators:

let x = 10;
let y = 5;

let addition = x + y; // Result: 15
let subtraction = x - y; // Result: 5
let multiplication = x * y; // Result: 50
let division = x / y; // Result: 2
let modulus = x % y; // Result: 0 (remainder of division)


//2). Assignment Operators :-

let a = 10;
a += 5; // Equivalent to: a = a + 5; (Result: 15)

//3). Comparison Operators :-

let x1 = 10;
let y1 = 5;

let isEqual = x1 == y1; // false
let isNotEqual = x1 != y1; // true
let isGreaterThan = x1 > y1; // true
let isLessThan = x1 < y1; // false
let isGreaterOrEqual = x1 >= y1; // true
let isLessOrEqual = x1 <= y1; // false

// 4). Logical Operations :-

let isTrue = true;
let isFalse = false;

let andResult = isTrue && isFalse; // false
let orResult = isTrue || isFalse; // true
let notResult = !isTrue; // false

// 5). Conditional (Ternary) Operator :-

let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // "Yes"

// 6). Unary Operators :-

let x2 = 10;
x2++; // Increment x by 1 (Result: 11)
x2--; // Decrement x by 1 (Result: 10)

// 7). String Concatenation :-

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // "John Doe"

// 8). Typeof Operator :-

let x3 = 10;
let y3 = "Hello";
console.log(typeof x3); // "number"
console.log(typeof y3); // "string"

// 9). Bitwise Operators :-

let a1 = 5; // Binary representation: 0101
let b1 = 3; // Binary representation: 0011

let bitwiseAnd = a1 & b1; // Result: 1 (Binary: 0001)
let bitwiseOr = a1 | b1; // Result: 7 (Binary: 0111)
let bitwiseXor = a1 ^ b1; // Result: 6 (Binary: 0110)
