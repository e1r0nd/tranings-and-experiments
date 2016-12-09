// the Machine's Constructor
var Machine = {
  // PROTECTED properties and methods
  // should be used only for children
  _enabled: false,

  _enable: function() {
    this._enabled = true;
    console.log(this._title + ': enabled!');
  },

  _disable: function() {
    this._enabled = false;
    console.log(this._title + ': disabled!');
  }
}

// the coffe machine's Constructor
function coffeeMachine() {/*
  // extend PROTECTED methods
  var parentDisable = this._disable;
  this._disable = function() {
    // stop machine if turned off
    parentDisable.call(this, arguments);
    if (!this._disabled) {
      this.stop();
    }
  };
  // the deviding private and public is ENCAPSULATION

  // PUBLIC properties and methods
  // everything in "this" is public

  // setter for Water Amount
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error('Should be positive');
    }
    if (amount > capacity) {
      throw new Error('Could not be more than ' + capacity);
    }
    waterAmount = amount;
  };
  this.getWaterAmount = function() {
    // getter for Water Amount
    return waterAmount;
  };
  this.run = function() {
    if (!self._enabled) {
      throw new Error('It is turned off!');
    }
    // setTimeout will run onReady() after getBoilTime() ms
    timerId = setTimeout(onReady, getBoilTime());
    startTime = Date.now();
    console.log(this._title + ': is started, wait ' + getBoilTime() + 'ms');
  }
  this.stop = function() {
    // stop machine!
    clearTimeout(timerId);
    passedTime();
    console.log(this._title + ': is stoped!');
  }

  // PRIVATE properties and methods
  var waterAmount = 0; // watter ammount
  //var power = power || 100;
  var capacity = capacity || 500;
  var WATERHEATCAPACITY = 4200;
  var DELTATEMP = 80;
  var timerId; // is used for stoping
  var startTime;
  var self = this;

  // calculate the boil time
  function getBoilTime() {
    // "this" is undefined, therefore could be used
    // 1) call
    //  this.run = function() {
    //   setTimeout(onReady, getBoilTime.call(this)); <<<
    // };
    // 2) bind
    // var getBoilTime = function() {
    //   return this.waterAmount * WATERHEATCAPACITY * 80 / power;
    // }.bind(this); <<<
    // 3) cache this
    // function CoffeeMachine(power) {
    //   var self = this; <<<
    //   function getBoilTime() {
    //     return self.waterAmount * WATERHEATCAPACITY * 80 / power; <<<
    //   }
    // }
    return waterAmount * WATERHEATCAPACITY * DELTATEMP / self._power;
  }

  // when coffe is ready
  function onReady() {
    passedTime();
    console.log('Coffee is ready');
    self._disable(); // turn off
  }

  function passedTime() {
    var endTime = Date.now();
    var elapsed = (endTime - startTime) / 1000;
    console.log('Passed', elapsed, 'seconds before:');
  }
*/
  __proto__: Machine, // inheritance from Machine
  
  // Initialization: create properties
  init: function(power, title, capacity) {
    capacity: capacity || 500;
    this._power = power;
    this._title = title || 'A simple machine';
    console.log(this._title + ': ('+ power +'W) is created');
  }

}

// create a coffe machine
coffeeMachine.init(10000, 'A coffee machine', 500);

console.log('Attempt #1:');
coffeeMachine._enable(); // turn on
coffeeMachine.setWaterAmount(30); // pour water
console.log('The water amount is ' + coffeeMachine.getWaterAmount());
coffeeMachine.run(); // start boiling
coffeeMachine._disable(); // turn off

console.log('Attempt #2:');
coffeeMachine._enable(); // turn on
coffeeMachine.setWaterAmount(30); // pour water
console.log('The water amount is ' + coffeeMachine.getWaterAmount());
coffeeMachine.run(); // start boiling
