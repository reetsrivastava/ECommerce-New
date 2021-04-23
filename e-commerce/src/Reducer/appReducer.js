// import { useReducer } from "react";


export const TYPE = {
    ADD_TO_CART:"ADD_TO_CART",
    REMOVE_FROM_CART:"REMOVE_FROM_CART",
    ADD_TO_WISHLIST:"ADD_TO_WISHLIST",
    REMOVE_FROM_WISHLIST:"REMOVE_FROM_WISHLIST",
    INCREASE_ITEM_QTY:"INCREASE_ITEM_QTY",
    DECREASE_ITEM_QTY:"DECREASE_ITEM_QTY",
    TOGGLE:"TOGGLE",
    SORT:"SORT",
    TOGGLE_DELIVERY:"TOGGLE_DELIVERY",
    TOGGLE_INVENTORY:"TOGGLE_INVENTORY",
    CLEAR_FILTERS:"CLEAR_FILTERS"
}

export function appReducer(state,{type,payload}) {
    switch (type) {
        case TYPE.ADD_TO_CART:
            return {...state,cart: [...state.cart,{...payload,qty:1}]}
            
        case TYPE.REMOVE_FROM_CART:
            return {...state,cart: state.cart.filter(item => item.id !== payload.id)}

        case TYPE.ADD_TO_WISHLIST:
            return {...state,wishlist:[...state.wishlist,payload],toggle:!state.toggle}

        case TYPE.REMOVE_FROM_WISHLIST:
            return {...state,wishlist: state.wishlist.filter(item => item.id !== payload.id),toggle:!state.toggle}
        
        case TYPE.INCREASE_ITEM_QTY:
            return {...state,cart:state.cart.map(item => item.id === payload.id ? {...item,qty:item.qty + 1} : item )}

        case TYPE.DECREASE_ITEM_QTY:
            return {...state,cart:state.cart.map(item => item.id === payload.id ? {...item,qty:item.qty - 1} : item)}

        case TYPE.SORT:
            return {...state,sortBy:payload}

        case TYPE.TOGGLE_INVENTORY:
            return (state = {...state, showInventoryFull: !state.showInventoryFull});

        case TYPE.TOGGLE_DELIVERY:
            return (state = {...state, showFastDelivery: !state.showFastDelivery});

        case TYPE.CLEAR_FILTERS:
            return (state = {...state,showFastDelivery:null,showInventoryFull:null})

        default:
            return {...state};
    }
}

export const cart =[];
export const wishlist = [];
export const toggle = false;
export const sortBy = null;
export const showInventoryFull = true;
export const showFastDelivery = false;