class Product {
    constructor(name,price) {
        this.name = name;
        this.price = price
    }

    displayProduct(){
        console.log(`product: ${this.name} and price: ${this.price}`)

    }
}
const product = new Product('lap',200000)
product.displayProduct();