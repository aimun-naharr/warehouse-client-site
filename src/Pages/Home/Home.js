import React from 'react';
import AddSpinner from '../../Hooks/AddSpinner/AddSpinner';

import Farmers from './Farmers/Farmers';
import FirstSection from './First section/FirstSection';
import Footer from './Footer/Footer';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
        
            <FirstSection></FirstSection>
            <Inventory></Inventory>
            <Farmers></Farmers>
            <Footer></Footer>
        </div>
    );
};

export default Home;