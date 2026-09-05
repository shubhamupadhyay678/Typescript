// Part 1 — TypeScript Basics

// TypeScript kya hai?
// JavaScript vs TypeScript
// Advantages
// Type annotations
// Type inference
// Primitive types
// any
// unknown
// never
// void
// null / undefined

// Simple Hindi

// TypeScript basically JavaScript ka superset hai.
// TypeScript is a statically typed superset of JavaScript developed by Microsoft. 
// It adds features like static typing, interfaces, generics and advanced type checking to JavaScript. 

// TypeScript code is compiled or transpiled into JavaScript before running in the browser or Node.js.

const name: string = 'shubham' // string
console.log(`name is ${name}`)

let age: number = 25;
age = "Shubham";
console.log(`age is ${age}`) // error -- type error

// Key Reasons: TypeScript Kyu Use Karte Hain?
// Type Safety (Errors pehle hi pakadna):
// JavaScript mein agar aap kisi number ko string ki tarah treat kar lein, toh code crash ho sakta hai. TS aapko type define karne deta hai (let age: number = 25), jisse galat data pass hone par editor pehle hi red line dikha deta hai.

// Better Developer Experience (Autocompletion):
// TypeScript ke saath VS Code jaise code editors mein jabardast IntelliSense (autocomplete suggestions) milta hai. Aapko function ya object ke andar kya properties hain, unhe yaad rakhne ki zarurat nahi padti.

// Large Projects / Codebase Management:
// Jab project bada ho jata hai aur multiple developers ek saath kaam karte hain, toh JS mein kaunsa function kya data accept kar raha hai ye samajhna mushkil hota hai. TS ek tarah se Self-Documentation ka kaam karta hai.

// Easy Refactoring:
// Agar aapko apne pooray project mein kisi variable ya function ka naam badalna ho, toh TS safely use replace kar deta hai bina doosri cheezon ko tode.


// ====================  2. JavaScript vs TypeScript ================
// | JavaScript                                               | TypeScript                                               |
// | -------------------------------------------------------- | -------------------------------------------------------- |
// | Dynamically typed                                        | Statically typed                                         |
// | Runtime par type errors aa sakte hain                    | Development/compile time par errors detect kar sakta hai |
// | Types mandatory nahi                                     | Types optional but powerful                              |
// | Directly browser me run hota hai                         | JavaScript me transpile hota hai                         |
// | Large projects me maintain karna comparatively difficult | Large projects ke liye better maintainability            |

// example -> 

// javascript ex. 
function add(a, b) {
  return a + b;
}

add(10, "20"); // js result: 1020

// typescript ex.
function add1(a: number, b: number): number {
  return a + b;
}

add1(10, "20"); // error -- type error

// err = Argument of type 'string' is not assignable to parameter of type 'number'
// interviw ===
// The main difference is type safety. JavaScript is dynamically typed, whereas TypeScript provides static type checking. TypeScript helps us catch many errors during development instead of finding them at runtime.



// ====================  3. Type Annotation ================
// TypeScript ka fundamental concept.

// Hum explicitly batate hain variable ke andar kaunsa type aayega.

let username: string = "Shubham";

let age1: number = 27;

let isActive: boolean = true;


// ====================  4. Type Inference ================
// TypeScript automatically variable ke type ko infer kar leta hai based on the value assigned to it.
// TypeScript kai cases me automatically type samajh leta hai

// ex. 
let age = 25;
// TypeScript khud samajh jayega: ----------> age: number

Similarly:
let name = "Shubham";
// TypeScript khud samajh jayega: ----------> name: string

// its called Type Inference 

// interview === ====> Type inference means TypeScript automatically determines the type of a variable based on its assigned value, so we don't always need to explicitly provide type annotations.

// ====================  5. Primitive Types ================
// Primitive types are the basic data types in TypeScript. They include:
//examples of primitive types in TypeScript:
let str: string = "Hello, TypeScript!";
let num: number = 42;
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;

// ==================== 7. Non-Primitive Types ================
// Non-primitive types are more complex data types that are built from primitive types. They include:
// examples of non-primitive types in TypeScript:
let arr: number[] = [1, 2, 3, 4, 5]; // array of numbers
let tuple: [string, number] = ["Shubham", 25]; // tuple with a string and a number
let obj: { name: string; age: number } = { name: "Shubham", age: 25 }; // object with properties

// ====================8. Arrays ================
// Arrays are used to store multiple values in a single variable. In TypeScript, we can define the type of elements in an array using type annotations.
// Array ko define karne ke multiple ways hain
let numbers1: Array<number> = [10, 20, 30];
// example of arrays in TypeScript:
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
let strings: string[] = ["Shubham", "TypeScript", "JavaScript"]; // array of strings
let mixed: (string | number)[] = [1, "Shubham", 2, "TypeScript"]; // array with mixed types

// Mixed array ke liye union:

let data: (string | number)[] = [
  "Shubham",
  25,
  "Rahul",
  30
];

// ====================  9. any ================
// The any type is a special type in TypeScript that allows a variable to hold values of any type. 
// It effectively turns off type checking for that variable, allowing you to assign values of different types without causing type errors.

// Ye bahut important interview question hai.

// any ka matlab:

// TypeScript ko type checking mat karne do.

// However, using the any type can lead to unexpected behavior and make the code less type-safe. It's generally recommended to use more specific types whenever possible to take advantage of TypeScript's static type checking.

// example of any type in TypeScript:
let variable: any = 42; // variable can hold a number
variable = "Hello"; // now it can hold a string
variable = true; // now it can hold a boolean

// Isliye production code me unnecessarily any avoid karte hain.

// ====================  10. unknown ================
// The unknown type is a safer alternative to the any type. 
// It represents a value that could be of any type, but unlike any, it requires you to perform type checks before performing operations on it. 
// This helps maintain type safety while still allowing flexibility.
// use karne se pehle type check karna padega

//ex. let data: unknown;

data = "Shubham";
data = 100;
data = true;

let data: unknown = "Shubham";

data.toUpperCase(); // Error

if (typeof data === "string") {
  console.log(data.toUpperCase());
}

// ====================  11. void ================
// The void type is used to indicate that a function does not return a value.
// It is commonly used for functions that perform actions but do not produce a result. 
// In TypeScript, a function with a void return type can still have side effects, such as logging to the console or modifying external variables.

// Function kuch return nahi kar raha.
// "void is generally used for functions that do not return a meaningful value."

function printMessage(): void {
  console.log("Hello");
}

// ====================  12. never ================
// The never type represents values that never occur.
// It is used to indicate that a function will never return or that a variable will never hold a value. 
// Functions that throw exceptions or have infinite loops can be assigned the never type.

// Aisa function jo normally kabhi successfully return nahi karta.
// Ye function error throw karega aur return nahi karega.

function throwError(message: string): never {
  throw new Error(message);
}   

function infiniteLoop(): never {
  while (true) {}
}

// never represents values that never occur. It is commonly used for functions that always throw an error or never terminate

// ====================  13. Union Type ================
// Most Important: Union Type
// Ye TypeScript interviews me bahut poocha jata hai.
// Agar variable multiple types accept kare:
// Union types allow a variable to hold values of multiple types. 
// It is denoted using the pipe (|) symbol between the types. 
// This is useful when a variable can have more than one possible type, providing flexibility while still maintaining type safety.

let id: number | string;

id = 101;

id = "USR101";

// Real-world example
// API me ID kabhi number aur kabhi string aa sakti hai:
function getUser(id: number | string) {
  console.log(id);
}

// A union type allows a variable or parameter to hold one of multiple specified types. We define it using the pipe operator


// ====================  14. Intersection Type ================
// Intersection types allow us to combine multiple types into one. 
// It is denoted using the ampersand (&) symbol between the types. 
// This is useful when we want to create a new type that has all the properties of multiple existing types.

// example of intersection types in TypeScript:

type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
};

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
    name: "Shubham",
    age: 30,
    employeeId: 12345
};  





