var Thermostat = function(){
  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxtemp = 25;
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
  this.maxtemp = 32;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  this.maxtemp = 25;
};

Thermostat.prototype.raise = function() {
  if (this.temperature < this.maxtemp ) {this.temperature++;}
};

Thermostat.prototype.lower = function () {
  if (this.temperature > 10) {this.temperature--;}
};

Thermostat.prototype.resetButton = function () {
  this.temperature = 20;
};