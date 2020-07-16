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
        console.log("Deparment:" + this.name);
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
        console.log("Deparment" + this.id + ": " + this.name);
    };
    TheDepartment.prototype.employee = function (employee) {
        this.employees.push(employee);
    };
    TheDepartment.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
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
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = [];
        _this.admins = admins;
        return _this;
        // this.employees.push("hah!"); <<< Error
    }
    ITDepartment.prototype.addAvailableEmployee = function (name) {
        this.availableEmployees.push(name);
    };
    ITDepartment.prototype.printAvailableEmployees = function () {
        console.log(this.availableEmployees);
    };
    return ITDepartment;
}(TheDepartment));
var itDepartment = new ITDepartment("0", ["root"]);
console.log(itDepartment.describe());
itDepartment.addAvailableEmployee("Mad Max");
itDepartment.printAvailableEmployees();
