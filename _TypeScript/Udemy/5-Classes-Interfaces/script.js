/** Basic Classes */
console.log(">>> Basic Classes");
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
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
    constructor(id, n) {
        this.id = id;
        this.employees = [];
        this.availableEmployees = [];
        this.name = n;
        this.id = `#${id}`;
    }
    describe() {
        // this.id = "2"; <<< Error
        console.log(`Department${this.id}: ${this.name}`);
    }
    employee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
    static createEmployee(name) {
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
    constructor(id, admins, reports) {
        super(id, "IT");
        this.admins = [];
        this.admins = admins;
        // this.employees.push("hah!"); <<< Error
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addAvailableEmployee(name) {
        this.availableEmployees.push(name);
    }
    printAvailableEmployees() {
        console.log(this.availableEmployees);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No reports found!");
        }
    }
    set mostRecentReport(value) {
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
let person1;
person1 = {
    name: "Hans",
    age: 10,
    greet(phrase) {
        console.log(`${this.name} says ${phrase}`);
    },
};
person1.greet("YOLO!");
console.log(">>> Interface with Class");
class Robot {
    constructor(name, position) {
        this.name = name;
        this.position = position;
        this.type = "Android";
        this.brainType = "T1000";
    }
}
const robot1 = new Robot("C3PO", "Navigator");
console.log(robot1);
console.log("Function Interface");
const addThem = (a, b, c) => c ? a + b + c : a + b;
console.log(`2 + 2 = ${addThem(2, 2)}`);
console.log(`2 + 2 + 1 = ${addThem(2, 2, 1)}`);
