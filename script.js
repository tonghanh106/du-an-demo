const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const message = document.getElementById("message");
const togglePassword = document.getElementById("togglePassword");


// Hiện / Ẩn mật khẩu
togglePassword.addEventListener("click", function(){

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "🙈";
    }else{
        password.type = "password";
        togglePassword.textContent = "👁";
    }

});


// Xử lý đăng nhập
form.addEventListener("submit", function(e){

    e.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if(user === "" || pass === ""){
        message.textContent = "Vui lòng nhập đầy đủ thông tin";
        return;
    }

    // demo login
    if(user === "admin" && pass === "123456"){
        message.style.color = "green";
        message.textContent = "Đăng nhập thành công";

        setTimeout(()=>{
            window.location.href = "dashboard.html";
        },1000);
    }
    else{
        message.style.color = "red";
        message.textContent = "Sai tài khoản hoặc mật khẩu";
    }

});