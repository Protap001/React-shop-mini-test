import axios from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "../Constans/ProductsConstans"



//LIST PRODUCT

export const ListProduct = () => async (dispact) => {
    try {
        dispact({ type: PRODUCT_LIST_REQUEST });
        const { data } = await axios.get("/api/products/");
        dispact({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispact({
            type: PRODUCT_LIST_FAIL, payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message
        });
    }
}


//SINGLE PRODUCT

export const ListProductDetails = (id) => async (dispact) => {
    try {
        dispact({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispact({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispact({
            type: PRODUCT_DETAILS_FAIL, payload:
                error.response && error.response.data.message ?
                    error.response.data.message
                    : error.message
        });
    }
}