import React, {useState, useEffect} from 'react';
const {L,map}=window;



const Covid19 = ({map}) => {
    const mapa=map;
    useEffect(() => {
        async function init() {
            var circle = L.circle([51.508, -0.11], {
                color: 'red',
                fillColor: '#f03',
                fillOpacity: 0.5,
                radius: 500
            }).addTo(mapa);
        }

        init();
    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Covid19;