import React from 'react';
import useProduct from '../../../Hooks/useProducts';
import Product from './Product/Product';

const Inventory = () => {
    const products= useProduct()
    const newProducts=products.slice(0,6)
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Inventory</h1>
            <div className="container">
                <div className='row mx-auto w-100 align-items-center justify-content-center  border gy-5'>
                {
                        newProducts.map(pd=><Product product={pd} key={pd._id}></Product>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Inventory;