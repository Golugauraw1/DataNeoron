import * as actionTypes from "./product.type";
import { BaseUrl } from "../../utills/constans";
import axios from "axios";

export const addProduct = (productData) => async (dispatch) => {
  dispatch({ type: actionTypes.ADD_PRODUCT_REQUEST });
  try {
    const response = await axios.post(`${BaseUrl}/addData`, productData);
    dispatch({ type: actionTypes.ADD_PRODUCT_SUCCESS, payload: response.data });
    return response;
  } catch (error) {
    dispatch({ type: actionTypes.ADD_PRODUCT_ERROR, payload: error.message });
    return error;
  }
};

export const updateProduct = (productId, productData) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_PRODUCT_REQUEST });
  try {
    const response = await axios.put(
      `${BaseUrl}/updateData/${productId}`,
      productData
    );
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_SUCCESS,
      payload: response.data,
    });
    return response;
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_PRODUCT_ERROR,
      payload: error.message,
    });
    return error;
  }
};

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_ALL_PRODUCTS_REQUEST });
  try {
    const response = await axios.get(`${BaseUrl}/getall`);
    if (response?.data) {
      dispatch({
        type: actionTypes.GET_ALL_PRODUCTS_SUCCESS,
        payload: response?.data,
      });
    } else {
      console.log(response);
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_ERROR,
      payload: error.message,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  console.log(id);
  dispatch({ type: actionTypes.DELETE_PRODUCT_REQUEST });
  try {
    const res = await axios.delete(`${BaseUrl}/deleteProduct/${id}`);
    dispatch({ type: actionTypes.DELETE_PRODUCT_SUCCESS, payload: { id: id } });
    return res;
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_PRODUCT_ERROR,
      payload: error.message,
    });
  }
};
