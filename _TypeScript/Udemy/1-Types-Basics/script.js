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
/** Union Types */
console.log(">>> Union Types");
function combine(inp1, inp2) {
    var result;
    if (typeof inp1 === "number" && typeof inp2 === "number") {
        result = inp1 + inp2;
    }
    else {
        result = String(inp1) + String(inp2);
    }
    return result;
}
var combinedNumbers = combine(40, 2);
console.log("Combined numbers: " + combinedNumbers);
var combinedStrings = combine("foo", "bar");
console.log("Combined strings: " + combinedStrings);
