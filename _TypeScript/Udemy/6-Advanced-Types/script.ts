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
