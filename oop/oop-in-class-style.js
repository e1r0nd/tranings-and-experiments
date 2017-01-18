// the Machine's Constructor
class Machine {
  constructor() {
    // PROTECTED properties and methods
    // should be used only for children
    this._enabled = false;
  }
  
  _enable() {
    this._enabled = true;
    console.log(`${this.title}: enabled!`);
  }
  
  _disable() {
    this._enabled = false;
    console.log(`${this.title}: disabled!`);
  }
}

// the coffe machine's Constructor
class CoffeeMachine extend Machine { // inheritance from Machine
  constructor(power, title, capacity) {
    this.power = power;
    this.title = title || 'A simple machine';
    this.capacity = capacity || 500;
    this.waterAmount = 0; // watter ammount
    this.timerId; // is used for stoping
    this.startTime;
    this.WATERHEATCAPACITY = 4200;
    this.DELTATEMP = 80;
    
    console.log(`${this.title}: (${this.power}W) is created`);
    
    get waterAmount() {
      // getter for Water Amount
      return this.waterAmount;
    };
    set waterAmount(amount) {
      // setter for Water Amount
      if (amount < 0) {
        throw new Error('Should be positive');
      }
      if (amount > this.capacity) {
        throw new Error(`Could not be more than ${this.capacity}`);
      }
      this.waterAmount = amount;
    };
     get boilTime() {
      // calculate the boil time
      return this.waterAmount * this.WATERHEATCAPACITY * this.DELTATEMP / this.power;
    }
    
    onReady() {
      // when coffe is ready
      this.passedTime();
      console.log('Coffee is ready');
      this._disable(); // turn off
    }
    passedTime() {
      var endTime = Date.now();
      var elapsed = (endTime - this.startTime) / 1000;
      console.log(`Passed ${elapsed} seconds before:`);
    }
    run() {
      if (!this._enabled) {
        throw new Error('It is turned off!');
      }
      // setTimeout will run onReady() after getBoilTime() ms
      this.timerId = setTimeout(this.onReady.bind(this), this.boilTime);
      this.startTime = Date.now();
      console.log(`${this.title}: is started, wait ${this.boilTime}ms`);
    }
    stop() {
      // stop machine!
      clearTimeout(this.timerId);
      this.passedTime();
      console.log(`${this.title}: is stoped!`);
    }
  }

// extend PROTECTED methods
CoffeeMachine.prototype._disable = function() {
  // stop machine if turned off
  Machine.prototype._disable.apply(this, arguments);
  if (!this._enabled) {
    this.stop();
  }
};

// create a coffe machine
const coffeeMachine = new CoffeeMachine(10000, 'A coffee machine', 500);

console.log('Attempt #1:');
coffeeMachine._enable(); // turn on
coffeeMachine.waterAmount = 30; // pour water
console.log('The water amount is ' + coffeeMachine.waterAmount);
coffeeMachine.run(); // start boiling
coffeeMachine._disable(); // turn off

console.log('Attempt #2:');
coffeeMachine._enable(); // turn on
coffeeMachine.waterAmount =30; // pour water
console.log('The water amount is ' + coffeeMachine.waterAmount);
coffeeMachine.run(); // start boiling
