export const ADD_TO_CART = "ADD_TO_CART";
export const SUB_TO_CART = "SUB_TO_CART";
export const DEL_TO_CART = "DEL_TO_CART";

export function addToCartAction({id, title, price, image, units}) {
  return {
    type: ADD_TO_CART,
    playload: {id, title, price, image, units}
  }
}

export function subToCartAction({id, title, price, image, units}) {
  return {
    type: SUB_TO_CART,
    playload: {id, title, price, image, units}
  }
}

export function removeToCartAction({id, title, price, image, units}) {
  return {
    type: DEL_TO_CART,
    playload: {id, title, price, image, units}
  }
}
