const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsListCart{
    constructor(container = '.products-cart'){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._getProducts()
            .then (data => {
                this.goods = [...data.contents];
                this.render();
        });
    }
    
   _getProducts(){
       return fetch(`${API}/getBasket.json`)
           .then (result => result.json())
           .catch (error => {
               console.log(error);
           })
       }
   
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItemCart(product);
//            this.allProducts.push(productObj);
//            block.innerHTML += productObj.render();
           productObj.numPlus(); block.insertAdjacentHTML('beforeend',productObj.render());
            
            
        }
    }
    
    sumCount(){
        let sum = 0;
        for(let product of this.goods){
            sum+=product.price;
        }
        return sum;
    }
    
}
//класс определяющий продукт в корзине, потомок класса ProductItem
class ProductItemCart extends ProductItem{
    constructor (product,img='https://placehold.it/200x150', countProduct){
        //вызываем конструктор базового класса
        super (product,img='https://placehold.it/200x150');
        this.quantity = product.quantity;
    }
    render(){
        self = this;
        return `<div class="product-item" data_id="${this.id_product}">
                <img src="${this.img}" alt="some img">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <p>${this.quantity} шт.</p>
                <p class="add_cart" id="${this.id_product}" onclick="getProductId()">+</p>
            </div>`
    }
    
    //Подсчет стоимости этого товара 
    countProductSum(){

    }
    //Удалить из корзины 
    delete(){
        
    }
    
    //увеличить количество 
    numPlus(){
        this.quantity += 1;
        return this.quantity;
    }
    
    numMinus(){
        this.quantity -= 1;
        return this.quantity;
    }
}

class Cart{
    constructor(ProductItemCart, container = '.products-cart'){
        //промо-код
        this.promo = promo;
        //комментарий к заказу
        this.comment = comment;
    }

    //Применить скидку
    usePromo(){
        
    }
    //Отменить заказ
    cancel(){
        
    }
    //Пересчитать стоимость корзины 
    totalAmountCount(){
        
    }
    //Пересчитать количество товаров в корзине
    quantityCount(){
        
    }
    
}

let list = new ProductsListCart();
list.render();

function getProductId(){
    return event.target.id;
}
