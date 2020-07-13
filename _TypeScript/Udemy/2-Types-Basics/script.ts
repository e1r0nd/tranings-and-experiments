/** Basics */
console.log(">>> Basics");

function add(n1: number, n2: number) {
  return n1 + n2;
}
const a = 2;
const b = 5.5;

const result = add(a, b);
console.log(result);

/** Objects */
console.log(">>> Objects");

enum PersonPosition {
  ADMIN = 0,
  READ_ONLY = 1,
  AUTHOR = 2,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  position: PersonPosition;
} = {
  name: "iam",
  age: 42,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // Tuple
  position: PersonPosition.ADMIN, // Enum
};

console.log(person.name);
for (const hobby of person.hobbies) {
  console.log(hobby);
  // console.log(hobby.map()); >>> TypeError
}

person.role = [0, "admin"];

/** Union Types & Literals*/
console.log(">>> Union Types");

function combine(
  inp1: number | string,
  inp2: number | string,
  resultConversion: "as-number" | "as-string"
) {
  let result: number | string;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  } else {
    result = String(inp1) + String(inp2);
  }
  if (resultConversion === "as-string") {
    return result.toString();
  } else {
    return +result;
  }
}

const combinedNumbers = combine(40, 2, "as-number");
console.log(`Combined numbers: ${combinedNumbers}`);

const combinedNumbersAsStrings = combine("1900", "42", "as-string");
console.log(`Combined numbers as strings: ${combinedNumbersAsStrings}`);

const combinedStrings = combine("foo", "bar", "as-string");
console.log(`Combined strings: ${combinedStrings}`);

/** Custom Types */
console.log(">>> Custom Types");

type Combinable = number | string;

function combination(a: Combinable, b: Combinable) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + b.toString();
  }
}
console.log(`Combination: ${combination(1, 2)}`);

console.log("Combination Types combination:");
type User = { name: string } | string;

let u1: User = { name: "Max" };
console.log("u1 initial:", u1);

u1 = "Michael";
console.log(`u1 modified: ${u1}`);

/** Function Types */
console.log(">>> Function Type");

let combineValues: (x: number, b: number) => number;
combineValues = add;
// combineValues = 5; Error -> Type '5' is not assignable to type 'Function'.
console.log(`via a function: ${combineValues(1, 2)}`);

function printResult(text: number | string) {
  console.log(text.toString());
}
function addAndHandle(x: number, y: number, cb: (z: number) => void) {
  const result = x + y;
  cb(result);
}

console.log("via a callback function:");
addAndHandle(40, 2, printResult);

/** Unknown & Never types */
console.log(">>> Unknown & Never Types");
let userInput: unknown;
let userName: string;

userInput = "Max";
// userName = userInput; <<< Error
if (typeof userInput === "string") {
  userName = userInput; // No Error
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}
generateError("An error occured", 500);
