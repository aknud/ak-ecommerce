const initialState = {
    cart: [],
    products: []
}

const GET_PRODUCT = "GET_PRODUCT";
const GET_CART = "GET_CART";

export default function reducer(state= initialState, action) {
    switch (action.type){
        case GET_PRODUCT:
        console.log('products in reducer',action.payload)
            return Object.assign({}, state, {products: action.payload})
        case GET_CART:
        console.log('cart in reducer', action.payload)
            return Object.assign({}, state, {cart: action.payload})
        default: return state;
    }
}

export const getProduct = (product) => {
    return {
        type: GET_PRODUCT,
        payload: product
    }
}
export const getCart = (cart) => {
    return {
        type: GET_CART,
        payload: cart
    }
}