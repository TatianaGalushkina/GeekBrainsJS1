const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
//        this.allProducts = [];
        this._getProducts()
            .then (data => {
                this.goods = [...data];
                this.render();
        });
    }
    
   _getProducts(){
       return fetch(`${API}/catalogData.json`)
           .then (result => result.json())
           .catch (error => {
               console.log(error);
           })
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

let list = new ProductsList();
list.render();

