import { useCart } from "../Context/CartContext";
import { showFastDelivery, showInventoryFull,sortBy, TYPE } from "../Reducer/appReducer";
import { data } from "./data";
import "../component.css"


export function getSortedData(data,sortBy) {
   if(sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
       return [...data].sort((a,b) => a["price"] - b["price"]);
   }  
   
   if(sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
       return [...data].sort((a,b) => b["price"] - a["price"]);
   }
   return data;
}



 export function getfilterData(dataList,showFastDelivery,showInventoryFull) {
    return dataList.filter(({fastDelivery}) => showFastDelivery ? fastDelivery :true).filter(({inStock}) => showInventoryFull ? true: inStock)
}




export function Filter() {
    const {state,dispatch} = useCart();

    
    return (
        
        <div className="filters-wrapper">
            <div>
            <div className="sortOption">
                <h3>Price:</h3>
                <label>
                    <input name="sortPrice" type="radio" onChange={() => dispatch({type:TYPE.SORT,payload:"PRICE_LOW_TO_HIGH"})} checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"} />
                    PRICE LOW -- HIGH
                </label>
                <br />
                <label>
                    <input name="sortPrice" type="radio" onChange={() => dispatch({type:TYPE.SORT,payload:"PRICE_HIGH_TO_LOW"})} checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"} />
                    PRICE HIGH -- LOW
                </label>
            </div>
            <hr />
            <div className="filterOption">
                <h3>Filters:</h3>
                <label>
                    <input type="checkbox" checked={state.showInventoryFull} onChange={() => dispatch({type:TYPE.TOGGLE_INVENTORY})} />
                    INCLUDE OUT OF STOCK
                </label>
                <br />
                <label>
                    <input type="checkbox" checked={state.showFastDelivery}  onChange={() => dispatch({type:TYPE.TOGGLE_DELIVERY})} />
                    FAST DELIVERY ONLY
                </label>
                {/* <hr />
                <label>
                    PRICE RANGE -- 
                    <br />
                    <input type="range" />
                </label> */}
            </div>
            <hr />
            <div>
                <button className="btn-link-secondary clearFilterBtn" onClick={() => dispatch({type:TYPE.CLEAR_FILTERS})}>Clear Filters</button>
            </div>
            </div>
        </div>
    )
}