// 1 задание
let door = "open";

if (door === "open") {
  console.log("Дверь открыта");
} else console.log("Дверь закрыта");

//2 задание
let status = "default";
let discountAmount = 30;

if (discountAmount === 10) {
  status = "bronze";
} else if (discountAmount === 15) {
  status = "silver";
} else if (discountAmount === 20) {
  status == "gold";
}

console.log(
  `Приветствуем вас! Ваш статус: ${status} и ваша скидка составляет: ${discountAmount}`
);

// 3 задание

switch (discountAmount) {
  case 10:
    status = "bronze";
    break;
  case 15:
    status = "silver";
    break;
  case 20:
    status = "gold";
    break;
  case 25:
    status = "platinum";
    break;
  case 40:
    status = "palladium";
    break;
  default:
    status = "iron";
    discountAmount = 5;
    break;
}

console.log(
  `Приветствуем вас! Ваш статус: ${status} и ваша скидка составляет: ${discountAmount}`
);

// 4 задание
function getName(userName) {
  console.log(userName);
}
getName("Aleksandr");

//5 задание
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else return false;
}

let userAge = 32

if (isAdult(userAge) === true){
    console.log('Ура, вы совершеннолетний')
} else console.log('Тебе бы подрости, дружок')

// задание 6
getStatus('bronze')
function getStatus(status){
    let discount = 0
    switch (status) {
        case "bronze":
          discount = 10;
          break;
        case "silver":
          discount = 15;
          break;
        case "gold":
          discount = 20;
          break;
        case "platinum":
          discount = 25;
          break;
        case "palladium":
          discount = 40;
          break;
        default:
          status = "iron";
          discount = 5;
          break;
      }
      console.log(`Приветствуем вас! Ваш статус: ${status} и ваша скидка составляет: ${discount}`)
}