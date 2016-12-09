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

// the coffe machine's object
var coffeeMachine = {
  __proto__: Machine, // inheritance from Machine
  // extend PROTECTED methods
  parentDisable: Machine._disable,
  _disable: function() {
    // stop machine if turned off
    coffeeMachine.parentDisable.call(this, arguments);
    if (!this._disabled) {
      this.stop();
    }
  },

  // PUBLIC properties (nothing is private)
  waterAmount: 0, // watter ammount
  //var power = power || 100;
  WATERHEATCAPACITY: 4200,
  DELTATEMP: 80,
  timerId: null, // is used for stoping
  startTime: null,

  // when coffe is ready
  onReady: function() {
    this.passedTime();
    console.log('Coffee is ready');
    this._disable(); // turn off
  },
  passedTime: function() {
    var endTime = Date.now();
    var elapsed = (endTime - this.startTime) / 1000;
    console.log('Passed', elapsed, 'seconds before:');
  },

  // setter for Water Amount
  setWaterAmount: function(amount) {
    if (amount < 0) {
      throw new Error('Should be positive');
    }
    if (amount > this.capacity) {
      throw new Error('Could not be more than ' + this.capacity);
    }
    this.waterAmount = amount;
  },
  getWaterAmount: function() {
    // getter for Water Amount
    return this.waterAmount;
  },
  run: function() {
    if (!this._enabled) {
      throw new Error('It is turned off!');
    }
    // setTimeout will run onReady() after getBoilTime() ms
    this.timerId = setTimeout(this.onReady.bind(this), this.getBoilTime());
    this.startTime = Date.now();
    console.log(this._title + ': is started, wait ' + this.getBoilTime() + 'ms');
  },
  stop: function() {
    // stop machine!
    clearTimeout(this.timerId);
    this.passedTime();
    console.log(this._title + ': is stoped!');
  },
  // calculate the boil time
   getBoilTime: function() {
    return this.waterAmount * this.WATERHEATCAPACITY * this.DELTATEMP / this._power;
  },
  
  // Initialization: create properties
  init: function(power, title, capacity) {
    this.capacity = capacity || 500;
    this._power = power || 1000;
    this._title = title || 'A simple machine';
    console.log(this._title + ': ('+ power +'W) is created');
  }
}

// init a coffe machine
coffeeMachine.init(10000, 'A coffee machine', 500);
coffeeMachine._enable(); // turn on

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
