const login = document.getElementById('login');
const errorMsg = document.querySelector('#error-msg')



login.addEventListener('submit', function(event)  {
    event.preventDefault();
    console.log('form submitted')
    const username = document.querySelector('#username').value.toLowerCase();
    const password = document.querySelector('#password').value.toLowerCase();

    if (username === 'admin' && password === '1234'){
        window.location.href = 'landing.html'
    } else {
        errorMsg.style.color = 'red'
        errorMsg.textContent = 'Wrong Username or Passowrd';
    }
})

