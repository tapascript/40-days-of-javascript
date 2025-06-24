function processPayment(paymentData) {
  try {
    if (!paymentData.amount) throw "Invalid amount!";
    if (!paymentData.method) throw new Error("Payment method missing!");

    simulatePayment(paymentData);

    console.log("Payment processed successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Payment attempt logged.");
  }
}

function simulatePayment(data) {
  // Simulate random failure
  if (Math.random() > 0.5) {
    throw new Error("Payment gateway timeout!");
  }
}

processPayment({ amount: 100, method: "card" });
// processPayment({ amount: 100 });
// processPayment({ method: "upi" });

