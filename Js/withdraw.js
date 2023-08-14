document.getElementById('btn-withdraw').addEventListener('click',function(){
  const withdrawInputElement = document.getElementById('withdraw');
  const withdrawValueString = withdrawInputElement.value;
  const withdrawValue = parseFloat(withdrawValueString);
  
  const WithdrawElement = document.getElementById('withdraw-total');
  const prevWithdrawString = WithdrawElement.innerText;
  const prevWithdraw = parseFloat(prevWithdrawString);

  const newWithdrawAmount = prevWithdraw + withdrawValue;

  const balanceElement = document.getElementById('balance');
  const previousBalanceString = balanceElement.innerText;
  previousBalance = parseFloat(previousBalanceString);

  const newBalance = previousBalance - withdrawValue;

  WithdrawElement.innerText = newWithdrawAmount;
  balanceElement.innerText = newBalance;

  withdrawInputElement.value = ' ';
})