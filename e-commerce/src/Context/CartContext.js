import { createContext,useReducer,useContext } from "react";
import {appReducer,cart,wishlist} from "../Reducer/appReducer.js"
const CartContext = createContext();

export function CartProvider({ children }) {
    const [state,dispatch] = useReducer(appReducer,{cart,wishlist});

    return (
        <CartContext.Provider value={{state,dispatch}} >
            {children}
        </ CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}

