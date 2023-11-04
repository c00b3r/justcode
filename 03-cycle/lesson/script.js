// 1
// Написать цикл, который выводит все числа от 1 до 10.  - while do

let counter = 1;
while (counter >= 1 && counter <= 10) {
  console.log(counter);
  counter += 1;
}

//2
// Написать цикл, который выводит все четные числа от 1 до 100. - do while
counter = 1;
while (counter <= 100) {
  if (counter % 2 == 0) {
    console.log(counter);
  }

  counter += 1;
}
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//3
// Написать цикл, который выводит все числа от 100 до 1 (в обратном порядке). for

for (let i = 100; i > 0; i--) {
  console.log(i);
}

// 4
// Написать цикл, который выполняется 20 раз, каждую итерацию выводится сообщение на экран - число ${число} - ${чётное / нечётное} , т.е, внутри цикла сперва необходимо определить является ли число чётным или нет - for

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`число ${i} - чётное`);
  } else console.log(`число ${i} - нечётное`);
}

// проект Калькулятор
// 4 функции: умножение, деление, сумма, вычитание

function getSum(...arr) {
  let sum = 0;
  for (elem of arr) {
    sum += elem;
  }

  return sum;
}

console.log(getSum(1, 2, 3, 4, 5));

function getDifference(...arr) {
  let result = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    result -= arr[i];
  }

  return result;
}

console.log(getDifference(5, 5, 6, 7));

function getMultiplication(...arr) {
  let result = 1;
  for (elem of arr) {
    result *= elem;
  }

  return result;
}
console.log(getMultiplication(1, 2, 3, 5));

function getDivision(...arr) {
  let result = arr[0];
  for (let i = 1; i <= arr.length - 1; i++) {
    result = result / arr[i];
  }

  return result;
}

console.log(getDivision(16, 4, 4, 4));

// Напишите программу, в которой с помощью console.log выводятся все чис­ла от 1 до 100 с двумя исключениями.
// Для чисел, кратных 3, вместо числа выводится "Fizz", а для чисел, кратных 5 (но не 3), - "Buzz".

// Решение:
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else console.log(i);
}

//Когда это заработает, измените программу так, чтобы она печатала "FizzBuzz" для чисел,
// которые делятся и на 3, и на 5 (и по-прежнему печатайте "Fizz" или "Buzz" для чисел, кратных только одному из них).

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else console.log(i);
}

// Напишите программу, которая создает строку, представляющую сетку 8 х 8,
// используя для разделения строк символы новой строки. В каждой позиции сетки стоит либо пробел,
// либо символ"#". Эти символы должны распола­гаться в шахматном порядке.

let stringForTask = "";
let size = 8;
for (let i = 0; i < size; i++) {
  let resultStr = "";
  for (let j = 0; j < size; j++) {
    resultStr += (i + j) % 2 ? "#" : " ";
  }
  stringForTask += resultStr + "\n";
}

console.log(stringForTask);
