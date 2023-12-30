
var emailinput0 = document.querySelector('#emailinput0');
var passwordinput0 = document.querySelector('#passwordinput0');
var login2 = document.querySelector('.login2');
var demo5 = document.querySelector('.demo5');


var inxc = 0;


var dataofuserses = [];
var getdatauser = localStorage.getItem('dataofusers')
var convertstrtoarr = JSON.parse(getdatauser);

if(convertstrtoarr !== null ){
   dataofuserses = convertstrtoarr;
}
login2.addEventListener('click' , function(e){
    e.preventDefault();
    logInUsers();
    clearForm();
});

function logInUsers() {
    for(var i = 0 ; i < dataofuserses.length ; i++){
    if(emailinput0.value == dataofuserses[i].emailInput && passwordinput0.value == dataofuserses[i].passwordInput){
        localStorage.setItem('logs' , inxc);
        window.location.href = "index3.html";
        demo5.innerHTML =`<strong class="text-success">success!!</strong>`;
        demo5.classList.remove('d-none');
    }else{
        
        demo5.innerHTML =`<strong class="text-danger">Enter Name Or Email Or Password with right way !!</strong>`;
        demo5.classList.remove('d-none');
    }
}
}

function clearForm() {

    emailinput0.value = "";
    passwordinput0.value = "";
}