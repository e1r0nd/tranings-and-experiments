"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log(">>> Decorators");
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("Creating person object");
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
console.log(">>> Decorators Factory");
function LoggingFactory(logString) {
    return function (constructor) {
        console.log(logString);
        console.log("From Factory: ", constructor);
    };
}
let NewPerson = class NewPerson {
    constructor() {
        console.log("Create a new one...");
    }
};
NewPerson = __decorate([
    LoggingFactory("NEW PERSON")
], NewPerson);
const newPers = new NewPerson();
console.log(newPers);
console.log(">>> Decorator property");
function Log(target, propertyName) {
    console.log("Property decorator:");
    console.log(target, propertyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(value) {
        if (value > 0) {
            this._price = value;
        }
        else {
            throw new Error("Invalid price");
        }
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
