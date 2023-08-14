const  form = document.getElementById('form');
const email = document.getElementById('contactEmail');
const errorMessage = document.querySelector('.form-error-msg');
const input = document.querySelector('input')

form.addEventListener('submit', ()=>{
checkInputs()
})


function checkInputs() {

    if(email.value === "") {
        //show error
        errorMessage.innerHTML = "Email is required"
        errorMessage.classList.add('error-active');
        input.classList.add('input-error-msg')
    } 
    else if(!isEmail(email.value)) {
        errorMessage.innerHTML = "Enter Valid Email"
        errorMessage.classList.add('error-active');
    } else {
        errorMessage.classList.remove('error-active');
        input.classList.remove('input-error-msg')
    }

}

function isEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
}
