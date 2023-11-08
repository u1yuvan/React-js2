import React, { useState } from 'react'


function ProductForm() {
    let [pName, updateName] = useState('');
    let [pPrice, updatePrice] = useState('');
    let [pDescription, updateDescription] = useState('');
    let [pAvailable, updateAvilability] = useState('');
    let [pImageUrl, updateImageUrl] = useState('');

    function nameInputHandler(event) {
        updateName(event.target.value);
    }
    function priceInputHandler(event) {
        updatePrice(event.target.value);
    }
    function descriptionInputHandler(event) {
        updateDescription(event.target.value);
    }
    function availabilityInputHandler(event) {
        updateAvilability(event.target.checked);
    }
    function imageInputHandler(event) {
        updateImageUrl(event.target.value);
    }

    function createProductEventHandler(event) {
        event.preventDefault();
        let product = {
            pID: 1,
            pName: pName,
            desc: pDescription,
            isAvailable: pAvailable,
            image: pImageUrl,
            price: Number(pPrice),
        }
        console.log(product);
    }
    return (<form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text"
                className="form-control"
                id="name"
                placeholder="Product Name"
                onChange={nameInputHandler} />
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number"
                min="0.01" step="0.01"
                className="form-control"
                id="price"
                placeholder="Product Price"
                onChange={priceInputHandler} />
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text"
                className="form-control"
                id="description"
                placeholder="Product Description"
                onChange={descriptionInputHandler} />
        </div>

        <div class="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="isAvailable"
                onChange={availabilityInputHandler} />
            <label className="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image"
                onChange={imageInputHandler} />
        </div>


        <button type="submit" className="btn btn-primary">Add Product</button>
    </form>);
}




export default ProductForm;