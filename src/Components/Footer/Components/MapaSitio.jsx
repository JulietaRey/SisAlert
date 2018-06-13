import React from 'react';

class MapaSitio extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '16px',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Arvo',
            fontStyle: 'bold',
        }
        return (
            <div style={FullWidth}>
                Mapa del sitio
            </div>
        );
    }
}

export default MapaSitio;