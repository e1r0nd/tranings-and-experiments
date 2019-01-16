console.log('--- Interfaces ---');
interface NamedPerson {
  [propName: string]: string | number | undefined;
  name: string;
  age?: number;
  type?: string;
}
interface YammingPerson {
  name: string;
  sayHello(what: string): void;
}
function greet(person: NamedPerson) {
  console.log(`Hello, ${person.name}`);
}
function changeName(person: NamedPerson, newName: string) {
  person.name = newName;
}

const someone = {
  name: 'Max',
  age: 42,
};

greet(someone);
changeName(someone, 'Anna');
greet(someone);
greet({
  name: 'Sam',
  age: 42,
  type: 'user',
});

const namedPerson: NamedPerson = {
  name: 'newPerson',
  age: -1,
  // hobbies: ['sports', 'spelling'], //<- an array is not described in the Interface
  hobby: 'sleeping',
};

const newPerson: YammingPerson = {
  name: 'newPerson',
  sayHello(what: string) {
    console.log(`${name} says ${what}`);
  },
};

newPerson.sayHello('=)');

// --- Classes ---
interface User {
  name: string;
  age: number;
  type?: string;
}
class SuperUser implements User {
  name: string = '';
  age: number = 0;
  uid: number = -1;
}
const myUser = new SuperUser();
myUser.name = 'admin';
myUser.uid = 999;
console.log(myUser);

// --- Function types ---
interface DoubleValueFunc {
  (a: number, b: number): number;
}
const accumulator: DoubleValueFunc = (a: number, b: number): number => a + b;
console.log(`Sum of 2 and 3 = ${accumulator(2, 3)}`);

// -- Interface inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}
const oldGranny: AgedPerson = {
  name: 'Suzi',
  age: 90,
};
console.log(oldGranny);
