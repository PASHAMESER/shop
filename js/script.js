let userInfo = document.querySelector("#user-info");
let userDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");



let username = localStorage.getItem("username");
if (username) {
  links.remove();
  userInfo.style.display = "flex";
  userDom.innerHTML = username;
}

logoutBtn.addEventListener('click' , function () {
    localStorage.clear()
    setTimeout(()=>{
        window.location = "./HTML/register.html"
    },1000)
})

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
    imageUlr: "./image/pexels-hasan-albari-1229861.jpg"
  },
  {
    id: 2,
    title: "headphone itme",
    size: "medium",
    imageUlr: "./image/pexels-cottonbro-3945667.jpg"
  },
  {
    id: 3,
    title: "ipad itme",
    size: "small",
    imageUlr: "./image/pexels-josh-sorenson-1334597.jpg"
  },
  {
    id: 4,
    title: "mobile itme",
    size: "large",
    imageUlr: "./image/pexels-noah-erickson-404280.jpg"
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

function addedToCart (id) {
  let choosenItme = Products.find((itme)=> itme.id === id)
  cartsProductDivDom.innerHTML += `<p> ${choosenItme.title} </p>`;
  let cartProductLength = document.querySelectorAll(".carts-products div p")
  badgeDom.style.display = "block";
  badgeDom.innerHTML = cartProductLength.length
}

function checkLogedUser() {
  if (localStorage.getItem("username")) {
    console.log()
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