"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('It works!');
var str = 'str';
// str = 28; <- cannot be Number
var hasBool = false;
// hasBool = 1; <- has to be Boolean
var myAge;
myAge = 42;
// myAge = '42'; <- cannot be reassigned
// array
var hobbies = ['Ski', 'Dance', 'Fly'];
hobbies.push('Swimming');
// hobbies.push(42); <- cannot push Number
var anything = ['Ski'];
anything.push('Swimming');
anything.push(42); // no error is here
// tuples
var address = ['Abc str.', 42];
// address = [32, 42]; <- not valid
// enum
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); // -> 100
// functions
function returnMyAge() {
    return myAge;
}
console.log(returnMyAge());
function hello() {
    console.log('Hello!');
}
function multiplier(a, b) {
    return a * b;
}
console.log(multiplier(2, 3));
// function types
var myMultiplier;
// myMultiplier = hello; <- not valid
myMultiplier = multiplier;
console.log(myMultiplier(3, 4));
function neverReturns() {
    throw new Error('oops');
}
// Objects
var userData = {
    name: 'Some',
    age: 42,
};
// userData = { <- cannot reassign properties ot thier types
//   a: 1,
//   b: 2,
// };
// complex object
var complex = {
    data: [3, 2, 1],
    output: function (all) {
        console.log('all:', all);
        return this.data;
    },
};
var complex1 = {
    data: [3, 2, 1],
    output: function (all) {
        console.log('all:', all);
        return this.data;
    },
};
// union types
var yourNumber = 42;
yourNumber = '42';
// yourNumber = true; // <- not valid
if (typeof yourNumber == 'string') {
    console.log(yourNumber);
}
// Nullable Types
var canBeNull = 12;
canBeNull = null;
var isUndefined;
isUndefined = null; // <- can be null
isUndefined = 42; // because it's defined as 'any'
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 1; }
    if (start > 0) {
        start -= 1;
    }
    else {
        console.log('Done!');
    }
    console.log('end:', end);
};
countdown(0);
console.log('Count this:');
countdown();
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
console.log(printInfo('Max', 42));
// Classes
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.age = 42;
        this.name = name;
        this.type = 'user';
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    Person.prototype.getType = function () {
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 'max01');
console.log(person /* person.type - is not accessible*/);
person.printAge();
// person.setType('user'); // is private
person.getType();
// Inheritance
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(userName) {
        var _this = _super.call(this, 'Max', userName) || this;
        _this.age = 15;
        return _this;
    }
    return Max;
}(Person));
var personMax = new Max('any');
console.log(personMax);
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'Green plant';
console.log(plant.species);
// Static properties and Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calc = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(Helpers.PI);
console.log(Helpers.calc(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeProjectName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.projectName = 'IT Project';
console.log(newProject);
// static constructor - For Singleton
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('Oopss'); // don't do that
var right = OnlyOne.getInstance(); // the right way
console.log(right);
//# sourceMappingURL=script.js.map