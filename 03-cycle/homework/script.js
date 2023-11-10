//1
// Создать цикл, который выводит числа от 1 до 10 включительно.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2
//Написать цикл, который выводит только четные числа от 1 до 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//3
//Реализовать цикл, который выводит таблицу умножения для числа 5.
let num = 5;

for (i = 1; i <= 10; i++) {
    result = num * i
    console.log(`${num} * ${i} = ${result}`)
}

//4
// Написать функцию, которая считает сумму всех чисел от 1 до 100.
function sum(start, end){
    let sum = 0
    for(let i = start; i <= end; i++){
        sum += i
    }
    return sum
}

console.log(sum(1,100))
