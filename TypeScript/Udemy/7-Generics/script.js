"use strict";
/** Generics */
console.log(">>> Generics");
const users = ["Max", "Anna"];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 1000);
});
promise.then((data) => {
    console.log(data.split(" "));
});
console.log(">>> Generic Functions");
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
console.log(merge({ name: "Max" }, { position: "developer" }));
