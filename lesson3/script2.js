/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
*/
var sum = 0;
var backet = [
    {
        title: "Товар 1",
        price:100,
        count:1
    },
    {
        title: "Товар 2",
        price:200,
        count: 3
    },
    {
        title: "Товар 3",
        price:300,
        count: 2
    }
];
    
for(var good of backet){
    sum +=  good.price * good.count;  
}

document.write("<br>Задание 2. Стоимость корзины: " + sum);