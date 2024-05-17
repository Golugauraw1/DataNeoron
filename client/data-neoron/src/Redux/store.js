import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from 'redux-thunk';
import { productReducer } from "./Product/product.reducer";

const rootReducer = combineReducers({
    product: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
