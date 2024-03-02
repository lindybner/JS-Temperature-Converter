window.onload = () => {
  // VARIABLES
  const temp = document.getElementById("temp");
  const unit = document.getElementById("unit");
  const btnConvert = document.getElementById("btn-convert");

  // EVENT LISTENERS
  btnConvert.addEventListener("click", (event) => {
    // prevent default
    event.preventDefault();

    // gather input
    let temperature = parseFloat(temp.value);
    let tempUnit = unit.value;
  });
};
