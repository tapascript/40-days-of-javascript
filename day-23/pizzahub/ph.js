// Returns a shop id
let getShopIds = () => {
    const url = `api/pizzahub`;
    return query(url);
};

// Returns a promise with pizza list for a shop
let getPizzaList = (shopId) => {
    const url = `api/pizzahub/pizzas/${shopId}`;
    return query(url);
};

// Returns a promise with pizza that matches the customer request
let getMyPizzaWithAddOn = (pizzas, type, name) => {
    let myPizza = pizzas.find((pizza) => {
        return pizza.type === type && pizza.name === name;
    });
    const url = `api/pizzahub/beverages/${myPizza.id}`;
    return query(url);
};

// Returns a promise after Placing the order
let performOrder = (result) => {
    return query(`api/order`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pizzaId: result.pizzaId,
            beverageId: result.id,
        }),
    });
};

// Confirm the order
let confirmOrder = (type, name, createdAt) => {
    console.log(
        `Your order of ${type} ${name} has been placed at ${new Date(
            createdAt
        )}!`
    );
};

function orderPizza(type, name) {
    getShopIds()
        .then((shopIds) => getPizzaList(shopIds[0]))
        .then((pizzas) => getMyPizzaWithAddOn(pizzas, type, name))
        .then((pizzaWithAddOns) => performOrder(pizzaWithAddOns[0]))
        .then((order) => confirmOrder(type, name, order.createdAt))
        .catch(function (error) {
            console.log(`Bad luck, No Pizza for you today!`);
        });
}

// Call the orderPizza method
orderPizza("veg", "Margherita");
