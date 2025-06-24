function processPayment(paymentData) {
  try {
    if (!paymentData.amount) throw new Error("Invalid amount!");
    if (!paymentData.method) throw new Error("Payment method missing!");

    simulatePayment(paymentData);

    console.log("Payment processed successfully!");
  } catch (error) {
    console.error("Error:", error instanceof Error ? error.message : error);
  } finally {
    console.log("Payment attempt logged.");
  }
}

function simulatePayment(data) {
  if (Math.random() > 0.5) {
    throw new Error("Payment gateway timeout!");
  }
}

 processPayment({ amount: 100, method: "card" });
// processPayment({ amount: 100 });
// processPayment({ method: "upi" });