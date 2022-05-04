import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const {id}=useParams()
    
    const [product, setProduct]=useState({})
    const [quantity, setQuantity]=useState(product.quantity)
    const handleDelivered=()=>{
        const quantity= parseInt(product.quantity)
        let newQuantity=quantity-1
        console.log(newQuantity)
        
    }
    useEffect(()=>{
        const url=`http://localhost:5000/inventory/${id}`
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data.product)
            
        })
    },[id])
    return (
        <div>
            <div className="row border w-1000 container mx-auto justify-content-center">
                <div className="col-md-6">
                    <div>
                        <img className='w-75 rounded' src={product.image} alt="" />
                        <h5>{product.productName}</h5>
                        <p>Supplier name: {product.supplierName}</p>
                        <p>Quantity: {product.quantity}kg</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={handleDelivered}>Delivered</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Restock items</h4>
                    <input type="number" name="" id="" />
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;