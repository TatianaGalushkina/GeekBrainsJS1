/*
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

var backet = [
    {
        title: "Товар 1",
        price: 100,
        count: 1
    },
    {
        title: "Товар 2",
        price: 200,
        count: 1
    },
    {
        title: "Товар 3",
        price: 300,
        count: 1
    }
];

document.write("<br>Задание 3. Стоимость корзины (countBasketPrice): " + countBasketPrice(backet));;

function countBasketPrice(backet) {
    var sum = 0;
    for (var good of backet) {
        sum += good.price * good.count;
    }
    return sum;
}
