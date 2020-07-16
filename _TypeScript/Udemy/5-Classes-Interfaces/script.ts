/** Basic Classes */
console.log(">>> Basic Classes");

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Deparment:" + this.name);
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
    console.log(`Deparment${this.id}: ${this.name}`);
  }

  employee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
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
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
    // this.employees.push("hah!"); <<< Error
  }

  addAvailableEmployee(name: string) {
    this.availableEmployees.push(name);
  }

  printAvailableEmployees() {
    console.log(this.availableEmployees);
  }
}

const itDepartment = new ITDepartment("0", ["root"]);
console.log(itDepartment.describe());

itDepartment.addAvailableEmployee("Mad Max");
itDepartment.printAvailableEmployees();
