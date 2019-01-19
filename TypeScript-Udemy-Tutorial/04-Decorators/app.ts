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

@logging(false)
class Car {}
