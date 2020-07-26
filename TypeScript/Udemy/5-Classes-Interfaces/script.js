var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Basic Classes */
console.log(">>> Basic Classes");
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department:" + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
var accountingCopy = { name: "some", describe: accounting.describe };
accountingCopy.describe();
/** Private, Public & Protected fields */
var TheDepartment = /** @class */ (function () {
    function TheDepartment(id, n) {
        this.id = id;
        this.employees = [];
        this.availableEmployees = [];
        this.name = n;
        this.id = "#" + id;
    }
    TheDepartment.prototype.describe = function () {
        // this.id = "2"; <<< Error
        console.log("Department" + this.id + ": " + this.name);
    };
    TheDepartment.prototype.employee = function (employee) {
        this.employees.push(employee);
    };
    TheDepartment.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    TheDepartment.createEmployee = function (name) {
        return { name: name };
    };
    return TheDepartment;
}());
var development = new TheDepartment("1", "Development");
console.log(development);
development.employee("Programmer");
development.employee("Manager");
// development.employees[3] = 'Hah!' <<< Error
development.describe();
development.printEmployeeInformation();
/** Inheritance & Protected fields*/
console.log(">>> Inheritance");
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = [];
        _this.admins = admins;
        // this.employees.push("hah!"); <<< Error
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    ITDepartment.prototype.addAvailableEmployee = function (name) {
        this.availableEmployees.push(name);
    };
    ITDepartment.prototype.printAvailableEmployees = function () {
        console.log(this.availableEmployees);
    };
    ITDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    Object.defineProperty(ITDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            else {
                throw new Error("No reports found!");
            }
        },
        set: function (value) {
            if (!value) {
                throw new Error("No report provided.");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    return ITDepartment;
}(TheDepartment));
var itDepartment = new ITDepartment("0", ["root"], []);
console.log(itDepartment.describe());
itDepartment.addAvailableEmployee("Mad Max");
itDepartment.printAvailableEmployees();
itDepartment.addReport("first");
itDepartment.mostRecentReport = "second one";
console.log(itDepartment.mostRecentReport);
var employee1 = TheDepartment.createEmployee("tester");
console.log(employee1);
/** Interface */
console.log(">>> Interface");
var person1;
person1 = {
    name: "Hans",
    age: 10,
    greet: function (phrase) {
        console.log(this.name + " says " + phrase);
    }
};
person1.greet("YOLO!");
console.log(">>> Interface with Class");
var Robot = /** @class */ (function () {
    function Robot(name, position) {
        this.name = name;
        this.position = position;
        this.type = "Android";
        this.brainType = "T1000";
    }
    return Robot;
}());
var robot1 = new Robot("C3PO", "Navigator");
console.log(robot1);
console.log("Function Interface");
var addThem = function (a, b, c) {
    return c ? a + b + c : a + b;
};
console.log("2 + 2 = " + addThem(2, 2));
console.log("2 + 2 + 1 = " + addThem(2, 2, 1));
