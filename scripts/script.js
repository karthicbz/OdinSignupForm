const password = document.querySelector('#password');
const conf_password = document.querySelector('#conf-pass');
// const f_name = document.querySelector('#first-name');

conf_password.addEventListener('focusout', ()=>{
    if(password.value === conf_password.value){
        alert('Same password');
    }else{
        alert('Password didn\'t match');
    }
});