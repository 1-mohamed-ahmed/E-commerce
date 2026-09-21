const CartAndFavouriteReducer = (currentCart, action) => {
  switch (action.type) {
    // ================= CART =================
    // currentCart == {cart:[] , favourite:[]}
    case "addToCart": {
      const existingProduct = currentCart.cart.some(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        return currentCart;
      }
      return { ...currentCart, cart: [...currentCart.cart, action.payload] };
    }

    case "removeFromCart": {
      const updatedCart = currentCart.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...currentCart, cart: updatedCart };
    }

    // ================= FAVOURITE =================
    case "addToFavourite": {
      const exists = currentCart.favourite.some(
        (item) => item.id === action.payload.id,
      );

      if (exists) {
        return currentCart;
      }

      return {
        ...currentCart,
        favourite: [...currentCart.favourite, action.payload],
      };
    }

    case "removeFromFavourite": {
      const newFavouriteList = currentCart.favourite.filter(
        (product) => product.id !== action.payload,
      );
      return { ...currentCart, favourite: newFavouriteList };
    }

    default:
      return currentCart;
  }
};

export default CartAndFavouriteReducer;
