
// 

const loginBtn = document.getElementById('login-btn');
const loginArea = document.getElementById('login-area');
const loginFormCard = document.getElementById('login-form-card');
const transactionArea = document.getElementById('transaction-area');
// hide login area with button event

loginBtn.addEventListener('click', function() {
    loginArea.style.display = 'none';
    // console.log('clicked');
    transactionArea.style.display = 'block'
});