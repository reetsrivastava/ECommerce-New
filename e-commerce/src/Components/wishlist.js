import { TYPE } from "../Reducer/appReducer.js";
import { useCart } from "../Context/CartContext";

function ShowItemWishlist({item}) {
    return (
        <>
            <div className="card-horizontal">
                <img className="img-responsive horizontal-card-img" src={item.image}/>
                <div className="horizontal-card-desc">
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </div>
            </div>
        </>
    )
}

export function WishList() {
    const {state,dispatch} = useCart();
    return (
        <div>
            {
                state.wishlist.map(wishItem => <ShowItemWishlist item={wishItem} />)
            }
        </div>
    )
}