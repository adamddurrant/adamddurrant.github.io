// input fields
let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-number");
let customPercentage = document.getElementById("custom-percent");
peopleInput.disabled = true;

// final numbers
let totalTip = document.getElementById("total-tip");
let totalBill = document.getElementById("total-bill");

// error text
let errorText = document.getElementById("error");

// percent buttons/input
let initialTip = 0;
let percentageButtons = document.querySelectorAll(".percent-button");
let resetButton = document.getElementById("reset");

// event listeners
billInput.addEventListener("input", calculate);
resetButton.addEventListener("click", reset);
peopleInput.addEventListener("input", peopleNumber);

let peopleValue = 1;
let floatedButtonVal;

function peopleNumber() {
  if (peopleInput.value <= 0) {
    errorText.innerHTML = "Someone has to pay the bill!";
  } else {
    errorText.innerHTML = "";
    peopleValue = peopleInput.value;
    calculate();
  }
}

// get values from percentage buttons
percentageButtons.forEach(function (button) {
  button.addEventListener("focus", function () {
    buttonVal = button.innerHTML;
    floatedButtonVal = parseFloat(buttonVal);
    if (billInput.value <= 0) {
      null;
    } else {
      calculate();
    }
  });
});

function calculate() {
  // get input & make it a number
  let billEntry = parseFloat(billInput.value);
  peopleInput.disabled = false;

  if (
    floatedButtonVal === undefined ||
    (floatedButtonVal === NaN && peopleValue <= 1)
  ) {
    totalTip.innerHTML = "0.00";
    billCalc = Math.round(billEntry * 1e2) / 1e2;
    preBill = billCalc / peopleValue;
    totalBill.innerHTML = `${Math.floor(preBill * 100) / 100}`;
  } else {
    //tip
    let tipCalc = (billEntry / 100) * floatedButtonVal;
    let totalTipCalc = tipCalc / peopleValue;
    totalTip.innerHTML = `${Math.floor(totalTipCalc * 100) / 100}`;
    //bill
    let billCalc = tipCalc + billEntry;
    let totalBillCalc = billCalc / peopleValue;

    totalBill.innerHTML = `${Math.floor(totalBillCalc * 100) / 100}`;
  }
}

function reset() {
  totalTip.innerHTML = "0.00";
  totalBill.innerHTML = "0.00";
  billInput.value = "0.00";
  percentageButtons.forEach(function (button) {
    floatedButtonVal = undefined;
    peopleInput.value = 1;
    peopleValue = 1;
    button.blur();
  });
}
