const password = document.querySelector('#password');
const conf_password = document.querySelector('#conf-pass');
const error_field = document.querySelector('.pass-error');
const submit = document.querySelector('.submit');
// const f_name = document.querySelector('#first-name');

conf_password.addEventListener('focusout', ()=>{
    passwordChecker(password.value, conf_password.value);
});

conf_password.addEventListener('input', ()=>{
    removeStyle();
});

password.addEventListener('input', ()=>{
    removeStyle();
});

submit.addEventListener('click', passwordChecker(password.value, conf_password.value));

function passwordChecker(pass, conf_pass){
    if(pass === conf_pass){
        error_field.innerText = '';
    }else{
        redBorder();
        error_field.setAttribute('style', 'color:red');
        error_field.innerText = 'Password not match';
    }
}

function redBorder(){
    password.setAttribute('style', 'border-color:red;');
    conf_password.setAttribute('style', 'border-color:red;');
}

function removeStyle(){
    password.removeAttribute('style');
    conf_password.removeAttribute('style');
    error_field.innerText = '';
}