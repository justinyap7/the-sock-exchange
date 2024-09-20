// 1. Global scope
let globalVar = "I am global";

function showMessage() {
  console.log(globalVar); // Accessible here
}

showMessage(); // Outputs: I am global
console.log(globalVar); // Also accessible here

// 2. Local scope
function greet() {
    let greeting = "Hello World";
    console.log(greeting); // Accessible here
}

let hello = greet(); // Outputs: Hello World
console.log(hello); // Error: greeting is not defined


let blockVar;
// 3. Block scope
if (true) {
    let blockVar = "I am inside a block";
    console.log(blockVar); // Accessible here
}

console.log(blockVar); // Error: blockVar is not defined outside the block scop