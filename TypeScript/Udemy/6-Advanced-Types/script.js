/** Intersection Types */
console.log(">>> Intersection Types");
var robotN = {
    name: "Max",
    privileges: ["do", "dont"],
    startDate: new Date()
};
console.log(robotN);
// const s: Universal = 'Z' <<< Error
/** Type Guard */
function sum(a, b) {
    // return a + b; <<< Error
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else {
        return +a + +b;
    }
}
console.log(sum("ani", "vesral"));
console.log(sum(40, 2));
function printEmployeeInformation(person) {
    console.log("Name: " + person.name);
    // console.log(`Start date: ${person.startDate}`); <<< Error
    // Type Guard
    if ("startDate" in person) {
        console.log("Start date: " + person.startDate);
    }
}
var me = {
    name: "Me",
    startDate: new Date()
};
printEmployeeInformation(me);
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Driving a truck...");
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log("Loading: " + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1);
    }
}
useVehicle(v2);
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
            break;
    }
    console.log("Moving like " + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
var errorBag = {
    error: "Ops",
    username: "user1"
};
function sumIt(a, b) {
    // return a + b; <<< Error
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else {
        return +a + +b;
    }
}
var names = sumIt("Max", " Schwarz");
console.log(names.split(" "));
/** Optional chaining */
/*
const fetchedUser1 = {
  username: "user1",
  email: "mail@me.com",
  job: { title: "CEO" },
};
const fetchedUser2 = {
  username: "user1",
  email: "mail@me.com",
  status: "active",
};

[fetchedUser1, fetchedUser2].forEach((user) => {
  console.log("User's title: ", user?.job.title);
});
*/
/** Nullish coalition */
var something1 = "";
console.log("Nullish #1: ", something1 !== null && something1 !== void 0 ? something1 : "DEFAULT");
var something2 = undefined;
console.log("Nullish #2: ", something2 !== null && something2 !== void 0 ? something2 : "DEFAULT");
