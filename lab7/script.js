function triggerBug1() {
    let outputText = document.getElementById("output1"); //Line 2 First Bug Trigger - Was Initially let outputText = document.getElementByID("output1"); Fixed "...ID" to "...Id" 
    outputText.innerText = "Code Fixed!";
    
    let btn = document.getElementById("btn1");
    btn.innerText = "Done";
    btn.disabled = true;
}

function triggerBug2() {
    let outputText = document.getElementById("output2");
    outputText.innerText = "Code Fixed!";
    
    let btn = document.getElementById("btn2"); //Line 14 Second Bug Trigger - Was Initially let btn = document.getElementById("button-two"); Fixed "button-two" to "btn2"
    btn.innerText = "Done";
    btn.disabled = true;
}

function triggerBug3() {
    let outputText = document.getElementById("output3"); //Line 20 Third Bug Trigger - Was Initially let outputText = document.getElementById(output3); Fixed ...(output3) to ...("output3")
    outputText.innerText = "Code Fixed!";
    
    let btn = document.getElementById("btn3");
    btn.innerText = "Done";
    btn.disabled = true;
}

function triggerBug4() {
    let studentName = "Cocky";
    let outputText = document.getElementById("output4");
    
    outputText.innerText = studentName + " is here!"; //Line 32 Fourth Bug Trigger - Was Initially outputText.innerText = studentname + " is here!"; Fixed ...studentname to ...studentName
    let btn = document.getElementById("btn4");
    btn.innerText = "Done";
    btn.disabled = true;
}

function triggerBug5() {
    let outputText = document.getElementById("output5");
    outputText.innerText = "Code Fixed!";
    
    let btn = document.getElementById("btn5");
    btn.innerText = "Done";
    btn.disabled = true;
}