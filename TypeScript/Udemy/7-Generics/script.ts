/** Generics */
console.log(">>> Generics");

const users: Array<string> = ["Max", "Anna"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done!");
  }, 1000);
});

promise.then((data) => {
  console.log(data.split(" "));
});

console.log(">>> Generic Functions");

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "Max" }, { position: "developer" });
console.log(mergedObject);

const name1 = mergedObject.name;

interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = `Got ${element.length} element(s)`;
  }
  return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
