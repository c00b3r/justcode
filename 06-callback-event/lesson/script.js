const container = document.querySelector(".container");

const input = document.querySelector(".input");

const numbersContainer = document.querySelector(".number");
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

// кнопки с операторами
const operatorsContainer = document.querySelector(".operators");
const operators = ["*", "/", "+", "-", "="];

const createEl = (value, classList, listener) => {
  const element = document.createElement("div");

  element.textContent = `${value}`;

  if (classList) {
    element.classList = `${classList}`;
  }

  element.addEventListener("click", listener);

  return element;
};

const numbersElements = numbers.map((element) =>
  createEl(element, "", numberCallBack)
);

function numberCallBack() {
  const currentValue = input.textContent;
  if (currentValue === "0") {
    input.textContent = this.textContent;
  } else {
    input.textContent = `${currentValue}${this.textContent}`;
  }
}

numbersContainer.append(...numbersElements);

const operatorsElements = operators.map(function (element) {
  return createEl(element, "operator", operatorCallBack);
});

operatorsContainer.append(...operatorsElements);

function operatorCallBack() {
  if (this.textContent === "=") {
    calculator.secondNum = Number(input.textContent);

    const operator = calculator.lastOperator
      ? calculator.lastOperator
      : calculator.currentOperator;

      calculator.equal(calculator.secondNum, operator);

    return;
  }

  if (!calculator.currentOperator) {
    calculator.firstNum = Number(input.textContent);
    calculator.lastOperator = "";
  } else {
    return;
  }

  // получаем тип операции
  calculator.currentOperator = this.textContent;

  // обнулить значение инпута
  input.textContent = 0;
}

const calculator = {
  firstNum: 0,
  secondNum: 0,
  result: 0,
  currentOperator: "",

  sum(number1, number2) {
    return number1 + number2;
  },
  minus(number1, number2) {
    return number1 - number2;
  },
  multiply(number1, number2) {
    return number1 * number2;
  },
  divide(number1, number2) {
    return number1 / number2;
  },
  equal(secondNum, operator) {
    const operation = this.getOperation(operator);
    if (this.result) {
      this.result = operation(+this.result, +secondNum);
    } else this.result = operation(+this.firstNum, +this.secondNum);

    input.textContent = this.result;

    this.firstNumber = 0;
    this.secondNumber = 0;
    this.lastOperator = this.currentOperator;
    this.currentOperator = "";
  },
  getOperation(operator) {
    switch (operator) {
      case "+":
        return this.sum;
      case "-":
        return this.minus;
      case "*":
        return this.multiply;
      case "/":
        return this.divide;
      default:
        console.error("Выбрана неизвестная операция");
        return;
    }
  },
};
