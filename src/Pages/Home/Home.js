import React from 'react';
import Spinner from '../../Hooks/spinner/Spinner';
import Farmers from './Farmers/Farmers';
import FirstSection from './First section/FirstSection';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
        <Spinner></Spinner>
            <FirstSection></FirstSection>
            <Inventory></Inventory>
            <Farmers></Farmers>
        </div>
    );
};

export default Home;