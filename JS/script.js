function inputSymbol(symbol) {
  var input = document.getElementById("Calculator");
  input.value += symbol;
}

function Calculator() {
  var formula = document.getElementById("Calculator");

  console.log(formula.value);
  formula.value = eval(formula.value);
}
function Clear() {
  var input = document.getElementById("Calculator");
  input.value = "";
}
