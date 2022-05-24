let productsInCart = localStorage.getItem("productsInCart")
let productsDom = document.querySelector(".products");

if(productsInCart) {
    let itmes = JSON.parse(productsInCart)
    drawCartProductsUi(itmes)
}

function drawCartProductsUi (products) {
    let productsUi = products.map((itme)=>{
      return `
      <div class="product-itme">
      <img src="${itme.imageUlr}" class="product-itme-img" alt="image">
      <div class="product-itme-desc">
          <h2>${itme.title}</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>${itme.size}</span>
      </div>
      <div class="product-itme-actions">
          <button class="add-to-cart" onclick="removeFromCart(${itme.id})" id="addCart" >Remove From Cart</button>
      </div>
  </div>
      `
    })
  
    productsDom.innerHTML = productsUi
  }