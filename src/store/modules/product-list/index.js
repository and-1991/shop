import {
    LOAD_PRODUCT_LIST,
    SELECT_PRODUCT,
    REMOVE_PRODUCT,
    LOAD_DEALERS,
} from "../../constants";

const initialState = {
    loading: true,
    dealers: null,
    listProducts: [],
    selectedItems: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DEALERS:
            return {
                ...state,
                dealers: action.payload
            }
        case LOAD_PRODUCT_LIST:
            return {
                ...state,
                loading: false,
                listProducts: action.payload,
            };
        case SELECT_PRODUCT:
            const newArray = state.selectedItems.concat([action.payload])
            return {
                ...state,
                selectedItems: newArray,
            }
        case REMOVE_PRODUCT:
            let count = 0;
            let arr = [];
            state.selectedItems.forEach(el => {
                if(el.name === action.payload.name) {
                    if(count !== 0) {
                        arr.push(action.payload)
                    } else {
                        count = count + 1
                    }
                } else {
                    arr.push(el)
                }
            })
            return {
                ...state,
                selectedItems: arr
            }

        default:
            return state
    }
};
