import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './product.css'
const Product = ({product}) => {
    const {productName, _id, image, supplierName, price, quantity, description}=product
    
    const navigate=useNavigate()
    const handleManageInventory=(_id)=>{
        navigate(`/inventory/${_id}`)
       
    }
    
    return (
        <div className='col-md-4 col-lg-4 product-card rounded'>
           <div > <img className='w-100 rounded' src={image} alt="" /></div>
            <div>
                <h5 className='text-center mt-2 red-color'>{productName}</h5>
                    <div className='product-card-info'>
                        <p>Supplier Name: {supplierName}</p>
                        <p>Price: <span className='red-color font-weight-bold'>$</span>{price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Description: {description}</p>
                    </div>
            </div>
            <button className='manage-button w-100 rounded' onClick={()=>handleManageInventory(_id)}>Manage</button>
        </div>
      
    );
};

export default Product;