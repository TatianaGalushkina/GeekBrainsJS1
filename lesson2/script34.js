//№3
var a = parseInt(prompt("Укажите значение переменной а: "));
var b = parseInt(prompt("Укажите значение переменной b: "));
if (!isNaN(a) && !isNaN(b)) {
    if (a >= 0 && b >= 0) {
        alert("Оба числа положительные.\na - b = " + (a - b));
    }
    else if (a < 0 && b < 0) {
        alert("Оба числа отрицательные.\na * b = " + (a * b));
    }
    else {
        alert("Числа разных знаков.\na + b = " + (a + b));
    }
} else {
    alert("Одна из переменных была указана не корректно");
}

//є4
do {
    var aSwitch = parseInt(prompt("Укажите значение переменной а в промежутке от 0 до 15: "));
} while (!isNaN(aSwitch) && aSwitch < 0 && aSwitch > 15)

switch (aSwitch) {
    case 1:
        console.log("1");
    case 2:
        console.log("2");
    case 3:
        console.log("3");
    case 4:
        console.log("4");
    case 5:
        console.log("5");
    case 6:
        console.log("6");
    case 7:
        console.log("7");
    case 8:
        console.log("8");
    case 9:
        console.log("9");
    case 10:
        console.log("10");
    case 11:
        console.log("11");
    case 12:
        console.log("12");
    case 13:
        console.log("13");
    case 14:
        console.log("14");
    case 15:
        console.log("15");
}

