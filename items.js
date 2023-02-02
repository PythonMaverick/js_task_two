const catalogue = [
    {
        "id" : 1000,
        "name": "Logitech MX Keys",
        "description" : "Professional keyboard for programmers.",
        "sizes" : ["standard", "mini"],
        "price" : 100,
        "available": true,
    },
    {
        "id" : 1001,
        "name": "Logitech MX Master",
        "description" : "Professional mouse for programmers.",
        "sizes" : ["standard",],
        "price" : 65,
        "available": true,
    },
    {
        "id" : 1002,
        "name": "USB type-c hub",
        "description" : "Type-C USB hub for notebooks. 3 USB 3.0, 2 USB type-c, 1 HDMI, 1 Display Port",
        "sizes" : ["standard"],
        "price" : 250,
        "available": false,
    },
    {
        "id" : 1003,
        "name": "Hyper-X Cloud Mix",
        "description" : "High Resolution headphones for general purpose.",
        "sizes" : ["standard"],
        "price" : 500,
        "available": true,
    },
    {
        "id" : 1004,
        "name": "Hyper-X Cloud Mic",
        "description" : "Professional microphone for audio streaming and podcasts.",
        "sizes" : ["standard"],
        "price" : 450,
        "available": true,
    },
];

const shopBasket = [
    {
        "goodID" : 1001,
        "amount": 1,
    },
    {
        "goodID": 1003,
        "amount": 3,
    },
];


function addToBasket(goodID, amount) {
    const item = catalogue.find(item => {
        return item.id === goodID;
    });
    if (!item) {
        console.log("Item not found in the database.");
        return;
    }

    const basketItem = shopBasket.find(basketItem => {
        return basketItem.goodID === goodID;
    });
    if (basketItem) {
        basketItem.amount += amount;
    } else {
        shopBasket.push({ goodID, amount });
    }
}

function deleteFromBasket(goodID) {
    const basketIndex = shopBasket.findIndex(basketItem => {
        return basketItem.goodID === goodID;
    });
    if (basketIndex === -1) {
        console.log("Item is not in the basket.");
        return;
    }

    const basketItem = shopBasket[basketIndex];
    if (basketItem.amount > 1) {
        basketItem.amount -= 1;
    } else {
        shopBasket.splice(basketIndex, 1);
    }
}

function deleteAllFromBasket() {
    shopBasket.splice(0, shopBasket.length);
}

function basketStatistics() {
    let totalAmount = 0;
    let totalSum = 0;

    shopBasket.forEach(basketItem => {
        const item = catalogue.find(item => item.id === basketItem.goodID);
        totalAmount += basketItem.amount;
        totalSum += basketItem.amount * item.price;
    });
    return "Total Amount\t " + totalAmount + "\n" + "Total Sum:\t " + totalSum;
}

// Testing the created functions:
// Adding to the basket:
console.log("Adding items to the basket\nBasket before: \n");
console.log(shopBasket);
addToBasket(1004, 2);
console.log("\nBasket after: ", shopBasket);

// Deleting from the basket:
console.log("Deleting items from the basket\nBasket before: \n");
console.log(shopBasket);
deleteFromBasket(1001);
console.log("\nBasket after: ", shopBasket);

// Total Amount for shopbasket
console.log(basketStatistics());

// Deleting all items from the basket:
deleteAllFromBasket();
console.log("\nBasket after: ", shopBasket);
