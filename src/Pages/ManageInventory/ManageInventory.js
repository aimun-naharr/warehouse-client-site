import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa'
import useProduct from '../../Hooks/useProducts';
import './manageInventory.css'
const ManageInventory = () => {
   const navigate=useNavigate()
    const [products, setProducts]= useProduct()
    const handleAddbtn=()=>{
        navigate('/uploadpd')
    }
    const handleDelete=id=>{
        const confirm=window.confirm('confirm delete?')
        const url=`https://obscure-spire-96407.herokuapp.com/product/${id}`
       if(confirm){
        fetch(url,{
            'method': 'DELETE'

       })
       .then(res=>res.json())
       .then(data=>{
           if(data.deletedCount>0){
               const remaining= products.filter(product=>product._id !== id)
                setProducts(remaining)
           }
       })
       }
    }
    return (
        <div>
        
            <div className="row border">
            <div className='mx-auto col-md-12 border add-item rounded'><div><h5>Add item</h5></div><div><button className='add-button rounded' onClick={handleAddbtn}>add</button></div></div>
                <div className="col-md-12">
                    {
                        products.map(product=>
                         <div className='inventory-card mx-auto rounded'>
                         
                               <div> <img className='rounded' src={product.image} alt="" />
                               </div>
                                <div className='card-info'>
                            <div className='product-details'>
                            <p>{product.productName}</p>
                             <p><small>Quantity: {product.quantity}</small></p>
                            </div>
                                <button className='delete-btn rounded' onClick={()=>handleDelete(product._id)}>Delete</button>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;