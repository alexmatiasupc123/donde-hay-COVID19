import React, {useState, useEffect} from 'react';

import Siderbar from '../components/Siderbar'
import Map from '../components/Map'
import SiderBarHeader from '../components/SiderBarHeader'

const Mapa = () => {


    
    return (
        <>
            <Siderbar>
               
                <Map/>
            </Siderbar>
           
        </>
    );
};

export default Mapa;