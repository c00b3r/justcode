//  1

function canGetCount(n) {
  let counter = n;

  return function () {
    if (counter > 0 && counter <= n) {
      console.log("yes");
      counter--;
    } else console.log("no");
  };
}

const getOne = canGetCount(5);

getOne()
getOne()
getOne()
getOne()
getOne()
getOne()

// 2 Доработать данную функцию таким образом, чтобы она возвращала объект с функциями - setValue (установление значения счётчика),
// clear (очистка значения счётчика), getValue (возвращает значение счётчика)

function setCounter(initialValue) {
  let counter = initialValue;

  console.log(counter);

  return {
    setValue: function (n) {
        counter = n
        console.log(counter);
    },

    clear: function () {
        counter = 0
        console.log(counter);
    },

    getValue: function (value) {
        counter += value;

        console.log(counter);
    },
  };
}

const incrementCounter = setCounter(10);

incrementCounter.getValue(3);
incrementCounter.getValue(4);
