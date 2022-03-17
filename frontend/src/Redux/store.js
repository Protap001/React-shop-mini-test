import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import { productDetailsRecuders, productListRecuders } from './Reducers/ProductsReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './Reducers/CartReducers';
import { userLoginReducer, userRegisterReducer } from './Reducers/UserReducers';

const reducer = combineReducers({
    productList: productListRecuders,
    productDetails: productDetailsRecuders,
    cart: cartReducer,
    userRegister: userRegisterReducer,
    userLogin: userLoginReducer,

});

const cartItemFromLocalStorege = localStorage.getItem("cartItems") ?
    JSON.parse(localStorage.getItem("cartItems")) : [];

const userInfoFromLocalStorege = localStorage.getItem("userInfo") ?
    JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
    cart: {
        cartItems: cartItemFromLocalStorege
    },
    userLogin: { userInfo: userInfoFromLocalStorege },
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;





