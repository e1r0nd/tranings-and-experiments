function removeDups(arr) {
  let result = [];
  
  arr.map(function(itm) {
    if (result.indexOf(itm) === -1) {
      result.push(itm);
    }
  });
  
  return result;
};

function testIt(inputArray, resultArray) {
  var isEqual = true;
  
  inputArray.forEach(function(itm) {
    if (resultArray.indexOf(itm) === -1) {
      return isEqual = false;
    }
  });
  
  return isEqual;
};

let inputArray = [1, 2, 3, 3, 3, 4, 5, 5, 6];
let inputWrongArray = [0, 1, 2, 3, 3, 3, 4, 5, 5, 6];
let resultArray = [1, 2, 3, 4, 5, 6];

console.log('test should fail: ' + ((testIt(removeDups(inputWrongArray), resultArray)) ? 'passed' : 'failed'));
console.log('test should pass: ' + ((testIt(removeDups(inputArray), resultArray)) ? 'passed' : 'failed'));
