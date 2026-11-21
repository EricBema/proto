const signUpForm = document.querySelector('#sign-up-form');
const errorMsg = document.querySelector('#error-msg')



signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm)
  
  // Inspecting FormData entries:
    const formObj = Object.fromEntries(formData.entries())
    

    if (formObj.password !== formObj.password2){
        errorMsg.style.color = 'red'
        errorMsg.textContent = 'Passwords do no match';
    } else {
        window.location.href = 'landing.html'
    }



})