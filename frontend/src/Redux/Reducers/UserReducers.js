import { PRODUCT_LIST_FAIL } from "../Constans/ProductsConstans";
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constans/UserConstans";


export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true, };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};

        default:
            return state;
    }
}



export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true, };
        case USER_REGISTER_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}




