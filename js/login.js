let email = document.getElementById("email");
let pass = document.getElementById("pass");

let errorEmail = document.getElementById("errorEmail");
let errorPass = document.getElementById("errorPass");

function emailValidate(){
    let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regx.test(email.value)){
        email.style.border = "2px solid green";
        return true;
    }
    else if(email.value==""){
        errorEmail.innerHTML = "Email cannot be empty!";
        errorEmail.style.color = "red";
        return false;
    }
    else{
        errorEmail.innerHTML = "Email is not in the correct format!";
        errorEmail.style.color = "red";
        return false;
    }
}

function passValidation(){
    let regx = /^.*(?=.{5,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#^&$%&? "]).*$/;
    if(regx.test(pass.value)){
        pass.style.border = "2px solid green";
        return true;
    }
    else if(pass.value==""){
        errorPass.innerHTML = "Password cannot be blank!";
        errorPass.style.color = "red";
        return false;
    }
    else{
        errorPass.innerHTML = "Password must contain atleast 1 uppercase, 1 lowercase, 1 digit and having minimum legth 5";
        errorPass.style.color = "red";
        return false;
    }
}