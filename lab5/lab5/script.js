let accountBalance = 100;

const depositAmount = 30;
const withdrawAmount = 30;

function depositMoney() {
    accountBalance += depositAmount;

    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("deposit-withdraw-message");
    const depositButton = document.getElementById("deposit-button");
    const withdrawButton = document.getElementById("withdraw-button");

    accountText.innerText = "$" + accountBalance;
    statusText.innerText = "You've successfully deposited $30 into your bank account!";

    statusText.style.color = "white";
    statusText.style.fontWeight = "normal";
    document.body.style.backgroundColor = "darkcyan";

    // Show withdraw button again after depositing
    depositButton.style.display = "none";
    withdrawButton.style.display = "inline-block";
}

function withdrawMoney() {
    const accountText = document.getElementById("account-balance");
    const statusText = document.getElementById("deposit-withdraw-message");
    const depositButton = document.getElementById("deposit-button");
    const withdrawButton = document.getElementById("withdraw-button");

    if (accountBalance >= withdrawAmount) {
        accountBalance -= withdrawAmount;

        accountText.innerText = "$" + accountBalance;
        statusText.innerText = "You've successfully withdrawn $30 from your bank account!";

        statusText.style.color = "white";
        statusText.style.fontWeight = "normal";
        document.body.style.backgroundColor = "darkcyan";

        // If balance reaches $0, switch to the deposit button
        if (accountBalance === 0) {
            withdrawButton.style.display = "none";
            depositButton.style.display = "inline-block";
        }
    }

    else {
        statusText.innerText = "You don't have enough money to withdraw $30!";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
    }
}