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
