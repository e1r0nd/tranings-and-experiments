/** Basic Classes */
console.log(">>> Basic Classes");

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department:" + this.name);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const accountingCopy = { name: "some", describe: accounting.describe };
accountingCopy.describe();

/** Private, Public & Protected fields */
class TheDepartment {
  name: string;
  private employees: string[] = [];
  protected availableEmployees: string[] = [];

  constructor(private readonly id: string, n: string) {
    this.name = n;
    this.id = `#${id}`;
  }

  describe(this: TheDepartment) {
    // this.id = "2"; <<< Error
    console.log(`Department${this.id}: ${this.name}`);
  }

  employee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

const development = new TheDepartment("1", "Development");
console.log(development);
development.employee("Programmer");
development.employee("Manager");

// development.employees[3] = 'Hah!' <<< Error
development.describe();
development.printEmployeeInformation();

/** Inheritance & Protected fields*/
console.log(">>> Inheritance");

class ITDepartment extends TheDepartment {
  public admins: string[] = [];
  private lastReport: string;
  private reports: string[];

  constructor(id: string, admins: string[], reports: string[]) {
    super(id, "IT");
    this.admins = admins;
    // this.employees.push("hah!"); <<< Error
    this.reports = reports;
    this.lastReport = reports[0];
  }

  addAvailableEmployee(name: string) {
    this.availableEmployees.push(name);
  }

  printAvailableEmployees() {
    console.log(this.availableEmployees);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No reports found!");
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No report provided.");
    }
    this.addReport(value);
  }
}

const itDepartment = new ITDepartment("0", ["root"], []);
console.log(itDepartment.describe());

itDepartment.addAvailableEmployee("Mad Max");
itDepartment.printAvailableEmployees();

itDepartment.addReport("first");
itDepartment.mostRecentReport = "second one";
console.log(itDepartment.mostRecentReport);

const employee1 = TheDepartment.createEmployee("tester");
console.log(employee1);

/** Interface */
console.log(">>> Interface");

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

let person1: Person;

person1 = {
  name: "Hans",
  age: 10,
  greet(phrase: string) {
    console.log(`${this.name} says ${phrase}`);
  },
};

person1.greet("YOLO!");

console.log(">>> Interface with Class");
interface Employee {
  position: string;
}

interface Android {
  readonly type: string;
}

interface Cyborg extends Android {
  readonly brainType: string;
}

class Robot implements Employee, Cyborg {
  constructor(name: string, position: string) {
    this.name = name;
    this.position = position;
    this.type = "Android";
    this.brainType = "T1000";
  }
  name: string;
  position: string;
  type: string;
  brainType: string;
}

const robot1: Robot = new Robot("C3PO", "Navigator");
console.log(robot1);

console.log("Function Interface");
interface AddFn {
  (n1: number, n2: number, n3?: number): number;
}
const addThem: AddFn = (a: number, b: number, c?: number) =>
  c ? a + b + c : a + b;

console.log(`2 + 2 = ${addThem(2, 2)}`);
console.log(`2 + 2 + 1 = ${addThem(2, 2, 1)}`);
