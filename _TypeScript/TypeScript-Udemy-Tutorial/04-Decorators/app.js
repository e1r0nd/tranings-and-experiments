"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log('--- Decorators ---');
function logged(constructorFn) {
    console.log(constructorFn);
}
var Person = /** @class */ (function () {
    function Person() {
        console.log('hi!');
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
// @logging(false)
// class Car {}
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
function echo(constructorFn) {
    constructorFn.prototype.echo = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = 'Green Plant';
    }
    Plant = __decorate([
        printable,
        echo,
        logged
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// Method Descorator
// -- This works in TSv1.8 but doesn't in v3.2. Not sure why.
// function editable(value: boolean) {
//   return function(
//     target: any,
//     propName: string,
//     descriptor: PropertyDescriptor,
//   ) {
//     descriptor.writable = value;
//   };
// }
// class Project {
//   projectName: string;
//   constructor(name: string) {
//     this.projectName = name;
//   }
//   @editable(false)
//   calcBudget() {
//     console.log(1000);
//   }
// }
// const project = new Project('New Project');
// project.calcBudget();
// project.calcBudget = function() {
//   console.log(2000);
// };
// project.calcBudget();
// Parameter Decorator
function printInfo(target, methodName, paramIndex) {
    console.log('Target:', target);
    console.log('Method Name:', methodName);
    console.log('Parameter Index:', paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumber = function (mode, printAll) {
        if (printAll) {
            console.log(mode, 1999);
        }
        else {
            console.log(mode, 100);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumber", null);
    return Course;
}());
var course = new Course('New Course');
course.printStudentNumber('', true);
course.printStudentNumber('', false);
//# sourceMappingURL=app.js.map