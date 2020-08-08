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
const mergedObject = merge({ name: "Max" }, { position: "developer" });
console.log(mergedObject);
const name1 = mergedObject.name;
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = `Got ${element.length} element(s)`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Sports", "Cooking"]));
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: "Max" }, "name"));
console.log(">>> Generic Classes");
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
// const objStorage = new DataStorage<object>() <<< Error
