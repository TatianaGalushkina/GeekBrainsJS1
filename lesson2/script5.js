/*
5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
var summ, diff, mult, div;

do{
    var arg1 = parseInt(prompt("Задание 5. \nЗадайте значение первого параметра: "));
} while(isNaN(arg1));

do{
    var arg2 = parseInt(prompt("Задайте значение второго параметра: "));
} while(isNaN(arg2));

summ = summFun(arg1, arg2);
diff = diffFun(arg1, arg2);
mult = multFun(arg1, arg2);
div = divFun(arg1, arg2);

alert ("Результат выполнения арифметических операций:\n" + 
       arg1 + " + " + arg2 + " = " + summ + 
       "\n" + arg1 + " - " + arg2 + " = " + diff + 
       "\n" + arg1 + " * " + arg2 + " = " + mult + 
       "\n" + arg1 + " / " + arg2 + " = " + div);

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