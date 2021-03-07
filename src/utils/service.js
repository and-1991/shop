import axios from "axios";
import { LOAD_PRODUCT_LIST } from "../store/constants";

const BASE_URL = "https://murmuring-tor-81614.herokuapp.com"

export const getList = (ids = null) => async dispatch => {
    const url = ids !== null ? `${BASE_URL}/api/goods/?dealers=${ids}` : `${BASE_URL}/api/goods/`;
    try {
        const res = await axios({
            baseURL: url,
            method: "GET"
        })
        dispatch({
            type: LOAD_PRODUCT_LIST,
            payload: res.data,
        })
    } catch (err) {
        dispatch({
            type: LOAD_PRODUCT_LIST,
            payload: []
        })
    }
}
