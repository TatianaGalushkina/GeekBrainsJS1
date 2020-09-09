var totalAmount = 0;
var backet = [];

function putInCart() {
    //Получаем номер товара
    var productNum = event.target.id.split("_")[1];
    //Получаем заголовок товара 
    var title = document.querySelectorAll('.title')[productNum - 1].innerHTML;
    //Получаем цену этого товара
    var price = parseInt(document.querySelectorAll('.price')[productNum - 1].innerHTML);
    var count = 1;
    //Складываем его в корзину

    backet.push({
        title: title,
        price: price,
        count: 1
    });
    
    var list = document.querySelector("#cart");
    var newProduct = document.createElement("li");
    newProduct.insertAdjacentHTML("afterBegin", "<p>" + title + "</p><p>Цена: " + price);
    list.append(newProduct);

    //Прибавляем цену этого товара
    var price = document.querySelector(".totalAmount");
    totalAmount += parseInt(document.querySelectorAll('.price')[productNum - 1].innerHTML);
    price.innerHTML= "ИТОГО: " + totalAmount;
  
}

