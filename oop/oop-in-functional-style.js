// the coffe machine's Constructor
function CoffeeMachine(power) {
  // the deviding private and public is ENCAPSULATION

  // PUBLIC properties and methods
  // everything in this is public
  this.waterAmmount = 0; // watter ammount
  this.run = function() {
    // setTimeout will run onReady() after getBoilTime() ms
    timerId = setTimeout(_onReady, _getBoilTime());
    console.log('A coffe machine is started');
  }
  this.stop = function() {
    clearTimeout(timerId);
    console.log('A coffe machine is stoped!');
  }
  console.log('A coffee machine ('+ power +'W) is created');

  // PRIVATE properties and methods
  var WATER_HEAT_CAPACITY = 4200;
  var DELTA_TEMP = 80;
  var timerId; // is used for stoping
  var self = this;

  // calculate the boil time
  function _getBoilTime() {
    // this is undefined, could be used
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

    return this.waterAmmount * WATER_HEAT_CAPACITY * DELTA_TEMP / power;
  }

  // when coffe is ready
  function _onReady() {
    console.log('Coffee is ready');
  }
}

// create a coffe machine
var coffeeMachine = new CoffeeMachine(100);
// pour water
coffeeMachine.waterAmmount = 200;
// start boiling
coffeeMachine.run();
coffeeMachine.stop();
