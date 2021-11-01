import * as actionTypes from "./types";
import axios from "axios";

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

export const getData = () => dispatch => {
  dispatch({ type: actionTypes.LOADING })
axios.get('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=150')
  .then(res => dispatch({ type: actionTypes.SUCCESS, payload: res.data}))
}