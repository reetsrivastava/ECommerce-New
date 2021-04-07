import { useCart } from "../Context/CartContext";
import { showFastDelivery, showInventoryFull,sortBy, TYPE } from "../Reducer/appReducer";
import { data } from "./data";
import "../component.css"


 function getSortedData(data,sortBy) {
   if(sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
       return data.sort((a,b) => a["price"] - b["price"]);
   }  
   
   if(sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
       return data.sort((a,b) => b["price"] - a["price"]);
   }
   return data;
}

const sortedData = getSortedData(data,sortBy);

function getfilterData(dataList,showFastDelivery,showInventoryFull) {
    return dataList.filter(({fastDelivery}) => showFastDelivery ? fastDelivery :false)
    .filter(({inStock}) => showInventoryFull ? false: inStock)
}

export const filteredData = getfilterData(sortedData,showInventoryFull,showFastDelivery)


export function Filter() {
    const {state,dispatch} = useCart();

    
    return (
        <div className="filters-wrapper">
            <div>
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
            <div>
                <h3>Filters:</h3>
                <label>
                    <input type="checkbox"  checked={showInventoryFull} onChange={() => dispatch({type:TYPE.TOGGLE_INVENTORY})} />
                    INCLUDE OUT OF STOCK
                </label>
                <br />
                <label>
                    <input type="checkbox"  checked={showFastDelivery} onChange={() => dispatch({type:TYPE.TOGGLE_DELIVERY})} />
                    FAST DELIVERY ONLY
                </label>
                <hr />
                <label>
                    PRICE RANGE -- 
                    <br />
                    <input type="range" />
                </label>
            </div>
        </div>
    )
}