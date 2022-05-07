import React from 'react';
import './footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="row container mx-auto w-100 justify-content-between align-items-center">
                <div className="col-md-6">
                    <p>Address: Gateway I, Holgate Park Drive, York, North Yorkshire.</p>
                </div>
                <div className="col-md-6">
                    <p>Contact us: 0113 451 3089</p>
                </div>
            </div>
        </div>
        
    );
};

export default Footer;