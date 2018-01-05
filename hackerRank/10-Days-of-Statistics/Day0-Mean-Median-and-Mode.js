/**
 * Day 0: Mean, Median, and Mode
 * https://www.hackerrank.com/challenges/s10-basic-statistics
 * Task
 * Given an array, X, of N integers, calculate and print the respective mean,
 * median, and mode on separate lines. If your array contains more than one
 * modal value, choose the numerically smallest one.
 */
function processData(input) {
    //Enter your code here
    const inp = input.split('\n');
    const N = +inp[0];
    const arr = inp[1].split` `.map(Number);
    
    //Mean
    console.log((arr.reduce((x, y) => x + y, 0) / N).toFixed(1));
    
    //Median
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.round(sortedArr.length / 2);
    console.log(sortedArr.length % 2 === 0 ? (sortedArr[middle] + sortedArr[middle - 1]) / 2 : sortedArr[middle - 1]);
    
    //Mode
    const numMap = {};
    let max = -Infinity;
    let result = sortedArr[0];
    
    arr.forEach(x => {
        if (numMap[x]) {
            numMap[x] += 1;
            if (numMap[x] > max) {
                [max, result] = [Math.max(numMap[x], max), x];
            };
        } else {
            numMap[x] = 1;
        }
    });
    console.log(result);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});