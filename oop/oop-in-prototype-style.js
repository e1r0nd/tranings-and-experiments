// the Machine's Constructor
function Machine() {
  // PROTECTED properties and methods
  // should be used only for children
  this._enabled = false;
}
Machine.prototype._enable = function() {
  this._enabled = true;
  console.log(this.title + ': enabled!');
},
Machine.prototype._disable = function() {
  this._enabled = false;
  console.log(this.title + ': disabled!');
}

// the coffe machine's Constructor
function CoffeeMachine(power, title, capacity) {
  this.power = power;
  this.title = title || 'A simple machine';
  this.capacity = capacity || 500;
  this.waterAmount = 0; // watter ammount
  this.timerId; // is used for stoping
  this.startTime;
  this.WATERHEATCAPACITY = 4200;
  this.DELTATEMP = 80;
  
  console.log(this.title + ': ('+ this.power +'W) is created');
}

CoffeeMachine.prototype = Object.create(Machine.prototype); // inheritance from Machine
CoffeeMachine.prototype.constructor = CoffeeMachine; //store constructor

// extend PROTECTED methods
CoffeeMachine.prototype._disable = function() {
  // stop machine if turned off
  Machine.prototype._disable.apply(this, arguments);
  if (!this._enabled) {
    this.stop();
  }
};

// calculate the boil time
CoffeeMachine.prototype.getBoilTime = function() {
  return this.waterAmount * this.WATERHEATCAPACITY * this.DELTATEMP / this.power;
}

// when coffe is ready
CoffeeMachine.prototype.onReady = function() {
  this.passedTime();
  console.log('Coffee is ready');
  this._disable(); // turn off
}
CoffeeMachine.prototype.passedTime = function() {
  var endTime = Date.now();
  var elapsed = (endTime - this.startTime) / 1000;
  console.log('Passed', elapsed, 'seconds before:');
}

// setter for Water Amount
CoffeeMachine.prototype.setWaterAmount = function(amount) {
  if (amount < 0) {
    throw new Error('Should be positive');
  }
  if (amount > this.capacity) {
    throw new Error('Could not be more than ' + this.capacity);
  }
  this.waterAmount = amount;
};
CoffeeMachine.prototype.getWaterAmount = function() {
  // getter for Water Amount
  return this.waterAmount;
};
CoffeeMachine.prototype.run = function() {
  if (!this._enabled) {
    throw new Error('It is turned off!');
  }
  // setTimeout will run onReady() after getBoilTime() ms
  this.timerId = setTimeout(this.onReady.bind(this), this.getBoilTime());
  this.startTime = Date.now();
  console.log(this.title + ': is started, wait ' + this.getBoilTime() + 'ms');
}
CoffeeMachine.prototype.stop = function() {
  // stop machine!
  clearTimeout(this.timerId);
  this.passedTime();
  console.log(this.title + ': is stoped!');
}

// create a coffe machine
var coffeeMachine = new CoffeeMachine(10000, 'A coffee machine', 500);

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
