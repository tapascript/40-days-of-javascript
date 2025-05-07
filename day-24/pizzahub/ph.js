// Returns a shop id
let getShopIds = async () => {
    const url = `api/pizzahub`;
    return query(url);
};

// Returns a promise with pizza list for a shop
let getPizzaList = async (shopId) => {
    const url = `api/pizzahub/pizzas/${shopId}`;
    return query(url);
};

// Returns a promise with pizza that matches the customer request
let getMyPizzaWithAddOn = async (pizzas, type, name) => {
    let myPizza = pizzas.find((pizza) => {
        return pizza.type === type && pizza.name === name;
    });
    const url = `api/pizzahub/beverages/${myPizza.id}`;
    return query(url);
};

// Returns a promise after Placing the order
let performOrder = async (result) => {
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

async function orderPizza(type, name) {
    try {
        const shopIds = await getShopIds();
        const pizzas = await getPizzaList(shopIds[0]);
        const pizzaWithAddOns = await getMyPizzaWithAddOn(pizzas, type, name);
        const order = await performOrder(pizzaWithAddOns[0]);

        confirmOrder(type, name, order.createdAt);
    } catch (error) {
        console.log(`Bad luck, No Pizza for you today! ${error}`);
    }
}

// Call the orderPizza method
orderPizza("veg", "Margherita");

