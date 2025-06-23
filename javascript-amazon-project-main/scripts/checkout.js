import { cart, removeCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
import "../data/backend-practice.js";
import "../data/cart-class.js"

// input type="radio" - same name value can only pick one
// different can choose both.


let cartSumamryHTML = "";

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });

    // console.log(matchingProduct);

    // 2. generate html
    cartSumamryHTML = cartSumamryHTML +
    `
     <div class="cart-item-container
        js-cart-item-container-${matchingProduct.id}">
        <div class="delivery-date">
            Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                ${matchingProduct.getPrice()}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary
                js-delete-link" data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            <div class="delivery-option">
                <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                    FREE Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                    $4.99 - Shipping
                </div>
                </div>
            </div>
            <div class="delivery-option">
                <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    Monday, June 13
                </div>
                <div class="delivery-option-price">
                    $9.99 - Shipping
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    `;
});

// 2. generate html - delete button
document.querySelector(".js-order-summary").innerHTML = cartSumamryHTML;

document.querySelectorAll(".js-delete-link").forEach((deleteLink) => {
    deleteLink.addEventListener("click", () => {
        const productId = deleteLink.dataset.productId;

        removeCart(productId);

        const container = document.querySelector(
            `.js-cart-item-container-${productId}`
        );

        container.remove();
    });
});


loadProducts(() => {
    loadCart(() => {
        let cartSumamryHTML = "";

        cart.forEach((cartItem) => {
            const productId = cartItem.productId;

            let matchingProduct;

            products.forEach((product) => {
                if (product.id === productId) {
                    matchingProduct = product;
                }
            });

            // console.log(matchingProduct);

            // 2. generate html
            cartSumamryHTML = cartSumamryHTML +
            `
            <div class="cart-item-container
                js-cart-item-container-${matchingProduct.id}">
                <div class="delivery-date">
                    Delivery date: Tuesday, June 21
                </div>

                <div class="cart-item-details-grid">
                    <img class="product-image"
                    src="${matchingProduct.image}">

                    <div class="cart-item-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                        ${matchingProduct.getPrice()}
                    </div>
                    <div class="product-quantity">
                        <span>
                        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                        Update
                        </span>
                        <span class="delete-quantity-link link-primary
                        js-delete-link" data-product-id="${matchingProduct.id}">
                        Delete
                        </span>
                    </div>
                    </div>

                    <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    <div class="delivery-option">
                        <input type="radio" checked
                        class="delivery-option-input"
                        name="delivery-option-${matchingProduct.id}">
                        <div>
                        <div class="delivery-option-date">
                            Tuesday, June 21
                        </div>
                        <div class="delivery-option-price">
                            FREE Shipping
                        </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${matchingProduct.id}">
                        <div>
                        <div class="delivery-option-date">
                            Wednesday, June 15
                        </div>
                        <div class="delivery-option-price">
                            $4.99 - Shipping
                        </div>
                        </div>
                    </div>
                    <div class="delivery-option">
                        <input type="radio"
                        class="delivery-option-input"
                        name="delivery-option-${matchingProduct.id}">
                        <div>
                        <div class="delivery-option-date">
                            Monday, June 13
                        </div>
                        <div class="delivery-option-price">
                            $9.99 - Shipping
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            `;
        });

        // 2. generate html
        document.querySelector(".js-order-summary").innerHTML = cartSumamryHTML;

        document.querySelectorAll(".js-delete-link").forEach((deleteLink) => {
            deleteLink.addEventListener("click", () => {
                const productId = deleteLink.dataset.productId;

                removeCart(productId);

                const container = document.querySelector(
                    `.js-cart-item-container-${productId}`
                );

                container.remove();
            });
        });
    });
});


/* Promises */
// runs immediately, resolve = controls when to go to next step.
// Promise = constructor, resolve = function
new Promise((resolve) => {
    console.log("start");
    loadProducts(() => {
        console.log("finish loading");
        resolve("value 1"); // give a value
    });

    // then method - handles the result and what happens next
}).then((value) => {
    console.log("next step");
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            console.log("step 2");
            resolve();
        });
    });

    // renderOrderSummary();
    // renderPaymentSummary();
}).then(() => {
    console.log("third step");
});

// Promise.all() - let's us run multiple promises at the same time.
// wait for all to finish.
Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadProducts(() => {
            console.log("finish loading");
            resolve("value 1"); // give a value
        });
    }),
        new Promise((resolve) => {
            loadCart(() => {
                console.log("step 2");
                resolve("value 2");
        });
    })

]).then((values) => {
    console.log(values);
    console.log("all promises finished");
});


/* Async Await */
// async makes function a promise - shortcut for promise.
// await = let's us wait for a promise to finish, before going to the next line.
async function loadPage() {
    try {
        console.log("load page");

        // throw "error"; // throw used to make user exception/error

        await loadProductsFetch(); // wait to finish

        // only works with promises
        // reject = function - creates an error in the future.
        await new Promise((resolve, reject) => {
            // throw "error2"; // go to catch error
            loadCart(() => {
                // reject("error3"); // error go to catch
                resolve();
            });
        });

        // save value3 to variable, no then()
        const value = await new Promise((resolve) => {
            loadCart(() => {
                resolve("value3");
            });
        });
        console.log(value);

        console.log("render pages");

        // return "value2";
    } catch (error) {
        console.log("async unexpected error", error);
    }
}
loadPage();
// .then((value) => {
//     console.log("async next step");
//     console.log(value);
// });

