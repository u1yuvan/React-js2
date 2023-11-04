import Button from "./Button";


let productCount = 0;
let isAvailable = 'UnAvailable';

function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "0"
}

function mouseOverEventHandler(){
    console.log('mouse over Happened');
}

function ProductDetails(props) {
    let badgeClass = 'badge-margin-left-40 badge ';
    badgeClass += isAvailable ? 'bg-success' : 'bg-danger';
    return (
        <div className="d-flex align-items-center justify-content-start mt-1" onMouseOver={mouseOverEventHandler}>
            <h6 className="font-weight-bold my-2 p-3">₹{props.price} </h6>
            <Button>-</Button>
            <span style={{ padding: " 0px 14px ", 'fontSize': 13 }}>{displayFormattedProductCount()}</span>
            <Button>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Available' : "UnAvailable"}</span>
            {props.children}
        </div>
    )
}


export default ProductDetails;