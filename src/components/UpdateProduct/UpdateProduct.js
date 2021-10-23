import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    useEffect(()=> {
        const url = `http://localhost:5000/products/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])

    const handleNameChange = e => {
        const updateName = e.target.value;
        const updatedProduct = {...product}
        updatedProduct.name = updateName
        setProduct(updatedProduct)
    }

    const handlePriceChange = e => {
        const updatePrice = e.target.value;
        const updateProduct = {...product}
        updateProduct.price = updatePrice
        setProduct(updateProduct)
    }

    const handleQuantityChange = e => {
        const updateQuantity = e.target.value;
        const updateProduct = {...product}
        updateProduct.quantity = updateQuantity
        setProduct(updateProduct)
    }

    const handleUpdateProduct = e => {
        const url = `http://localhost:5000/products/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert('Successfully updated')
                setProduct({})
            }
        })
        console.log(product)
        e.preventDefault();
    }
    return (
        <div>
            <h1>{product.name} {product.price} {product.quantity}</h1>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" onChange={handleNameChange} value={product.name || ''}/>
                <input type="text" onChange={handlePriceChange} value={product.price || ''}/>
                <input type="text" onChange={handleQuantityChange} value={product.quantity || ''}/>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateProduct;