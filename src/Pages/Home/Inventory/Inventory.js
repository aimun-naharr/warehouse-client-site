import React from 'react';
import useProduct from '../../../Hooks/useProducts';
import Product from './Product/Product';
import './Inventory.css'
import { Link } from 'react-router-dom';
const Inventory = () => {
    const products= useProduct()
    const newProducts=products.slice(0,6)
    return (
        <div className='mt-5'>
            <h1 className='text-center'>Inventory</h1>
            <div className="container">
                <div className='row mx-auto w-100 align-items-center justify-content-between  border g-5'>
                {
                        newProducts.map(pd=><Product product={pd} key={pd._id}></Product>)
                    }
                </div>
                
            </div>
            <Link className='text-center' to='/manageInventory'>Manage inventory</Link>
        </div>
    );
};

export default Inventory;