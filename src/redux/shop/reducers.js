import * as actionTypes from "./types";
import { Products } from "../../components/FakeProducts/fakeProducts";

const INITIAL_STATE = {
  products: Products,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Getting Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Checking if item is in cart the already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
      case actionTypes.FETCH_REQUEST:
      return state;
    case actionTypes.FETCH_SUCCESS: 
      return {...state, posts: action.payload};
    default:
      return state;
  }
};

export default shopReducer;