import { TYPE } from "../Reducer/appReducer.js";
import { useCart } from "../Context/CartContext";
import { EmptyWishList } from "./emptyWishList.js";

function ShowItemWishlist({item}) {
    const { dispatch } = useCart();

    function moveToCart() {
        dispatch({type:TYPE.ADD_TO_CART,payload:item});
        dispatch({type:TYPE.REMOVE_FROM_WISHLIST,payload:item})
    }
    return (
        <div className="wishItem">
            <div className="card-horizontal">
                <img className="img-responsive horizontal-card-img" src={item.image}/>
                <div className="horizontal-card-desc">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                    <div>
                        <span className="btn-wishlist" onClick={() => moveToCart()}>Move To Cart</span>
                        <span className="btn-wishlist" onClick={() => dispatch({type:TYPE.REMOVE_FROM_WISHLIST,payload:item})}>Remove</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function WishList() {
    const {state,dispatch} = useCart();
    return (
        <div>
            {
                state.wishlist.length ? state.wishlist.map(wishItem => <ShowItemWishlist item={wishItem} />) : <EmptyWishList />
            }
        </div>
    )
}