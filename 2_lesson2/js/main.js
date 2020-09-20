class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._fetchProducts();
    }
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
//            this.allProducts.push(productObj);
//            block.innerHTML += productObj.render();
            block.insertAdjacentHTML('beforeend',productObj.render());
            
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

class ProductItem{
     constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img; 
    }
    
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
   
}

//класс определяющий продукт в корзине, потомок класса ProductItem
class ProductItemCart extends ProductItem{
    constructor (product,img='https://placehold.it/200x150', countProduct){
        //вызываем конструктор базового класса
        super (product,img='https://placehold.it/200x150');
        this.countProduct = countProduct;
        
    }
    
    //Подсчет стоимости этого товара 
    countProductSum(){

    }
    //Удалить из корзины 
    delete(){
        
    }
    //увеличить количество 
    numPlus(){
        
    }
    numMinus(){
        
    }
}

class Cart{
    constructor(ProductItemCart, container = '.cart'){
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

let list = new ProductsList();
list.render();
let itemCart = new ProductItemCart(1,"test",10,2);

//const products = [
//    {id: 1, title: 'Notebook', price: 2000},
//    {id: 2, title: 'Mouse', price: 20},
//    {id: 3, title: 'Keyboard', price: 200},
//    {id: 4, title: 'Gamepad', price: 50},
//];
////Функция для формирования верстки каждого товара
//const renderProduct = (product,img='https://placehold.it/200x150') => {
//    return `<div class="product-item">
//                <img src="${img}">
//                <h3>${product.title}</h3>
//                <p>${product.price}</p>
//                <button class="buy-btn">Купить</button>
//            </div>`
//};
//const renderPage = list => {
//    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
//};
//
//renderPage(products);