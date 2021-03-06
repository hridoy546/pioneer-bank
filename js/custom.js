 // Login button event handler
 const loginBtn = document.getElementById("login");
 loginBtn.addEventListener("click", function () {
     const loginArea = document.getElementById("login-area");
     loginArea.style.display = "none";
     const transectionArea = document.getElementById("transection-area");
     transectionArea.style.display = "block";
 });
 // Deposit button event handler
 const depositBtn = document.getElementById("addDeposit");
 depositBtn.addEventListener("click", function () {
     //  const depositAmount = document.getElementById("depositAmount").value;
     //  const depositNumber = parseFloat(depositAmount);
     const depositNumber = getInputNumber("depositAmount");

     updateSpanText("currentDeposit", depositNumber);
     updateSpanText("currentBalance", depositNumber);

     document.getElementById("depositAmount").value = "";
 });

 function getInputNumber(id) { // Input Number Fuction
     const amount = document.getElementById(id).value;
     const amountNumber = parseFloat(amount);
     return amountNumber;
 };

 function updateSpanText(id, addNumber) { // Proccess Function 
     const current = document.getElementById(id).innerText;
     const currentNumber = parseFloat(current);
     const total = addNumber + currentNumber;
     document.getElementById(id).innerText = total;
 }
 // Withdraw button event handler
 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click", function () {
     //  const withdrawAmount = document.getElementById("withdrawAmount").value;
     //  const withdrawNumber = parseFloat(withdrawAmount);
     const withdrawNumber = getInputNumber("withdrawAmount");

     updateSpanText("currentWithdraw", withdrawNumber);
     updateSpanText("currentBalance", withdrawNumber * -1);

     document.getElementById("withdrawAmount").value = "";
 })