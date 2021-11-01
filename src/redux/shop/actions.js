import * as actionTypes from "./types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty: value
    },
  };
};

export const fetchPostsRequest = () => {
  return {
    type: actionTypes.FETCH_REQUEST,
  };
};
export const fetchPostsSuccess = (item) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload: item,
  };
};
export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};