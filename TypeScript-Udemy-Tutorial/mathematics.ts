namespace Mathematics {
  const PI = 3.14; // is private

  export function calculateCircumference(diameter: number): number {
    return diameter * PI;
  }

  export function calculateRectangle(width: number, length: number): number {
    return width * length;
  }
}
console.log('--- Namespaces ---');
console.log(Mathematics.calculateRectangle(10, 20));
