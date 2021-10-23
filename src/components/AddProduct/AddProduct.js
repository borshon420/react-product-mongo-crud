import React, { useRef } from 'react';

const AddProduct = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const quantityRef = useRef();

    const handleAddProduct = e => {
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;

        const newProduct = {name, price, quantity};

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then()
        console.log(newProduct)
        e.preventDefault();
    }
    return (
        <div>
            <h1>Please add your product</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" ref={nameRef} placeholder="Product name"/>
                <input type="text" ref={priceRef} placeholder="Product Price"/>
                <input type="text" ref={quantityRef} placeholder="Product Quantity"/>
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddProduct;