window.onload = () => {
  // VARIABLES
  const tempInput = document.getElementById("temp");
  const unitInput = document.getElementById("unit");
  const btnConvert = document.getElementById("btn-convert");
  const result = document.getElementById("result");
  let tempValueConvert;

  // FUNCTIONS

  // convert temperature
  const tempConvert = (event) => {
    // prevent default
    event.preventDefault();

    // gather input
    let tempValue = parseFloat(tempInput.value);
    let unitValue = unitInput.value;

    // conversion calculations
    if (unitValue === "f") {
      // if input is in fahrenheit
      tempValueConvert = ((tempValue - 32) / 9) * 5;
      result.innerHTML = `${tempValue} &deg;F is ${tempValueConvert} &deg;C.`;
    } else {
      // if input is in celcius
      tempValueConvert = (tempValue / 5) * 9 + 32;
      result.innerHTML = `${tempValue} &deg;C is ${tempValueConvert} &deg;F.`;
    }
  };

  // EVENT LISTENERS
  btnConvert.addEventListener("click", tempConvert);
};
