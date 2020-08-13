/*
8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
*/

do{
    var val = parseInt(prompt("Введите числовое значение для возведения в степень: "));
} while (isNaN(val));

do{
    var pow = parseInt(prompt("Введите степень, в которую необходимо возвести число: "));
} while (isNaN(pow) || pow < 0);

var res = power(val, pow);
alert("Результат возведения в степень: " + res);
function power(val, pow){
    if(pow > 0){
        return val * power(val, pow-1);
    }else{
      return 1;  
    } 
}
