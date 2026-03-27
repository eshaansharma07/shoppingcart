const CART_STORAGE_KEY = "redux-shopping-cart";

export function loadCartState() {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCart) {
      return undefined;
    }

    return {
      cart: JSON.parse(storedCart)
    };
  } catch (error) {
    console.error("Unable to load cart state", error);
    return undefined;
  }
}

export function saveCartState(cartState) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartState));
  } catch (error) {
    console.error("Unable to save cart state", error);
  }
}
