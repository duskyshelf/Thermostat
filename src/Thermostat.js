var Thermostat = function() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.maxtemp = 25;
};

Thermostat.prototype.powerSavingToggle = function() {
  if (this.powerSavingMode) { this.powerSavingOff() } else { this.powerSavingOn() }
};

Thermostat.prototype.powerSavingOff = function () {
  this.powerSavingMode = false;
  this.maxtemp = 32;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSavingMode = true;
  if (this.temperature > 25) { this.temperature = 25 };
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

Thermostat.prototype.powerLevel = function() {
  if (thermostat.temperature <= 16) { return "low"; }
  if (thermostat.temperature >= 28) { return "vhigh"; }
  if (thermostat.temperature >= 24) { return "high"; }
  if (thermostat.temperature >= 17) { return "medium"; }
};