console.log(">>> Decorators");

function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object");
  }
}

const pers = new Person();

console.log(pers);

console.log(">>> Decorators Factory");

function LoggingFactory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log("From Factory: ", constructor);
  };
}

@LoggingFactory("NEW PERSON")
class NewPerson {
  constructor() {
    console.log("Create a new one...");
  }
}

const newPers = new NewPerson();
console.log(newPers);

console.log(">>> Decorator property");

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator:");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price");
    }
  }
  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
