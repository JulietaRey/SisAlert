import React from 'react';
import Image from './reportes.jpg';

class Reporte extends React.Component{
    render(){
        const divStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden'
        }
        const imgStyle= {
            flexShrink: '0',
            minWidth: '100%',
            minHeight: '100%',
            objectFit: 'cover',
            height: '35px',
    
        }
        return (
            <div style={divStyle}>
                <img style={imgStyle} src={Image} alt="Ver Reportes"/>
            </div>
        );
    }
}

export default Reporte;