import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import "./productdetails.css"

const ProductDetails = () => {
    const {id}=useParams()
    
    const [product, setProduct]=useState({})
    const quantity= parseInt(product.quantity)
    const input=e=>{
        const addQuantity= e.target.value
        
    }
  
    const handleDelivered=(id)=>{
        const url=`https://obscure-spire-96407.herokuapp.com/quantity/${id}`
        
        fetch(url, {
  method: 'PUT',
  body: JSON.stringify({
   quantity: quantity
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((data) => {
     if(data.matchedCount>0){
        window.location.reload(false)
     }
    console.log(data)
  })
        
    }
    useEffect(()=>{
        const url=`https://obscure-spire-96407.herokuapp.com/inventory/${id}`
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data.product)
            
        })
    },[id])
    const handleAddbtn=()=>{

    }
   
    return (
        <div>
            <div className="row w-1000 container mx-auto justify-content-between mt-5">
                <div className="col-md-7 details-card justify-content-center">
                    <div>
                        <img className='w-75 rounded' src={product.image} alt="" />
                       
                    </div>
                </div>
                <div className="col-md-5">
                    <h4>Restock <span className='red-color'>items</span></h4>
                    <input onChange={input} type="number" name="" id="" />
                    <button className='plus-btn' onClick={handleAddbtn}>+</button>
                    <div className='mt-3'>
                    <h5>{product.productName}</h5>
                        <p>Supplier name: {product.supplierName}</p>
                        <p>Quantity: {product.quantity}kg</p>
                        <p>Price: ${product.price}</p>
                        <button className='delivered-button rounded' onClick={()=>handleDelivered(product._id)}>Delivered</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;