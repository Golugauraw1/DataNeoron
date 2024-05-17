import * as actionTypes from "./product.type";

const initialState = {
  products: [],
  loading: false,
  error: false,
  errorMessage: "",
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_PRODUCT_REQUEST:
    case actionTypes.UPDATE_PRODUCT_REQUEST:
    case actionTypes.GET_ALL_PRODUCTS_REQUEST:
    case actionTypes.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case actionTypes.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: [...state.products, payload],
      };

    case actionTypes.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: payload,
      };

    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case actionTypes.ADD_PRODUCT_ERROR:
    case actionTypes.UPDATE_PRODUCT_ERROR:
    case actionTypes.GET_ALL_PRODUCTS_ERROR:
    case actionTypes.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };

    default:
      return state;
  }
};
