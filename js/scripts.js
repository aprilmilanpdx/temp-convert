function tempConvert(temp) {
  return (temp * (9/5) + 32);
}

const temp = prompt("Enter a temperature in Celcius to convert to Fahrenheit:");

window.alert("Your temperature in Fahrenheit is " + tempConvert(temp));
