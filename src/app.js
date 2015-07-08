var thermostat = new Thermostat();

var colors = {low: 'blue', medium: 'green', high: 'orange', vhigh: 'red'}

var ThermoTempUpdate = function() {
  $( "#thermostat" ).html(thermostat.temperature);
  $( "#thermostat" ).css("color", colors[thermostat.powerLevel()]);
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

ThermoTempUpdate();

$('#raiseButton').click(ThermoAppRaise);

$('#lowerButton').click(ThermoAppLower);

$('#resetButton').click(ThermoAppReset);

$('#powerSaving').change(ThermoAppPowerSavingToggle);