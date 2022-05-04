import React from 'react';
import useProduct from '../../Hooks/useProducts';
import './manageInventory.css'
const ManageInventory = () => {
    const products= useProduct()
    return (
        <div>
        
            <div className="row border">
            <div className='mx-auto w-25 col-md-6 border'>Add item</div>
                <div className="col-md-12">
                    {
                        products.map(product=>
                         <div className='inventory-card w-50 mx-auto'>
                         
                               <div> <img className='' src={product.image} alt="" /></div>
                                <div className='card-info'>
                             <p>{product.productName}</p>
                                <button>X</button>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;