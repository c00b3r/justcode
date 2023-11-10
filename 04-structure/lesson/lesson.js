// Объекты
// 1
// Создайте объект car с свойствами brand, model и year, и методом start,
// который выводит в консоль сообщение "Автомобиль {brand} {model} {year} года выпуска заведен".

let car = {
  brand: "BMW",
  model: "X5",
  year: "2023",
  start: function () {
    console.log(
      `Автомобиль ${this.brand} ${this.model} ${this.year} года выпуска заведен`
    );
  },
};

car.start();

// 2
// Создайте объект user с свойствами name, age и методом greet,
// который выводит в консоль сообщение "Привет, меня зовут {name}, мне {age} лет".

const user = {
  name: "Aleksandr",
  age: "21",
  city: "ekb",
  greet: () => {
    console.log(`Привет, меня зовут ${user.name}, мне ${user.age} лет`);
  },
};

user.greet();

// 3
// Создайте объект calculator с методами add, minus, multiply и divide, которые принимают
// два числа в качестве аргументов и выполняют соответствующую математическую операцию, возвращая результат.

const calculator = {
  add: (num1, num2) => {
    console.log(num1 + num2);
  },
  minus: (num1, num2) => {
    console.log(num1 - num2);
  },
  multiply: (num1, num2) => {
    console.log(num1 * num2);
  },
  divide: (num1, num2) => {
    console.log(num1 / num2);
  },
};

calculator.add(2, 2);
calculator.minus(2, 2);
calculator.multiply(2, 2);
calculator.divide(2, 2);

// 3.1
// объект calclator с прошлого задания, но теперь передаём одно число
//и операция выполняется с уже имеющимся результатом
const calclator1 = {
  result: 0,
  add: function (num) {
    this.result += num;
    return this.result;
  },
  minus: function (num) {
    this.result -= num;
    return this.result;
  },
  multiply: function (num) {
    this.result *= num;
    return this.result;
  },
  divide: function (num) {
    this.result /= num;
    return this.result;
  },
};

console.log(calclator1.add(3));
console.log(calclator1.minus(1));
console.log(calclator1.multiply(3));
console.log(calclator1.divide(3));

// 4
// Создайте объект book с свойствами title, author и year, и методом getInfo, который выводит в консоль
// информацию о книге в формате "Название: {title}, Автор: {author}, Год издания: {year}".

const book = {
  title: "Преступление и наказание",
  author: "Фёдор Достоевский",
  year: "1866",
  getInfo: () => {
    console.log(
      `Название: ${book.title}, Автор: ${book.author}, Год издания:${book.year}`
    );
  },
};

book.getInfo();

// Массивы

// 1
// Создайте массив с числами (не менее 10) и выведите его длину

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

console.log(arr.length);

// 2
// Создайте два новых массива на основании предыдущего,
// содержащий только чётные и нечётные числа соответственно

const even = arr.filter((element) => {
  return element % 2 == 0;
});

const odd = arr.filter((element) => {
  return element % 2 != 0;
});

console.log(even, odd);

// 3
// Создайте массив содержащий объекты user, со свойствами age, number, city

const arr1 = [user.age, user.name, user.city];

console.log(arr1);

// 4
// Добавьте новый элемент в конец массива и выведите обновленный массив.

arr1.push("clown");
console.log(arr1);

// 5
// Удалите первый элемент из массива и выведите обновленный массив.

const newArr = arr1.shift();
console.log(newArr);

// 6
// Используя метод join(), объедините все элементы массива в одну строку, разделенную запятой.

const arrStr = ["a", "b", "o", "b", "a"];

const str = arrStr.join("");

console.log(str);

// 7
// Проверьте, содержит ли массив определенный элемент, и выведите соответствующее сообщение.

const arr2 = ["1", 2, "3", "4"];

const isHave = arr2.filter((element) => {
  return element === 2;
});

console.log(isHave);