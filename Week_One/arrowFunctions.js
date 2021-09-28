//  Syntax declaration of Arrow Function

const sayHello = name => console.log("Hello", name);
sayHello("World!");


// Arrow functions would implicitly return the function value without declaring return
const square = n => n * n;
console.log(square(4));

//  Arrow functions give the ability to shorten the syntax of reutning an object as well

const returnObj = () => ({ firstName: "Pramod", lastName: "Voola" });

console.log(returnObj());