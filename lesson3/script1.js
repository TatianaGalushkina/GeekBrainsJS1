/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100
*/

var i, j, k, simpleStr;
i = 2;
k = 0;
simpleStr = "";
while (i <= 100){
    j = 2;
    while (j < i){
        if(i % j == 0){
            k++;
        }
        j++;
    }
    if (k == 0){
        simpleStr += i + ", ";
    }
    else{
        k = 0;
    }
    i++;
}
document.write("Задание 1. Простые числа в диапазоне от 1 до 100: " + simpleStr);