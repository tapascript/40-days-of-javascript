async function getOrder(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (orderId === "123") {
        resolve({ id: "123", item: "Book", status: "Processing" });
      } else {
        reject("Order not found!");
      }
    }, 1000);
  });
}

async function getTrackingInfo(order) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!order?.id) {
            reject("No Order ID");
        } else {
            resolve({ orderId: order.id, location: "Warehouse", eta: "2 days" });
        }

    }, 1000);
  });
}

async function trackOrder(orderId) {
  try {
    const order = getOrder(orderId); 
    const tracking = await getTrackingInfo(order);
    console.log(`Tracking Order: ${tracking.orderId}`);
    console.log(`Current Location: ${tracking.location}`);
    console.log(`Estimated Delivery: ${tracking.eta}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

trackOrder("123");