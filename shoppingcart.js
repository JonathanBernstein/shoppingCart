"use strict";

let shoppingCart = [];
let itemList = [
    {
        Name: "tomato",
        Price: 0.50
    },

    {
        Name: "lettuce",
        Price: 2.00
    },

    {
        Name: "Meat",
        Price: 10.00
    },

    {
        Name: "onions",
        Price: 2.00
    },

    {
        Name: "cheese",
        Price: 1.50
    },
];

function addItem(itemName, itemPrice) {
    shoppingCart = [...shoppingCart, { Name: itemName, Price: itemPrice }];
}


function removeItem(itemName) {
    const index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index)];
}

function editItem( newName, newPrice) {
    const index = shoppingCart.findIndex(element => element.name === itemName);
    shoppingCart = [...shoppingCart.slice(0, index), { itemName: newName, itemPrice: newPrice }];
    console.log(shoppingCart);

}

function printTotal() {
    let total = 0;
    for (let {itemPrice} of shoppingCart) {

        total += (itemPrice * 1.06);

    }
    console.log(total);
}

addItem("tomato", 1);
console.log(shoppingCart);
removeItem("tomato");
console.log(shoppingCart);
editItem("corn", 5);
console.log(shoppingCart);
printTotal();


