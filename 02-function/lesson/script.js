// 1 задание
const name = "Aleksandr";
const name2 = "Oleg";

if (name == "Aleksandr") {
  console.log(`Приветствую, ${name}`);
} else {
  console.log("Вы еще не зарегистрованы");
}

// 2 задание
let health = 123;

if (health == 100) {
  console.log("Вы здоровы");
} else if (health < 100 && health >= 75) {
  console.log("Не помешало бы подлечиться");
} else if (health < 75 && health >= 50) {
  console.log("Срочно надо подлечиться, уровень здоровья слишком низкий");
} else if (health < 50 && health > 0) {
  console.log("Срочно надо подлечиться, уровень здоровья слишком низкий");
} else if (health == 0) {
  console.log("Вы мертвы");
} else {
  console.log(`Ваш уровень здоровья ${health}`);
}
