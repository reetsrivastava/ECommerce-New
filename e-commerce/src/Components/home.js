import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext"

export function Home() {
    const {state,dispatch} = useCart();

    return (
        <div>
            <div class="banner">
                <div class="banner-content">
                    <h1>VAJRA</h1>
                    <p>Designed and Developed Products by Professionals</p>
                    <Link to="/products"><button class="btn-primary">Browse Products</button></Link>
                </div>
            </div>
        </div>
    )
}