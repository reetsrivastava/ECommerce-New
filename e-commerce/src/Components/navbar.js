import "../component.css";
import {Link} from "react-router-dom";

export function Navbar()  {
    return (
        <div className="nav-wrapper">
            <img src="https://vajra-ui.netlify.app/images/logo-Vajra.png" alt="logo" className="avatar" />
            <span className="route-icons">
            <Link to="/"><button className="btn-link-primary">Home</button></Link>
            <Link to="products"><span><i class="fab fa-product-hunt"></i></span></Link>
            <Link to="cart"><span><i class="fas fa-cart-arrow-down"></i></span></Link>
            <Link to="wishlist"><span><i class="fab fa-gratipay"></i></span></Link>
            </span>
        </div>
    )
}