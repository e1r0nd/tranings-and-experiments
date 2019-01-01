function Greeter(greeting: string) {
  this.greeting = greeting;
}

Greeter.prototype.greet = function() {
  return 'Hello, ' + this.greeting;
};

// Oops, we're passing an object when we want a string. This will print
// "Hello, [object Object]" instead of "Hello, world" without error.
let greeter = new Greeter('world');

let button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function() {
  alert(greeter.greet());
};

document.body.appendChild(button);
console.log('It works!');

let str = 'str';
// str = 28; <- cannot be Number

let hasBool = false;
// hasBool = 1; <- has to be Boolean

let myAge: number;
myAge = 42;
// myAge = '42'; <- cannot be reassigned

// array
let hobbies: string[] = ['Ski', 'Dance', 'Fly'];
hobbies.push('Swimming');
// hobbies.push(42); <- cannot push Number
let anything: any[] = ['Ski'];
anything.push('Swimming');
anything.push(42); // no error is here

// tuples
let address: [string, number] = ['Abc str.', 42];
// address = [32, 42]; <- not valid

// enum
enum Color {
  Gray, // 0
  Green = 100, // 100
  Blue, // 101
}
let myColor: Color = Color.Green;
console.log(myColor); // -> 100
