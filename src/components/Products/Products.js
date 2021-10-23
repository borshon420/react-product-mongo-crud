import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
    
    const [products, setProducts] = useState([])
    useState(()=> {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    //DELETE AN PRODUCT
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete')
        if(proceed){
            const url = `http://localhost:5000/products/${id}`
    fetch(url, {
        method: 'DELETE',

    })
    .then(res => res.json())
    .then(data => {
        if(data.deleteCount > 0){
            alert('Deleted Successfully')
            const remainingProducts = products.filter(product => product._id !== id)
            setProducts(remainingProducts)
        }
    })
        }
        
    }
    

    return (
        <div>
            <h1>Found Product: {products.length}</h1>
            {
                products.map(product => <li key={product._id}>
                    name:{product.name}
                      Price:{product.price} 
                      Quantity: {product.quantity}
                      <Link to={`/products/update/${product._id}`}>
                          <button>Update</button>
                        </Link>
                      
                        <button onClick={()=> handleDeleteProduct(product._id)}>Delete</button></li>)
            }
        </div>
    );
};

export default Products;