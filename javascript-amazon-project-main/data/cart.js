export const cart = [];

export function addToCart(productId) {
    let matchingItem;
        
    // check if in cart
    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    // match increase quantity
    if (matchingItem) {
        matchingItem.quantity = matchingItem.quantity + 1;
    } else {
        cart.push({
        productId: productId,
        quantity: 1,
        });
    }
}

