let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
loginBtn.addEventListener("click", login );

if (username === "") {
  logout.style.display = ""
}
function login (e) {
    e.preventDefault();
    if (username.value === "" || password.value === "") {
      Swal.fire({
        title: "Error!",
        text: "Please fill in the fields",
        icon: "error",
        confirmButtonText: "Close",
      });
    } else {
      if (
        getUser &&
        getUser.trim() === username.value.trim() &&
        getPassword &&
        getPassword === password.value
      ) {
        setTimeout(() => {
          window.location = "/index.html";
        }, 1500);
      } else {
        Swal.fire({
          title: "Error!",
          text: "برجاء التأكد من كتابة البيانات بشكل صحيح",
          icon: "error",
          confirmButtonText: "Close",
          timer: "3000",
        });
      }
    }
  }
