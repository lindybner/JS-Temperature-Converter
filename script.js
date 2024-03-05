// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
//     Expected Output :
//     60°C is 140 °F
//     45°F is 7.222222222222222°C

window.onload = () => {
  // VARIABLES
  const tempInput = document.getElementById("temp");
  const unitInput = document.getElementById("unit");
  const btnConvert = document.getElementById("btn-convert");
  const result = document.getElementById("result");
  let tempValue;
  let unitValue;
  let convertedTempValue;

  // FUNCTIONS

  // conversion calculations & output
  const output = (converted) => {
    result.innerHTML = converted;
  };

  const conversion = (tempValue, unitValue, convertedTempValue) => {
    if (unitValue === "f") {
      // if input is in fahrenheit
      convertedTempValue = ((tempValue - 32) / 9) * 5;
      return `${tempValue}&deg;F is ${convertedTempValue}&deg;C.`;
    } else {
      // if input is in celcius
      convertedTempValue = (tempValue / 5) * 9 + 32;
      return `${tempValue}&deg;C is ${convertedTempValue}&deg;F.`;
    }
  };

  // convert temperature
  const clickBtnConvert = (event) => {
    // prevent default
    event.preventDefault();

    // gather input
    tempValue = parseFloat(tempInput.value);
    unitValue = unitInput.value;

    // call conversion() & output() to convert & display result
    convertedTempValue = conversion(tempValue, unitValue);
    output(convertedTempValue);
  };

  // EVENT LISTENERS
  btnConvert.addEventListener("click", clickBtnConvert);
};
