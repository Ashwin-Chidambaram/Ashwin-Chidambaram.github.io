let accountBalance = 100;
const depositAmount = 30;
const withdrawAmount = 30;

function depositMoney() {
    accountBalance = accountBalance + depositAmount;

    const accountText = document.getElementById("Account Balance");
    const statusText = document.getElementById("deposit-withdraw-message");

    if(accountBalance > 0)
    {
        accountText.innerText = accountBalance;
        statusText.innerText = "You've successfully deposited $30 to your bank account!";
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "Bank Acount Balance $0";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = false;
        document.querySelector("button").innerText = "You're out of money!";
    }
}

function withdrawMoney() {
    accountBalance = accountBalance - withdrawAmount;

    const accountText = document.getElementById("Account Balance");
    const statusText = document.getElementById("deposit-withdraw-message");

    if(accountBalance > 0)
    {
        accountText.innerText = accountBalance;
        statusText.innerText = "You've successfully withdrawn $30 to your bank account!";
    }
    else
    {
        accountText.innerText = 0;
        statusText.innerText = "Bank Acount Balance $0";
        statusText.style.color = "#f9331d";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";

        document.querySelector("button").disabled = false;
        document.querySelector("button").innerText = "You're out of money!";
    }
}
