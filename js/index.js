
var nameinput= document.querySelector('#nameinput');
var emailinput = document.querySelector('#emailinput');
var passwordinput = document.querySelector('#passwordinput');
var addUsers = document.querySelector('#addUsers');
var demo2 = document.querySelector('.demo2');
var demo3 = document.querySelector('.demo3');


var dataofusers = [];

addUsers.addEventListener('click', function (e) {
    e.preventDefault();
    adddatauser();
    clearForm();
})


function adddatauser() {

    var dataofuser = {
        nameinput: nameinput.value,
        emailInput: emailinput.value,
        passwordInput: passwordinput.value
    }

    if (validNameInput() && validEmailInput() && validPasswordInput() && nameinput.value !== '' && emailinput.value !== '' && passwordinput.value !== '') {

        dataofusers.push(dataofuser);

        var convertarrtostr = JSON.stringify(dataofusers);
        localStorage.setItem('dataofusers', convertarrtostr);
        demo2.innerHTML = `<strong class="text-success">success!!</strong>`;
        demo2.classList.remove('d-none');
        window.location.href = 'index.html';

    } else {

        demo2.innerHTML = `<strong class="text-danger">Enter Name Or Email Or Password with right way !!</strong>`;
        demo2.classList.remove('d-none');
         demo3.classList.add('d-none');

    }

}

function clearForm() {

    nameinput.value = "";
    emailinput.value = "";
    passwordinput.value = "";
}



function validNameInput() {

    var regexName = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

    if (regexName.test(nameinput.value)) {
        demo3.classList.add('d-none');
        return true;
    } else {
        demo3.innerHTML = `<strong class="text-danger">Start with Cap Letter!!</strong>`;
        demo3.classList.remove('d-none');
        return false;
    }

}

function validEmailInput() {

    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regexEmail.test(emailinput.value)) {
        return true;
    } else {
        return false;
    }

}
function validPasswordInput() {

    var regexPassword = /^[A-Z][a-z ]{3,15}[0-9]{0,3}$/;

    if (regexPassword.test(passwordinput.value)) {
        return true;
    } else {
        return false;
    }

}

