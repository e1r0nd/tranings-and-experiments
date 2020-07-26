console.log('--- Decorators ---');

function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Person {
  constructor() {
    console.log('hi!');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

// @logging(false)
// class Car {}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  };
}
function echo(constructorFn: Function) {
  constructorFn.prototype.echo = function() {
    console.log(this);
  };
}
@printable
@echo
@logged
class Plant {
  name = 'Green Plant';
}
const plant = new Plant();
(<any>plant).print();

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
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log('Target:', target);
  console.log('Method Name:', methodName);
  console.log('Parameter Index:', paramIndex);
}
class Course {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  printStudentNumber(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(mode, 1999);
    } else {
      console.log(mode, 100);
    }
  }
}
const course = new Course('New Course');
course.printStudentNumber('', true);
course.printStudentNumber('', false);
