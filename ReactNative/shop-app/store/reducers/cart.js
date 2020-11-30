import { ADD_TO_CART } from "../actions/cart";
import { CartItem } from "../../models/cart-item";

const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const prodPrice = addedProduct.price;
      const prodTitle = addedProduct.title;
      let updateOrNewCarItem;

      if (state.items[addedProduct.id]) {
        updateOrNewCarItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          prodPrice,
          prodTitle,
          state.items[addedProduct.id].sum + prodPrice
        );
      } else {
        updateOrNewCarItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      console.log(state);
      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updateOrNewCarItem },
        totalAmount: state.totalAmount + prodPrice,
      };
  }

  return state;
};
