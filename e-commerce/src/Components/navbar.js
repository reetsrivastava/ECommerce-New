import "../component.css";
import {Link} from "react-router-dom";
import { useCart } from "../Context/CartContext.js";

export function Navbar()  {
    const { state } = useCart();
    return (
        <div className="nav-wrapper">
            <div>
            {/* <img src="https://vajra-ui.netlify.app/images/logo-Vajra.png" alt="logo" className="avatar" /> */}
            
            <Link to="/"><button className="btn-link-primary homePageBtn">VAJRA MART</button></Link>
            </div>

            <div className="routeLink">
                <Link to="products"><span className="linkTo">PRODUCTS </span></Link>
                <Link to="cart"><span className="linkTo">CART <span>{ state.cart.length }</span></span></Link>
                <Link to="wishlist"><span className="linkTo">WISHLIST <span>{ state.wishlist.length }</span></span></Link>
            </div>
            
        </div>
    )
}