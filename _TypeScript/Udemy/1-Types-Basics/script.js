/** Basics */
console.log(">>> Basics");
function add(n1, n2) {
    return n1 + n2;
}
var a = 2;
var b = 5.5;
var result = add(a, b);
console.log(result);
/** Objects */
console.log(">>> Objects");
var PersonPosition;
(function (PersonPosition) {
    PersonPosition[PersonPosition["ADMIN"] = 0] = "ADMIN";
    PersonPosition[PersonPosition["READ_ONLY"] = 1] = "READ_ONLY";
    PersonPosition[PersonPosition["AUTHOR"] = 2] = "AUTHOR";
})(PersonPosition || (PersonPosition = {}));
var person = {
    name: "iam",
    age: 42,
    hobbies: ["sports", "cooking"],
    role: [2, "author"],
    position: PersonPosition.ADMIN
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // console.log(hobby.map()); >>> TypeError
}
person.role = [0, "admin"];
/** Union Types & Literals*/
console.log(">>> Union Types");
function combine(inp1, inp2, resultConversion) {
    var result;
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        result = inp1 + inp2;
    }
    else {
        result = String(inp1) + String(inp2);
    }
    if (resultConversion === "as-string") {
        return result.toString();
    }
    else {
        return +result;
    }
}
var combinedNumbers = combine(40, 2, "as-number");
console.log("Combined numbers: " + combinedNumbers);
var combinedNumbersAsStrings = combine("1900", "42", "as-string");
console.log("Combined numbers as strings: " + combinedNumbersAsStrings);
var combinedStrings = combine("foo", "bar", "as-string");
console.log("Combined strings: " + combinedStrings);
/** Custom Types */
console.log(">>> Custom Types");
function combination(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log("Combination: " + combination(1, 2));
console.log("Combination Types combination:");
var u1 = { name: "Max" };
console.log("u1 initial:", u1);
u1 = "Michael";
console.log("u1 modified: " + u1);
