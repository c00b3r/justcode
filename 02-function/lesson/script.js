// 1 задание
const name = "Aleksandr";
const name2 = "Oleg";

if (name == "Aleksandr") {
  console.log(`Приветствую, ${name}`);
} else {
  console.log("Вы еще не зарегистрованы");
}

// 2 задание
let health = 50;

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

// 3 задание
switch(health){
    case 100:
        console.log('Вы здоровы')
    break
    case 75:
        console.log('Вы ранены')
    break
    case 50:
        console.log('Вам надо подлечится')
    break
    case 0:
        console.log('Вы мертвы')
    break
    default:
        console.log(`Ваш уровень здоровья ${health}`)
    break
}

//4 задание 
function checkUser(userName,age){
    if (userName === "Aleksandr") {
        console.log(`Приветствую, ${userName}, вам ${age} лет`);
      } else {
        console.log("Вы еще не зарегистрованы");
      }
}

checkUser(name,21)