function login_valid(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("pw").value;
    if (username.length != 0 && password.length != 0){
        alert("login successfully");
        return true;
    }
    else {
        alert("login failed");
        return false;
    }
}

function signup_valid() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pw").value;
    var confirmation = document.getElementById("c_pw").value;
    if (username.length != 0 && password.length != 0 && password == confirmation){
        alert("sign up successfully");
        return true;
    }
    else {
        alert("sign up failed");
        return false;
    }
}