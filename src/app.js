thermostat = new Thermostat();

var ThermoTempUpdate = function() {
  document.getElementById('thermostat').innerHTML = thermostat.temperature
};

var ThermoAppRaise = function() {
  thermostat.raise();
  ThermoTempUpdate();
};

var ThermoAppLower = function() {
  thermostat.lower();
  ThermoTempUpdate();
};

var ThermoAppReset = function() {
  thermostat.resetButton();
  ThermoTempUpdate();
};

var ThermoAppPowerSavingToggle = function() {
  thermostat.powerSavingToggle();
  ThermoTempUpdate();
};