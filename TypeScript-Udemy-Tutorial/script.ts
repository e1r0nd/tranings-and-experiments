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

// functions
function returnMyAge(): number {
  return myAge;
}
console.log(returnMyAge());

function hello(): void {
  console.log('Hello!');
}

function multiplier(a: number, b: number) {
  return a * b;
}
console.log(multiplier(2, 3));

// function types
let myMultiplier: (x: number, y: number) => number;
// myMultiplier = hello; <- not valid
myMultiplier = multiplier;
console.log(myMultiplier(3, 4));

function neverReturns(): never {
  throw new Error('oops');
}
// Objects
let userData: { name: string; age: number } = {
  name: 'Some',
  age: 42,
};
// userData = { <- cannot reassign properties ot thier types
//   a: 1,
//   b: 2,
// };

// complex object
let complex: { data: number[]; output: (all: boolean) => number[] } = {
  data: [3, 2, 1],
  output: function(all: boolean): number[] {
    console.log('all:', all);
    return this.data;
  },
};

// type alias
type ComplexType = { data: number[]; output: (all: boolean) => number[] };
let complex1: ComplexType = {
  data: [3, 2, 1],
  output: function(all: boolean): number[] {
    console.log('all:', all);
    return this.data;
  },
};

// union types
let yourNumber: number | string = 42;
yourNumber = '42';
// yourNumber = true; // <- not valid

if (typeof yourNumber == 'string') {
  console.log(yourNumber);
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let isUndefined;
isUndefined = null; // <- can be null
isUndefined = 42; // because it's defined as 'any'

const countdown = (start: number = 10, end: number = start - 1): void => {
  if (start > 0) {
    start -= 1;
  } else {
    console.log('Done!');
  }
  console.log('end:', end);
};
countdown(0);
console.log('Count this:');
countdown();

function printInfo(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
console.log(printInfo('Max', 42));
