import React from 'react';
import farmerOne from '../../../images/farmerOne.jpg'
import './farmers.css'
const Farmers = () => {
    return (
        <div className='farmers-section'>
        <h1 className='text-center'><span className='red-color'>Farm</span>ers</h1>
            <div className="row container w-100 mx-auto farmers-card rounded">
            
                <div className="col-md-5 px-3 py-3">
                <img className='w-100 rounded' src={farmerOne} alt="" />
                </div>
                <div className="col-md-7 mt-5">
                    <h5>Richard yun</h5>
                    <p>One of our best farmers who assures to deliver us the fresh fruits possible. He supplies us grapes which is super juicy and sweet like heaven. He grows them in his own farm and we never had to compromise with fruits quality.</p>
                </div>
            </div>
        </div>
    );
};

export default Farmers;