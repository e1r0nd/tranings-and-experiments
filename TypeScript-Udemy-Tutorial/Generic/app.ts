console.log('--- Generics ---');
// Simple Generic
function echo(data: any) {
  return data;
}

console.log(echo('Test String'));
console.log(echo(42));

// Better Generic
function betterEcho<T>(data: T) {
  return data;
}
console.log(betterEcho('test'));
//console.log(betterEcho<number>('42')); // <- doesn't work

// Built-in Generics
const results: Array<number> = [1, 2.3];
results.push(0);
// results.push('a'); // <- doen't work

// Arrays
function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}
printAll<string>(['apple', 'banana']);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('Some thin G'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | bigint> {
  // ! postfix - ignore "strictPropertyInitialization": true
  baseValue!: T;
  multipyValue!: U;
  calculate(): number {
    return +this.baseValue * +this.multipyValue;
  }
}
const multiply = new SimpleMath<string, number>();
multiply.baseValue = '10';
multiply.multipyValue = 20;
console.log(multiply.calculate());
