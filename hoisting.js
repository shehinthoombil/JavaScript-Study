console.log(name); // Output: undefined (hoisted but not initialized)
var name = "Shehin";


console.log(age); // Error: Cannot access 'age' before initialization
let age = 25;

//Function Hoisting
greet(); // Output: Hello!
function greet() {
    console.log("Hello!");
}
