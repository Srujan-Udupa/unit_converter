function updateTargetUnits() {
    var sourceUnit = document.getElementById("sourceUnit").value;
    var targetUnitSelect = document.getElementById("targetUnit");
    targetUnitSelect.innerHTML = "";

var targetUnits = [];

    switch (sourceUnit) {
      case "meter":
      case "kilometer":
      case "mile":
        targetUnits = ["meter", "kilometer", "mile"];
        break;

      case "kilogram":
      case "pound":
      case "ounce":
        targetUnits = ["kilogram", "pound", "ounce"];
        break;

      case "celsius":
      case "fahrenheit":
      case "kelvin":
        targetUnits = ["celsius", "fahrenheit", "kelvin"];
        break;

      case "second":
      case "minute":
      case "hour":
        targetUnits = ["second", "minute", "hour"];
        break;

      case "joule":
      case "calorie":
      case "kilowattHour":
        targetUnits = ["joule", "calorie", "kilowattHour"];
        break;

      default:
        break;
    }
    targetUnits.forEach(function (unit) {
      var option = document.createElement("option");
      option.value = unit;
      option.text = unit.charAt(0).toUpperCase() + unit.slice(1);
      targetUnitSelect.appendChild(option);
    });
  }
  function convert() {
var value = parseFloat(document.getElementById("value").value);
var sourceUnit = document.getElementById("sourceUnit").value;
var targetUnit = document.getElementById("targetUnit").value;
if (sourceUnit === targetUnit) {
  document.getElementById("result").textContent = value;
  return;
}

var result;
if (sourceUnit === "meter" && targetUnit === "kilometer") {
  result = value / 1000;
} else if (sourceUnit === "meter" && targetUnit === "mile") {
  result = value * 0.000621371;
} else if (sourceUnit === "kilometer" && targetUnit === "meter") {
  result = value * 1000;
} else if (sourceUnit === "kilometer" && targetUnit === "mile") {
  result = value * 0.621371;
} else if (sourceUnit === "mile" && targetUnit === "meter") {
  result = value / 0.000621371;
} else if (sourceUnit === "mile" && targetUnit === "kilometer") {
  result = value / 0.621371;
} else if (sourceUnit === "kilogram" && targetUnit === "pound") {
  result = value * 2.20462;
} else if (sourceUnit === "kilogram" && targetUnit === "ounce") {
  result = value * 35.27396;
} else if (sourceUnit === "pound" && targetUnit === "kilogram") {
  result = value * 0.453592;
} else if (sourceUnit === "pound" && targetUnit === "ounce") {
  result = value * 16;
} else if (sourceUnit === "ounce" && targetUnit === "kilogram") {
  result = value * 0.0283495;
} else if (sourceUnit === "ounce" && targetUnit === "pound") {
  result = value * 0.0625;
} else if (sourceUnit === "celsius" && targetUnit === "fahrenheit") {
  result = (value * 9/5) + 32;
} else if (sourceUnit === "celsius" && targetUnit === "kelvin") {
  result = value + 273.15;
} else if (sourceUnit === "fahrenheit" && targetUnit === "celsius") {
  result = (value - 32) * 5/9;
} else if (sourceUnit === "fahrenheit" && targetUnit === "kelvin") {
  result = (value + 459.67) * 5/9;
} else if (sourceUnit === "kelvin" && targetUnit === "celsius") {
  result = value - 273.15;
} else if (sourceUnit === "kelvin" && targetUnit === "fahrenheit") {
  result = (value * 9/5) - 459.67;
} else if (sourceUnit === "second" && targetUnit === "minute") {
  result = value / 60;
} else if (sourceUnit === "second" && targetUnit === "hour") {
  result = value / 3600;
} else if (sourceUnit === "minute" && targetUnit === "second") {
  result = value * 60;
} else if (sourceUnit === "minute" && targetUnit === "hour") {
  result = value / 60;
} else if (sourceUnit === "hour" && targetUnit === "second") {
  result = value * 3600;
} else if (sourceUnit === "hour" && targetUnit === "minute") {
  result = value * 60;
} else if (sourceUnit === "joule" && targetUnit === "calorie") {
  result = value * 0.239006;
} else if (sourceUnit === "joule" && targetUnit === "kilowattHour") {
  result = value / 3600000;
} else if (sourceUnit === "calorie" && targetUnit === "joule") {
  result = value / 0.239006;
} else if (sourceUnit === "calorie" && targetUnit === "kilowattHour") {
  result = value / 860421;
} else if (sourceUnit === "kilowattHour" && targetUnit === "joule") {
  result = value * 3600000;
} else if (sourceUnit === "kilowattHour" && targetUnit === "calorie") {
  result = value * 860421;
} else {
  result = "Conversion not supported";
}
document.getElementById("result").textContent = result;
}