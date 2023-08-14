
document.getElementById('btn-deposit').addEventListener('click',function(){
  
  const depositInput = document.getElementById('deposit-field');
  const newDepositAmountString = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  console.log(typeof newDepositAmount);
  
  const DepositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = DepositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const newDepositTotal = previousDepositTotal + newDepositAmount;

  const balanceElement = document.getElementById('balance');
  const balanceString = balanceElement.innerText;
  const previousBalance = parseFloat(balanceString);

  const newBalance = previousBalance + newDepositAmount;

  DepositTotalElement.innerText = newDepositTotal;
  balanceElement.innerText = newBalance;
  depositInput.value = '';


})