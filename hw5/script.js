const getSelect = (selector) => document.querySelector(selector),
  display = getSelect(".display input"),
  memoryBlock = getSelect(".memory"),
  arrValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."],
  arrOperators = ["+", "-", "/", "*"];

let operandA = "",
  operandB = "",
  operator = "",
  equal = false,
  memoryValue = 0,
  count = 0;

const clear = () => {
  (operandA = ""), (operandB = ""), (operator = "");
  display.value = 0;
};
const clearAllMemory = () => {
  (memoryValue = 0), (display.value = 0);
  count = 0;
};
const mathOperation = (operator) => {
  switch (operator) {
    case "+":
      operandA = Number(operandA) + Number(operandB);
      break;
    case "-":
      operandA = operandA - operandB;
      break;
    case "*":
      operandA = operandA * operandB;
      break;
    case "/":
      if (operandB === "0") {
        display.value = "Impossible action";
        return;
      }
      operandA = operandA / operandB;
      break;
  }
  equal = true;
  display.value = operandA;
};
const getResult = (key) => {
  if (arrValues.includes(key)) {
    if (operator === "" && operandB === "") {
      operandA += key;
      display.value = operandA;
    } else if (operandA !== "" && operandB !== "" && equal) {
      operandB = key;
      equal = false;
      display.value = operandB;
    } else {
      operandB += key;
      display.value = operandB;
    }
    return;
  }
  if (arrOperators.includes(key)) {
    operator = key;
    return;
  }
  if (key === "=") {
    mathOperation(operator);
  }
};
const getShowMemory = () => {
  count++;
  display.value = memoryValue;
  if (count == 2) {
    clearAllMemory();
    memoryBlock.classList.add("hide");
  }
};
const addMemory = () => {
  memoryValue += +operandA;
  count = 0;
};
const substractMemory = () => {
  memoryValue -= operandA;
  operandA = 0;
  count = 0;
};
getSelect(".keys").addEventListener("click", (e) => {
  if (!e.target.classList.contains("button")) return;

  if (e.target.classList.contains("clear")) {
    return clear();
  }
  if (e.target.value == `mrc`) {
    getShowMemory();
  } else if (e.target.value == `m+`) {
    memoryBlock.classList.remove("hide");
    addMemory();
  } else if (e.target.value == `m-`) {
    memoryBlock.classList.remove("hide");
    substractMemory();
  }

  let key = e.target.value;
  getResult(key);
});
