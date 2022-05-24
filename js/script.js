
// Define Product
let productsDom = document.querySelector(".products");
let cartsProductMenu = document.querySelector(".carts-products")
let cartsProductDivDom = document.querySelector(".carts-products div")
let shopingCartIcon = document.querySelector(".shopingCart")
let badgeDom = document.querySelector(".badge")
let Products = [
  {
    id: 1,
    title: "laptop itme",
    size: "large",
    imageUlr: "../images/laptop .jpg"
  },
  {
    id: 2,
    title: "headphone itme",
    size: "medium",
    imageUlr: "../images/headphone .jpg"
  },
  {
    id: 3,
    title: "ipad itme",
    size: "small",
    imageUlr: "../images/ipad .jpg"
  },
  {
    id: 4,
    title: "mobile itme",
    size: "large",
    imageUlr: "../images/mobile .jpg"
  },
];


function drawProductsUi () {
  let productsUi = Products.map((itme)=>{
    return `
    <div class="product-itme">
    <img src="${itme.imageUlr}" class="product-itme-img" alt="image">
    <div class="product-itme-desc">
        <h2>${itme.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <span>${itme.size}</span>
    </div>
    <div class="product-itme-actions">
        <button class="add-to-cart" onclick="addedToCart(${itme.id})" id="addCart" >Add To Cart</button>
        <i class="favorite fa-regular fa-heart"></i>
    </div>
</div>
    `
  })

  productsDom.innerHTML = productsUi
}
drawProductsUi()

let addedItme = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : []
if(addedItme) {
  addedItme.map(itme =>{
    cartsProductDivDom.innerHTML += `<p> ${itme.title} </p>`;
  })
  badgeDom.style.display = "block";
  badgeDom.innerHTML = addedItme.length
}

function addedToCart (id) {
  if (localStorage.getItem("username")) {
    let choosenItme = Products.find((itme)=> itme.id === id)
    cartsProductDivDom.innerHTML += `<p> ${choosenItme.title} </p>`;
    addedItme = [...addedItme , choosenItme]
    localStorage.setItem("productsInCart" , JSON.stringify(addedItme))
    let cartProductLength = document.querySelectorAll(".carts-products div p")
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductLength.length
  }else {
    window.location = "./HTML/login.html"
  }

}

shopingCartIcon.addEventListener('click' , openCartMenu)
function openCartMenu () {
  if(cartsProductDivDom.innerHTML != ""){
   if( cartsProductMenu.style.display == "block"){
    cartsProductMenu.style.display = "none"
   }else {
    cartsProductMenu.style.display = "block"
   }
  }
  
}