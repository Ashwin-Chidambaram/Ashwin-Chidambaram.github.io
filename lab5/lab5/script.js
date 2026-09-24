let accountBalance = 100;

const depositAmount = 30;
const withdrawAmount = 30;

function depositMoney() {
    accountBalance += depositAmount;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("deposit-withdraw-message");

    accountText.innerText = "$" + accountBalance;
    statusText.innerText = "You've successfully deposited $30 into your bank account!";

    statusText.style.color = "white";
    statusText.style.fontWeight = "normal";
    document.body.style.backgroundColor = "darkcyan";
}

function withdrawMoney() {
    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("deposit-withdraw-message");

    if (accountBalance >= withdrawAmount) {
        accountBalance -= withdrawAmount;

        accountText.innerText = "$" + accountBalance;
        statusText.innerText = "You've successfully withdrawn $30 from your bank account!";

        statusText.style.color = "white";
        statusText.style.fontWeight = "normal";
        document.body.style.backgroundColor = "darkcyan";
    } 
    
    else {
        statusText.innerText = "You don't have enough money to withdraw $30!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
    }