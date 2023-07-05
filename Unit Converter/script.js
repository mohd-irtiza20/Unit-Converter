function convert() {
  var inputValue = document.getElementById('inputValue');
  var unitSelect = document.getElementById('unit');
  var resultDiv = document.getElementById('result');

  // Check if input value is valid
  if (isNaN(inputValue.value)) {
    resultDiv.textContent = "Invalid input. Please enter a number.";
    return;
  }

  var value = parseFloat(inputValue.value);
  var unit = unitSelect.value;
  var convertedValue;

  switch (unit) {
    case 'km':
      convertedValue = value * 0.621371;
      resultDiv.textContent = value + " Kilometers is equal to " + convertedValue.toFixed(2) + " Miles.";
      break;
    case 'mi':
      convertedValue = value * 1.60934;
      resultDiv.textContent = value + " Miles is equal to " + convertedValue.toFixed(2) + " Kilometers.";
      break;
    case 'm':
      convertedValue = value * 3.28084;
      resultDiv.textContent = value + " Meters is equal to " + convertedValue.toFixed(2) + " Feet.";
      break;
    case 'ft':
      convertedValue = value * 0.3048;
      resultDiv.textContent = value + " Feet is equal to " + convertedValue.toFixed(2) + " Meters.";
      break;
    default:
      resultDiv.textContent = "Invalid unit selection.";
      break;
  }
}