import React from 'react';
import useProduct from '../../../Hooks/useProducts';
import Product from './Product/Product';
import './Inventory.css'
import { Link, useNavigate } from 'react-router-dom';
const Inventory = () => {
    const [products]= useProduct()
    const newProducts=products.slice(0,6)
    const navigate =useNavigate()
    const handleManageInventory=()=>{
        navigate('/manageInventory')
    }
    return (
        <div className='mt-5 inventory-section'>
            <h1 className='text-center m-5 dosis'>Inventory</h1>
            <div className="container">
                <div className='row mx-auto w-100 align-items-center justify-content-between gx-6 gy-5 '>
                {
                        newProducts.map(pd=><Product product={pd} key={pd._id}></Product>)
                    }
                </div>
                
            </div>
            <div  className='container w-100 d-flex justify-content-center align-items-center mx-auto mt-5'><button className='manageInventory-button' onClick={handleManageInventory}>Manage inventory</button></div>
        </div>
    );
};

export default Inventory;