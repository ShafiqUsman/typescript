"use strict";
// Task 3: Discount Amount for a Product
function inovice(price, disc) {
    let discount = price * (disc / 100);
    if (disc >= 50) {
        console.log("error: You have somthing wrong with your discout voucher, try again...");
    }
    else {
        console.log(`Item Discription      Discount           Net Amount`);
        console.log(`================      ========           ==========`);
        console.log(`Pizza deal 1          ${disc}% `);
        console.log(`Rs.${price.toFixed(2)}            Rs.-${discount.toFixed(2)}          Rs.${(price - discount).toFixed(2)}`);
    }
}
inovice(1000, 30);
inovice(1000, 50);
inovice(1000, 20);
inovice(1000, 100);
