import React, {useState, useEffect} from 'react';
const {L} = window;
window.casosCovid=[];
async function createMapa() {

    return new Promise(function(resolve, reject) {
        var map = L.map('map').setView([45.53, -122.64], 14);
        var url = 'https://services6.arcgis.com/d6rNtq16iigtXRJ5/ArcGIS/rest/services/GEORREFE_COVID19_LIMA/FeatureServer/0';
        L.esri.basemapLayer('Streets').addTo(map);
        var lc=L.control.locate({flyTo:true,}).addTo(map);
        lc.start();
        resolve(map);

    });
    
   

}

async function addPointCovid(map) {
    
    function Iconos(categoria) {
        var Icon=null;
        switch (categoria.trim()) {
            case 'ASINTOMATICOS POSITIVOS':

                Icon=  L.icon({
                    iconUrl: 'img/iconsVirus/asintomaticosPositivos.svg',
                    iconSize: [27, 31],
                    iconAnchor: [13.5, 17.5],
                    popupAnchor: [0, -11]
                });
              
                break;
            case 'HOSPITALIZADOS':
                Icon=  L.icon({
                    iconUrl: 'img/iconsVirus/hospitalizados.svg',
                   iconSize: [27, 31],
                    iconAnchor: [13.5, 17.5],
                    popupAnchor: [0, -11]
                });
                break;
            case 'SINTOMATICOS GRAVES':
                Icon=  L.icon({
                    iconUrl: 'img/iconsVirus/graves.svg',
                    iconSize: [27, 31],
                    iconAnchor: [13.5, 17.5],
                    popupAnchor: [0, -11]
                });
                break;
            case 'FALLECIDOS':
                Icon=  L.icon({
                    iconUrl: 'img/iconsVirus/muertos.svg',
                    iconSize: [27, 31],
                    iconAnchor: [13.5, 17.5],
                    popupAnchor: [0, -11]
                });
                break;
                
        }
        
        return Icon;
    }


    
    var url = 'https://services6.arcgis.com/d6rNtq16iigtXRJ5/ArcGIS/rest/services/GEORREFE_COVID19_LIMA/FeatureServer/0';
    L.esri.featureLayer({
        url:url,
        onEachFeature: function(feature, layer) {

            window.casosCovid.push(feature);
            layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                return "<b>"+k +"</b>"+ ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 200
            });
            
        },
        pointToLayer: function (geojson, latlng) {
            console.log('+++++++++++++++++++++++')
            console.log(geojson)
            return L.marker(latlng, {
                icon: Iconos(geojson.properties.CATEGORIA)
            });
        }
    }).addTo(map);

   
    L.esri.featureLayer({
        url:"https://services6.arcgis.com/d6rNtq16iigtXRJ5/ArcGIS/rest/services/ZONAS_INFLUENCIA/FeatureServer/0",
        style:{
            fillColor:'red',
            fillOpacity:'0.5',
            weight: 1,
            opacity: 1,
            color: 'red',
            dashArray:3,
        },
        onEachFeature: function(feature, layer) {
            layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                return "<b>"+k +"</b>"+ ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 200
            });

        }
    }).addTo(map);

    
}

var map = null;
const Mapa = ({}) => {
    let Map = null;
    useEffect(() => {
        const init = async () => {
           const mapa=await createMapa();
            addPointCovid(mapa);
           
        }
        init();
    }, []);
  
    
    return (
        <>
            <div id="map" className="col-lg-12 mapa-solicitud">
            </div>
        </>
    );
};

export default Mapa;