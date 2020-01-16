
/**
 * action = {
 *  type: "STRING",
 *  payload: "DATA"
 * }
 */
import {ADD_TO_CART} from './../actions/cart_actions';

const INITIAL_STATE = []

export default function cartReducer(state = INITIAL_STATE, action = []) {
  // eslint-disable-next-line default-case
  switch(action.type) {
    case ADD_TO_CART: {
      const product = action.playload;
      const cart = state;

      const existingProductIndex = findProductIndex(cart, product.id);

      const updatedCart = existingProductIndex >= 0
        ? updateProductUnits(cart, product)
        : [...cart, product]

      return updatedCart;
    }
  }

  return state;
}

const findProductIndex = (cart, productID) => {
  return cart.findIndex(p => p.id === productID);
};

const updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id);
  const updatedCart = [...cart];
  const existingProduct = updatedCart[productIndex];
  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units
  };

  updatedCart[productIndex] = updatedUnitsProduct;
  return updatedCart;
}
