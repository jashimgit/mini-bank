
// 

const loginBtn = document.getElementById('login-btn');
const loginArea = document.getElementById('login-area');
const loginFormCard = document.getElementById('login-form-card');
const transactionArea = document.getElementById('transaction-area');
// hide login area with button event

loginBtn.addEventListener('click', function () {
    loginArea.style.display = 'none';
    // console.log('clicked');
    transactionArea.style.display = 'block';
});


const depositeBtn = document.getElementById('deposite-btn');


// add deposite button event handler
depositeBtn.addEventListener('click', function () {
    // get deposite input value
    let currentDeposit = parseFloat(document.getElementById('deposit-amount').value);
    // get deposited amount from deposite area
    let totalCurrentDeposit = parseFloat(document.getElementById('current-deposit').innerText);
    totalCurrentDeposit += currentDeposit;
    // update total deposited amount
    document.getElementById('current-deposit').innerText = totalCurrentDeposit;
    // set deposite input box value to empty after submit deposite
    document.getElementById('deposit-amount').value = "";

    // get total deposit from 
    let totalBalance = parseFloat(document.getElementById('total-balance').innerText);

    totalBalance += totalCurrentDeposit;
    // update total balance after deposit
    document.getElementById('total-balance').innerText = totalBalance;
});

// widthdraw button event handler 

const widthDrawBtn = document.getElementById('widthdraw-btn');
widthDrawBtn.addEventListener('click', function () {
    // get totalBalance 
    let totalBalance = parseFloat(document.getElementById('total-balance').innerText);
    // get total Widthdraw amount
    let widthdrawBalance = parseFloat(document.getElementById('widthdraw-balance').innerText);
    // get widthdraw input value
    let widthDrawValue = parseFloat(document.getElementById('width-amount').value);
    // console.log(widthDrawValue);
    widthdrawBalance += widthDrawValue;
    // update total widthdraw balancce
    document.getElementById('widthdraw-balance').innerText = widthdrawBalance;
    // update widthdraw input value to empty after widthdraw
    document.getElementById('width-amount').value = "";

    // update total Balace after widthdraw
    updateTotalBalance(totalBalance, widthDrawValue);
})

function updateTotalBalance(totalBalance, widthDrawValue) {
    let updatedTotalBalance = totalBalance - widthDrawValue;
    document.getElementById('total-balance').innerText = updatedTotalBalance;
}