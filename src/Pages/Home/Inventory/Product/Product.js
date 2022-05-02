import React from 'react';

const Product = ({product}) => {
    const {productName, image, supplierName, price, quantity, description}=product
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
            <footer><button className='btn btn-primary'>Manage</button></footer>
        </div>
      
    );
};

export default Product;