import { useState,useReducer } from "react";
import {useCart} from "../Context/CartContext.js"
import { TYPE } from "../Reducer/appReducer.js";
import { EmptyCart } from "./emptyCart.js";



function ShowItemCart({item}) {
    const {state,dispatch} = useCart();
    
    const itemQty = item.qty > 1;
    return (
        <>           
             <div className="product">
                 <div className="product-upvote">
                    <i class="fas fa-caret-up"></i>
                    <br />
                    {item.ratings}
                 </div>
                 <img style={{width:"100px",height:"100px"}} className="product-img img-border-rd" src={item.image}/>
                 <div className="product-description">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                 </div>
                 <span className="icon-controls">
                     <button className="btn-link-primary" onClick={() => dispatch({type:TYPE.INCREASE_ITEM_QTY,payload:item})}>+</button>
                     <strong>{item.qty}</strong>

                     {itemQty ? <button className="btn-link-secondary" onClick={() => dispatch({type:TYPE.DECREASE_ITEM_QTY,payload:item})}>-</button> :
                     <button className="btn-link-secondary" onClick={() => dispatch({type:TYPE.REMOVE_FROM_CART,payload:item})}><i class="far fa-trash-alt"></i></button>}
                     
                     
                 </span>
             </div>
        </>   
    )
}



export function Cart() {
    const {state} = useCart();
    return (
        <div>
            {   
                state.cart.length ? state.cart.map(cartItem => <ShowItemCart item={cartItem}/>) : <EmptyCart />
            }
        </div>
    )
}