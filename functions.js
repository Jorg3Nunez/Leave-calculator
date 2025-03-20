function calculateTotal() {
    // Get input values
    var daysOfLeave = document.getElementById("days-of-leave").value;
    var basePay = document.getElementById("base-pay").value;
    var taxRate = document.getElementById("tax-rate").value;

    // Calculate sales rate
    var salesRate = basePay / 30;
    document.getElementById("sales-rate").value = salesRate.toFixed(2);

    // Calculate leave value
    var leaveValue = (basePay / 30) * daysOfLeave;
    document.getElementById("leave-value").value = leaveValue.toFixed(2);

    // Calculate taxes taken
    var taxesTaken = leaveValue * (taxRate / 100);
    document.getElementById("taxes-taken").value = taxesTaken.toFixed(2);

    // Calculate total
    var total = leaveValue - taxesTaken;
    document.getElementById("total").value = total.toFixed(2);
  }

  function resetForm() {
    // Reset input values
    document.getElementById("days-of-leave").value = "";
    document.getElementById("base-pay").value = "";
    document.getElementById("tax-rate").value = "";

    // Reset readonly fields
    document.getElementById("sales-rate").value = "";
    document.getElementById("leave-value").value = "";
    document.getElementById("taxes-taken").value = "";
    document.getElementById("total").value = "";
  }