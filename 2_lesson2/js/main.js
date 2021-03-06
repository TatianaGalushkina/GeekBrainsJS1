class ProductItem{
     constructor(product,img='https://placehold.it/200x150'){
        this.product_name = product.product_name;
        this.id_product = product.id_product;
        this.price = product.price;
        this.img = img; 
    }
    
    render(){
        return `<div class="product-item" data-id="${this.id_product}">
                <img src="${this.img}" alt="some img">
                <h3>${this.product_name}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
   
}