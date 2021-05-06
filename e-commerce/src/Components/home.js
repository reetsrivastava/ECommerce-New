import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext"

export function Home() {
    const {state,dispatch} = useCart();

    return (
        <div>
            <div className="banner" style={{height:"100vh"}}>
                <div className="banner-content">
                    <h1>VAJRA</h1>
                    <p>Designed and Developed Products by Professionals</p>
                    <Link to="/products"><button className="btn-primary">Browse Products</button></Link>
                </div>
            </div>
        </div>
    )
}