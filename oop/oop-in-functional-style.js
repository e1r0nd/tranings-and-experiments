// the coffe machine's Constructor
function CoffeeMachine(power, capacity) {
  // the deviding private and public is ENCAPSULATION

  // PUBLIC properties and methods
  // everything in "this" is public

  // setter for Water Amount
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error('Should be positive');
    }
    if (amount > _capacity) {
      throw new Error('Could not be more than ' + _capacity);
    }
    _waterAmount = amount;
  };
  // getter for Water Amount
  this.getWaterAmount = function() {
    return _waterAmount;
  };
  this.run = function() {
    // setTimeout will run onReady() after getBoilTime() ms
    _timerId = setTimeout(_onReady, _getBoilTime());
    _startTime = Date.now();
    console.log('A coffee machine is started');
  }
  this.stop = function() {
    clearTimeout(_timerId);
    _passedTime();
    console.log('A coffee machine is stoped!');
  }

  // PRIVATE properties and methods
  var _waterAmount = 0; // watter ammount
  var _power = power || 100;
  var _capacity = capacity || 500;
  var WATER_HEAT_CAPACITY = 4200;
  var DELTA_TEMP = 80;
  var _timerId; // is used for stoping
  var _startTime;
  var self = this;

  // calculate the boil time
  function _getBoilTime() {
    // "this" is undefined, could be used
    // 1) call
    //  this.run = function() {
    //   setTimeout(onReady, getBoilTime.call(this)); <<<
    // };
    // 2) bind
    // var getBoilTime = function() {
    //   return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    // }.bind(this); <<<
    // 3) cache this
    // function CoffeeMachine(power) {
    //   var self = this; <<<
    //   function getBoilTime() {
    //     return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; <<<
    //   }
    // }
    return _waterAmount * WATER_HEAT_CAPACITY * DELTA_TEMP / _power;
  }

  // when coffe is ready
  function _onReady() {
    _passedTime();
    console.log('Coffee is ready');
  }

  function _passedTime() {
    var endTime = Date.now();
    var elapsed = (endTime - _startTime) / 1000;
    console.log('Passed', elapsed, 'seconds before:');
  }

  console.log('A coffee machine ('+ _power +'W) is created');
}

// create a coffe machine
var coffeeMachine = new CoffeeMachine(10000, 500);
// pour water
coffeeMachine.setWaterAmount(10);
console.log('The water amount is ', coffeeMachine.getWaterAmount());
// start boiling
coffeeMachine.run();
// coffeeMachine.stop();
