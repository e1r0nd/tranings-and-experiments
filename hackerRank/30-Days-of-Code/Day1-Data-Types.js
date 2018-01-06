/**
 * Day 1: Data Types
 * https://www.hackerrank.com/challenges/30-data-types
 * Task
 * Complete the code in the editor below. The variables i, d, and s are
 * already declared and initialized for you. You must:
 * 1. Declare 3 variables: one of type int, one of type double, and one of
 * type String.
 * 2. Read 3 lines of input from stdin (according to the sequence given in
 * the Input Format section below) and initialize your 3 variables.
 * 3. Use the + operator to perform the following operations: 
 * a) Print the sum of i plus your int variable on a new line.
 * b) Print the sum of d plus your double variable to a scale of one decimal
 * place on a new line.
 * c) Concatenate s with the string you read as input and print the result
 * on a new line.
 */
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    const int = Math.round(+readLine());
    const double = parseFloat(readLine());
    const str = readLine().trim();
    // Print the sum of both integer variables on a new line.
    console.log(i + int);
    // Print the sum of the double variables on a new line.
    const sum = d + double;
    console.log(sum.toFixed(1));
    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(`${s}${str}`);
}
