const loginBtn = document.getElementById("login-btn");
const registerBtn = document.getElementById("register-btn");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");


// hide the login form by adding hide-form class and removing hide-form class from register form the show it 
registerBtn.addEventListener("click",()=>{
    registerForm.classList.remove("hide-form");
     loginForm.classList.add("hide-form");
});

// hide the register form by adding hide-form class and removing hide-form class from loginform the show it 
loginBtn.addEventListener("click",()=>{
    registerForm.classList.add("hide-form");
    loginForm.classList.remove("hide-form");
});
