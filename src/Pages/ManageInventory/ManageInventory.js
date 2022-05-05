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
        const url=`http://localhost:5000/product/${id}`
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
            <div className='mx-auto col-md-12 border add-item'><div><h5>Add item</h5></div><div><button onClick={handleAddbtn}></button></div></div>
                <div className="col-md-12">
                    {
                        products.map(product=>
                         <div className='inventory-card mx-auto border'>
                         
                               <div> <img className='' src={product.image} alt="" /></div>
                                <div className='card-info'>
                             <p>{product.productName}</p>
                                <button onClick={()=>handleDelete(product._id)}>X</button>
                                </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;