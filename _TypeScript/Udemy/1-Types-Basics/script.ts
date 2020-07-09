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

/** Union Types */
console.log(">>> Union Types");

function combine(inp1: number | string, inp2: number | string) {
  let result;
  if (typeof inp1 === "number" && typeof inp2 === "number") {
    result = inp1 + inp2;
  } else {
    result = String(inp1) + String(inp2);
  }
  return result;
}

const combinedNumbers = combine(40, 2);
console.log(`Combined numbers: ${combinedNumbers}`);

const combinedStrings = combine("foo", "bar");
console.log(`Combined strings: ${combinedStrings}`);
