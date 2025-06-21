/* Object Oriented Programming OOP =
organising our code into objects 
- tries to represent real world
*/

// object

// use function to create objects
// Pascal case - capital letter at start
function Cart(localStorageKey) {
// this = gives us the outer object always eg. cart
    const cart = {
        // properties
        cartItems: undefined,

        // method
        loadFromStorage() {
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [
                    {
                        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        quantity: 2,
                    },
                    {
                        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        quantity: 1,
                    }
                ];
            }
        },

        // method
        saveToStorage() {
        // local storage only saves strings
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        // method
        addToCart(productId) {
            let matchingItem;
                
            // check if in cart
            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            // match increase quantity
            if (matchingItem) {
                matchingItem.quantity = matchingItem.quantity + 1;
            } else {
                this.cartItems.push({
                productId: productId,
                quantity: 1,
                });
            }

            this.saveToStorage();
        },

        // method
        removeCart(productId) {
            const newCart = [];

            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId !== productId) {
                    newCart.push(cartItem);
                }
            });

            this.cartItems = newCart;

            this.saveToStorage();
        },

        // method
        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem = undefined;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveToStorage();
        },
    };

    return cart;
}

const cart = Cart("cart-oop");
const businessCart = Cart("cart-business");

cart.loadFromStorage();

// cart.addToCart("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");

// console.log(cart);


// easy to create multiple objects
// const businessCart = {
//     // properties
//     cartItems: undefined,

//     // method
//     loadFromStorage() {
//         this.cartItems = JSON.parse(localStorage.getItem("cart-business"));
//         if (!this.cartItems) {
//             this.cartItems = [
//                 {
//                     productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//                     quantity: 2,
//                 },
//                 {
//                     productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//                     quantity: 1,
//                 }
//             ];
//         }
//     },

//     // method
//     saveToStorage() {
//     // local storage only saves strings
//     localStorage.setItem("cart-business", JSON.stringify(this.cartItems));
//     },

//     // method
//     addToCart(productId) {
//         let matchingItem;
            
//         // check if in cart
//         this.cartItems.forEach((cartItem) => {
//             if (productId === cartItem.productId) {
//                 matchingItem = cartItem;
//             }
//         });

//         // match increase quantity
//         if (matchingItem) {
//             matchingItem.quantity = matchingItem.quantity + 1;
//         } else {
//             this.cartItems.push({
//             productId: productId,
//             quantity: 1,
//             });
//         }

//         this.saveToStorage();
//     },

//     // method
//     removeCart(productId) {
//         const newCart = [];

//         this.cartItems.forEach((cartItem) => {
//             if (cartItem.productId !== productId) {
//                 newCart.push(cartItem);
//             }
//         });

//         this.cartItems = newCart;

//         this.saveToStorage();
//     },

//     // method
//     updateDeliveryOption(productId, deliveryOptionId) {
//         let matchingItem = undefined;

//         this.cartItems.forEach((cartItem) => {
//             if (productId === cartItem.productId) {
//                 matchingItem = cartItem;
//             }
//         });

//         matchingItem.deliveryOptionId = deliveryOptionId;

//         this.saveToStorage();
//     },
// };

businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
