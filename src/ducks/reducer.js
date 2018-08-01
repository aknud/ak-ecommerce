const initialState = {
    cart: [],
    products: []
}

const GET_PRODUCT = "GET_PRODUCT";

export default function reducer(state= initialState, action) {
    switch (action.type){
        case GET_PRODUCT:
            return Object.assign({}, state, {products: action.payload})
        default: return state;
    }
}

export const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        payload: product
    }
}