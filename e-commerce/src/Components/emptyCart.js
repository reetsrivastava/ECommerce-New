import { Link } from "react-router-dom";
import "../component.css";

export function EmptyCart() {
    return (
        <div className="emptyCart">
            <h2>Your Cart Seems Empty ! </h2>
            <Link to="/products"><span className="emptyCartBtn">Continue Shopping</span></Link>
        </div>
    )
}