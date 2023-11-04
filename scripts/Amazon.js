import {cart} from './cart.js';
import {products} from './products.js';

//looping through the array products
let productshtml='';
products.forEach((product) => {

  productshtml += `<div class="card col-3 col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3 container-card">
                <div class="container-image">
                  
                    <img class="card-img-top" src="${product.image}">
                  
                </div>
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <img class="mb-2" src="images/ratings/rating-${product.rating.stars}.png" width="95px"><span class="text-primary"> ${product.rating.count}</span>
                  <div class="container-options mb-2">
                    <select class="js-quantity-selector">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                  </div>
                  <div class="container-price mb-3 fw-bolder">&#8377;${product.price}</div>
                    <div class="d-flex justify-content-center">
                    <button class="bg-warning container-button js-button" data-price=${product.price} data-name=${product.name} data-image=${product.image}>Add to Cart</button>
                    </div>
                </div>
              </div>`          
});
//getting the class from the html page and inserting the generted code to it
 document.querySelector('.js-products')
 .innerHTML = productshtml;



 document.querySelectorAll('.js-button')
 .forEach(function (button) {
  button.addEventListener('click',function () {
   let pName = button.dataset.name;
    let pImage = button.dataset.image;
    let pPrice =button.dataset.price;
    pPrice = Number(pPrice);
  



   //avoiding adding of two same product name and quantity
    let matchingItem;

   cart.forEach(function (item){
    if(pName === item.NameOfProduct){
      matchingItem=item;
    }
  });

    if(matchingItem) {
      matchingItem.quantity +=1;
      const totalPrice = pPrice*matchingItem.quantity;
      matchingItem.price = totalPrice;
    }else{
      cart.push({
        cartImage : pImage,
        NameOfProduct: pName,
        quantity : 1,
        price: pPrice
       });
    }

    let  TotalQuantity=0;

    cart.forEach(function(item){
       TotalQuantity += item.quantity;
    });

    document.querySelector('.js-cart-quantity')
    .innerHTML = TotalQuantity;
    console.log(cart);
  });
 })

