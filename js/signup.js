let fullName = document.getElementById("fullName");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let confirm = document.getElementById("confirm");

let errorName = document.getElementById("errorName");
let errorPhone = document.getElementById("errorPhone");
let errorEmail = document.getElementById("errorEmail");
let errorPass = document.getElementById("errorPass");
let errorConfirm = document.getElementById("errorConfirm");

function namevalidate(){
    let regx = /^([a-zA-Z'-.]+(?: [a-zA-Z'-.]+)?)$/;
    if(regx.test(fullName.value)){
        // errorName.innerHTML = "Valid Name";
        fullName.style.border = "2px solid green";
        return true;
    }
    else if(fullName.value==""){
        errorName.innerHTML = "Name field cannot empty!";
        errorName.style.color = "red";
        return false;
    }
    else{
        errorName.innerHTML = "Only alphabets included !";
        errorName.style.color = "red";
        return false;
    }
}

function phoneValidate(){
    let regx = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    if(regx.test(phone.value)){
        phone.style.border = "2px solid green";
        return true;
    }
    else if(phone.value==""){
        errorPhone.innerHTML = "Phone number field cannot empty!";
        errorPhone.style.color = "red";
        return false;
    }
    else{
        errorPhone.innerHTML = "Enter 10 digits only!";
        errorPhone.style.color = "red";
        return false;
    }
}

function emailValidation(){
    let regx = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regx.test(email.value)){
        email.style.border = "2px solid green";
        return true;
    }
    else if(email.value==""){
        errorEmail.innerHTML = "Email cannot be blank!";
        errorEmail.style.color = "red";
        return false;
    }
    else{
        errorEmail.innerHTML = "Email not in the correct format!";
        errorEmail.style.color = "red";
        return false;
    }
}

function passValidation(){
    let regx =  /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#^&$%&? "]).*$/;
   
    if(regx.test(pass.value)){
        pass.style.border = "2px green solid";
        return true;
    }
    else if(pass.value==""){
        errorPass.innerHTML = "Password cannot be empty! ";
        errorPass.style.color = "red";
        return false;
    }
   
    else{
        errorPass.innerHTML = "Password must contain atleast 1 upper case,1lower case, 1 digit, a special character having minimum lenth 5!"
        errorPass.style.color = "red";
        return false;
    }
}

function confirmValidate(){
    if(confirm.value==pass.value){
        confirm.style.color = "2px solid green";
        return true;
    }
    else if(confirm.value==""){
        errorConfirm.innerHTML = "Confirm password cannot be empty!";
        errorConfirm.style.color = "red";
        return false;
    }
    else{
        errorConfirm.innerHTML = "Password does'nt match!";
        errorConfirm.style.color = "red";
        return false;
    }
}
