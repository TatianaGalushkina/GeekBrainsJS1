/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch).*/

do{
    var arg1 = parseInt(prompt("Задайте значение первого параметра: "));
} while(isNaN(arg1));

do{
    var arg2 = parseInt(prompt("Задание 6. \nЗадайте значение второго параметра: "));
} while(isNaN(arg2));

do{
    var operation = prompt("Задайте требуемую операцию (summ, diff, mult, div): ");
} while(!(operation == "summ" || operation == "diff" || operation == "mult" || operation == "div"));

alert(mathOperation(arg1, arg2, operation));

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "summ":
            return "Результат сложения параметров: \n" + arg1 + " + " + arg2 + " = " + summFun(arg1, arg2);
            break;
        case "diff":
            return "Результат вычитания параметров: \n" + arg1 + " - " + arg2 + " = " +  diffFun(arg1, arg2);
            break;
        case "mult":
            return "Результат умножения параметров: \n" + arg1 + " * " + arg2 + " = " +  multFun(arg1, arg2);
            break;
        case "div":
            return "Результат деления параметров: \n" + arg1 + " / " + arg2 + " = " +  divFun(arg1, arg2);
            break;
        default:
            alert("Не верно заданы входные параметры!");
    }
}

function summFun(arg1, arg2){
    return arg1 + arg2;    
}

function diffFun(arg1, arg2){
    return arg1 - arg2;    
}

function multFun(arg1, arg2){
    return arg1 * arg2;    
}

function divFun(arg1, arg2){
    if (arg2 == 0){
        return "Деление на 0";
    }
    return arg1 / arg2;    
}