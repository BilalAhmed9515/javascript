const productStore = {
    storeName: "TechMart",
    location: {
        country: "Pakistan",
        city: "Lahore",        
        address: {
            street: "Johar Town, Block H",
            zipCode: "54000",
            geo: {
                lat: 31.5204,
                lng: 74.3587
            }
        }
    },    
    categories: [
        {
            name: "Laptops",
            products: [
                {
                    id: 101,
                    name: "Dell XPS 13",
                    brand: "Dell",
                    price: 220000,
                    stock: 12,
                    features: ["i7", "16GB RAM", "512GB SSD"]
                },
                {
                    id: 102,
                    name: "MacBook Air",
                    brand: "Apple",
                    price: 250000,
                    stock: 5,
                    features: ["M2", "8GB RAM", "256GB SSD"]
                }
            ]
        },
        {
            name: "Mobiles",
            products: [
                {
                    id: 201,
                    name: "Samsung Galaxy S24",
                    brand: "Samsung",
                    price: 180000,
                    stock: 9,
                    features: ["5G", "128GB", "8GB RAM"]
                },
                {
                    id: 202,
                    name: "iPhone 15",
                    brand: "Apple",
                    price: 320000,
                    stock: 3,
                    features: ["128GB", "A16 Chip", "Dual Camera"]
                }
            ]
        }
    ],
    isOnline: true,
    contact: {
        email: "support@techmart.pk",
        phone: "+92-300-1234567"
    },
    getTotalProducts: function () {
        return this.categories.reduce((total, cat) => total + cat.products.length, 0);
    }
};
// Destructuring the productStore object

 console.log(productStore.location.city + " " + productStore.location.country); 
 console.log(productStore.categories[0].products[0].name);
 console.log(productStore.categories[1].products.forEach(product => {
    console.log(product.name);
 }));
 productStore.categories[0].products[1].features.forEach(f => console.log(f));
 console.log(productStore.categories[0].products[1]);
 if(productStore.isOnline === true) {
    console.log(`TechMart is online`);
 }
console.log(`Total Products: ${productStore.getTotalProducts()}`);
console.log(productStore.categories[1].products[1].price);
productStore.categories.forEach(category => {
    category.products.forEach(product => {
        if (product.name === "apple") {
            console.log(product.name);
        }
    });
})
let address = `${productStore.location.address.street}, ${productStore.location.city}, ${productStore.location.address.zipCode}, ${productStore.location.country}`;
console.log(address);

productStore.categories.forEach(category => {
    category.products.forEach(product=>{
        console.log(`Product Name: ${product.name}, - Price: ${product.price}`);
        
    })
})
