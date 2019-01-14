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

// Classes
class Person {
  public name: string;
  // public userName: string; // copied from constructor
  private type: string;
  protected age: number = 42;

  constructor(name: string, public userName: string) {
    this.name = name;
    this.type = 'user';
  }

  printAge(): void {
    console.log(this.age);
  }
  private setType(type: string): void {
    this.type = type;
    console.log(this.type);
  }
  getType(): void {
    console.log(this.type);
  }
}

const person = new Person('Max', 'max01');
console.log(person /* person.type - is not accessible*/);
person.printAge();
// person.setType('user'); // is private
person.getType();

// Inheritance
class Max extends Person {
  constructor(userName: string) {
    super('Max', userName);
    this.age = 15;
  }
}
const personMax = new Max('any');
console.log(personMax);

// Getters & Setters
class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }
  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);

// Static properties and Methods
class Helpers {
  static PI: number = 3.14;
  static calc(diameter: number): number {
    return this.PI * diameter;
  }
}
console.log(Helpers.PI);
console.log(Helpers.calc(8));

// Abstract Classes
abstract class Project {
  projectName: string = 'Default';
  budget: number = 0;

  abstract changeProjectName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeProjectName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.projectName = 'IT Project';
console.log(newProject);

// static constructor - For Singleton
class OnlyOne {
  private static instance: OnlyOne;
  private constructor(public name: string) {}
  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}
//let wrong = new OnlyOne('Oopss'); // don't do that
let right = OnlyOne.getInstance(); // the right way
console.log(right);
