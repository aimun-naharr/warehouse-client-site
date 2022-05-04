import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Product = ({product}) => {
    const {productName, _id, image, supplierName, price, quantity, description}=product
    
    const navigate=useNavigate()
    const handleManageInventory=(_id)=>{
        navigate(`/inventory/${_id}`)
       
    }
    
    return (
        <div className='col-md-4 border'>
            <img className='w-50 rounded' src={image} alt="" />
            <div>
                <h5>{productName}</h5>
                    <div>
                        <p>Supplier Name: {supplierName}</p>
                        <p>Price: ${price}</p>
                        <p>Quantity: {quantity}</p>
                        <p>Description: {description}</p>
                    </div>
            </div>
            <footer><button onClick={()=>handleManageInventory(_id)} className='btn btn-primary'>Manage</button></footer>
        </div>
      
    );
};

export default Product;