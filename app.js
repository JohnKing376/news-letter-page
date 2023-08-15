// Form Settings

const  form = document.getElementById('form');
const email = document.getElementById('contactEmail');
const errorMessage = document.querySelector('.form-error-msg');
const input = document.querySelector('input');
const emailInput = document.querySelector('.emailInput');
const popUp = document.getElementById('successPopup');
const containerHidden = document.querySelector('.container')

form.addEventListener('submit', (e)=>{
checkInputs();
e.preventDefault();
})


function checkInputs() {

    if(email.value === "") {
        //show error
        errorMessage.innerHTML = "Email is required"
        errorMessage.classList.add('error-active');
        input.classList.add('input-error-msg')
        closePopup();
    } 
    else if(!isEmail(email.value)) {
        errorMessage.innerHTML = "Enter Valid Email"
        errorMessage.classList.add('error-active');
        closePopup();
    } else {
        errorMessage.classList.remove('error-active');
        input.classList.remove('input-error-msg');
        emailInput.innerHTML = email.value
    }

}

function isEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}


function openPopup() {
    popUp.classList.add('openPopup');
    containerHidden.classList.add('container-remove');
}
function closePopup() {
    popUp.classList.remove('openPopup')
    containerHidden.classList.remove('container-remove');
}

