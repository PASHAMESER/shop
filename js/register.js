//Register User

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener('click' , register)

function register (e) {
        e.preventDefault()
        if(username.value === "" || email.value === "" || password.value === "") {
            Swal.fire({
                title: 'Error!',
                text: 'Please fill in the fields',
                icon: 'error',
                confirmButtonText: 'Close'
            })
        }else {
            localStorage.setItem("username" , username.value)
            localStorage.setItem("email" , email.value)
            localStorage.setItem("password" , password.value)
            setTimeout(()=>{
                window.location = "../HTML/login.html";
            },1500)
            
        }
    
    }
