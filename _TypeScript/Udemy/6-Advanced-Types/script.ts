/** Intersection Types */

console.log(">>> Intersection Types");

type Admin = {
  name: string;
  privileges: string[];
};

type Robotnik = {
  name: string;
  startDate: Date;
};

type ExtendedRobotnik = Admin & Robotnik;

const robotN: ExtendedRobotnik = {
  name: "Max",
  privileges: ["do", "dont"],
  startDate: new Date(),
};

console.log(robotN);

// Intersection AND
type AlphaNumeric = string | number;
type Numeric = number | boolean;

type Universal = AlphaNumeric & Numeric; // <<< Number
// const s: Universal = 'Z' <<< Error

/** Type Guard */

function sum(a: AlphaNumeric, b: AlphaNumeric) {
  // return a + b; <<< Error
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else {
    return +a + +b;
  }
}

console.log(sum("ani", "vesral"));
console.log(sum(40, 2));

type SomeRobot = Admin | Robotnik;

function printEmployeeInformation(person: SomeRobot) {
  console.log(`Name: ${person.name}`);
  // console.log(`Start date: ${person.startDate}`); <<< Error
  // Type Guard
  if ("startDate" in person) {
    console.log(`Start date: ${person.startDate}`);
  }
}
const me: SomeRobot = {
  name: "Me",
  startDate: new Date(),
};
printEmployeeInformation(me);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log(`Loading: ${amount}`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1);
  }
}

useVehicle(v2);

/** Discriminated Unions */
interface Bird {
  type: "bird";
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      speed = 0;
      break;
  }
  console.log(`Moving like ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

/** Type Casting */
/*
console.log(">>> Type casting");

const inputField = document.querySelector("#inputField");
// const inputField = document.querySelector("#inputField")!; <<< never Null
// const inputField = document.querySelector("#inputField") as HTMLInputElement; <<< cast as Input & never Null

if (inputField) {
  const value = (inputField as HTMLInputElement).value;
  console.log("Input field: ", value);
}
*/

/** Index Properties */
interface ErrorContainer {
  /*
  {
    message: 'Some error',
    code: 'err123'
  }
  */
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  error: "Ops",
  username: "user1",
};

/** Function Overloads */
// function add(a:number, b: number): number

function sumIt(a: number, b: number): number;
function sumIt(a: string, b: string): string;
function sumIt(a: AlphaNumeric, b: AlphaNumeric) {
  // return a + b; <<< Error
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  } else {
    return +a + +b;
  }
}

const names = sumIt("Max", " Schwarz");
console.log(names.split(" "));

/** Optional chaining */
/*
const fetchedUser1 = {
  username: "user1",
  email: "mail@me.com",
  job: { title: "CEO" },
};
const fetchedUser2 = {
  username: "user1",
  email: "mail@me.com",
  status: "active",
};

[fetchedUser1, fetchedUser2].forEach((user) => {
  console.log("User's title: ", user?.job.title);
});
*/

/** Nullish coalition */
const something1 = "";
console.log("Nullish #1: ", something1 ?? "DEFAULT");
const something2 = undefined;
console.log("Nullish #2: ", something2 ?? "DEFAULT");
