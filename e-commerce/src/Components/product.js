import { data } from "./data.js";
// import "./product.css";
import {TYPE} from "../Reducer/appReducer.js"
import { useCart } from "../Context/CartContext.js";
import {Filter,getfilterData,getSortedData} from "./filter.js";
import "../component.css";
// import {Cart} from "./cart"
import {Link} from "react-router-dom";

// const wishlist = [];


function ShowItemProduct({ item }) {
    const {state,dispatch} = useCart();

    const existWishlist =  state.wishlist.find(wishItem => item.id === wishItem.id); 
    const existCart = state.cart.find(cartItem => item.id === cartItem.id)
    return (

            <div class="product-card" key={item.id} style={{opacity:`${item.inStock ? 1 : 0.5}`}}>
            <span class="img-span">
                <img src={item.image} alt="" class="img-responsive product-card-img" />
                <i class="fab fa-gratipay" onClick={() => dispatch({type: state.toggle ? TYPE.REMOVE_FROM_WISHLIST : TYPE.ADD_TO_WISHLIST,payload:item})} style={{backgroundColor:`${existWishlist ? "red" : "white"}`}}></i>
            </span>
            <div class="product-card-desc">
                <span class="badges-span">
                    <span class="badge-rect">{item.ratings} ⭐</span>
                    <span class="badge-rect">{item.inStock ? "Available" : "Out of Stock"} </span>
                </span>
                <h3>{item.name}</h3>
                <p>Price : {item.price} 
                    <br />
                    Delivery Period : <strong style={{color: `${item.fastDelivery ? "#32de84" : "green"}`}}>{item.fastDelivery ? "Fast Delivery" : "Delivery Within Week"}</strong>
                </p>
                
            </div>
            {existCart ?
            <Link to="/cart"><button className="btn-secondary" disabled={!item.inStock}>GO TO CART ➡️</button></Link> :
            <button class="btn-primary " onClick={() => dispatch({type:TYPE.ADD_TO_CART,payload:item})} disabled={!item.inStock} style={{backgroundColor:`${item.inStock ? "" : "#808080"}`}}>ADD TO CART</button>}
            
        </div>
    )
}

export function Product() {
    const {state} = useCart();
    const sortedData = getSortedData(data,state.sortBy);
    const filteredData = getfilterData(sortedData,state.showFastDelivery,state.showInventoryFull)
    return (
        <div className="page-wrapper">
            <Filter />
            <div className="product-wrapper">
                
                <div className="items-wrapper">
                {
                    filteredData.map(item => <ShowItemProduct item={item}/>)
                }
                </div>
            </div>
        </div>
    )
}

