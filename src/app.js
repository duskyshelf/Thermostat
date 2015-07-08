var thermostat = new Thermostat();

var colors = {low: 'blue', medium: 'green', high: 'orange', vhigh: 'red'}

var fahrenheit = false

var ThermoTempUpdate = function() {
  var fTemp = function() { return ((thermostat.temperature * 9) / 5)  + 32 };

  $( "#thermostat" ).html(thermostat.temperature);
  if ( fahrenheit ) { $( "#thermostat" ).html( fTemp() ) };
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

var ThermoAppFahreinheitToggle = function() {
  if (fahrenheit) { fahrenheit = false } else { fahrenheit = true };
  ThermoTempUpdate();
};

ThermoTempUpdate();


$('#raiseButton').click(ThermoAppRaise);

$('#lowerButton').click(ThermoAppLower);

$('#resetButton').click(ThermoAppReset);

$('#powerSaving').change(ThermoAppPowerSavingToggle);

$('#fButton').change(ThermoAppFahreinheitToggle);