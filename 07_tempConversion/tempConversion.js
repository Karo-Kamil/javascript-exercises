const convertToFahrenheit = function(temp) {
  let fahr = 0;
  if (typeof +temp === "number"){
    fahr = (+temp * 1.8) + 32;
    fahr = Math.round(fahr * 10) / 10;
  }
  return fahr;
};

const convertToCelsius = function(temp) {
  let celc = 0;
  if (typeof +temp === "number"){
    celc = (+temp - 32) / 1.8;
    celc = Math.round(celc * 10) / 10;
  }
  return celc;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
