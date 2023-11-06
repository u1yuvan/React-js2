 import React, {useState} from 'react';
 import Button from "./Button";



function ProductDetails(props) {
    let badgeClass = 'badge-margin-left-40 badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';
    // let productCount = 0;
    let [productCount,updateCount] = useState(0)
    function displayFormattedProductCount() {
        return productCount > 0 ? productCount : "0"
    }
     
    let decrementProductCount = function () {
        // productCount--
        // console.log(productCount);
        updateCount(--productCount);
    }
    
    let incrementProductCount = function () {
        // productCount++
        // console.log(productCount);
        updateCount(++productCount)

    }
    
    return (
        <div className="d-flex align-items-center justify-content-start mt-1" >
            <h6 className="font-weight-bold my-2 p-3">₹{props.price} </h6>
            <Button eventHandler={decrementProductCount}>-</Button>
            <span style={{ padding: " 0px 14px ", 'fontSize': 13 }}>{displayFormattedProductCount()}</span>
            <Button eventHandler={incrementProductCount}>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : "UnAvailable"}</span>
        </div>
    )
}


export default ProductDetails;