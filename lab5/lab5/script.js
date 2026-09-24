let accountBalance = 100;
const DepositAmount = 30;
const WithdrawAmount = 30;

function DepositAmount() {
    accountBalance = accountBalance + DepositAmount;

    const accountText = document.getElementById("Account Balance");
    const statusText = document.getElementById("deposit/withdraw-message");

    if(accountBalance > 0)
    {
        accountText.innerText = accountBalance;
        statusText.innerText = "You've successfully added $10 to your bank account!";
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "Bank Acount Balance $0";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "You're out of money!";
    }
}

function WithdrawAmount() {
    accountBalance = accountBalance - WithdrawAmount;

    const accountText = document.getElementById("Account Balance");
    const statusText = document.getElementById("deposit/withdraw-message");

    if(accountBalance > 0)
    {
        accountText.innerText = accountBalance;
        statusText.innerText = "You've successfully withdrawn $10 to your bank account!";
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "Bank Acount Balance $0";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = true;
        document.querySelector("button").innerText = "You're out of money!";
    }
}
