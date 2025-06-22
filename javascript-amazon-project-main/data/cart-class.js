/* Object Oriented Programming OOP =
organising our code into objects 
- tries to represent real world
*/

// OOP - Class
// Class = Object Generator
// Pascal case - capital letter at start

class Cart {
    // properties
    // cartItems = undefined;
    cartItems;
    // private = #
    #localStorageKey;

    // Constructor - let us run setup code
    // creating and initializing an object instance of that class.
    // no return
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        // access class
        this.#loadFromStorage();
    }

    // method
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
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
    }

    // method
    saveToStorage() {
    // local storage only saves strings
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }

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
    }

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
    }

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
    }
}

// create new class objects - instance
const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

// field = property

// cart.#localStorageKey = "test";

console.log(cart);
console.log(businessCart);
console.log(businessCart instanceof Cart);
