6 > 4 && 10 < 5 // false
(30 + 4) > (7 ** 2) // false
null && true //false
!('hi' + 'hi') && true //false
!('hi' + 'hi') && false //false

'Привет' + 'Друг' == !null //Сравнение без учета типа данных
'Привет' + 'Друг' === !null // С учетом

const ten = 10; 
const hundred = 100;
const thousand = 1000;

console.log((ten * ten + hundred) * hundred >= thousand * ten ) //true
