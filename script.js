window.onload = () => {
  // VARIABLES
  const temp = document.getElementById("temp");
  const unit = document.getElementById("unit");
  const btnConvert = document.getElementById("btn-convert");
  const result = document.getElementById("result");

  // EVENT LISTENERS
  btnConvert.addEventListener("click", (event) => {
    // prevent default
    event.preventDefault();

    // gather input
    let temperature = parseFloat(temp.value);
    let tempUnit = unit.value;

    // convert calculations if input is in fahrenheit
    if (tempUnit === "f") {
      temperature = ((temperature - 32) / 9) * 5;
    }
  });
};
