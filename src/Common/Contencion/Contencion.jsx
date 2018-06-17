import React from 'react';
import Image from './contencion.jpg';

class Contencion extends React.Component{
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
            height: this.props.tam,
    
        }
        return (
            <div style={divStyle}>
                <img style={imgStyle} src={Image} alt="Sección Contención"/>
            </div>
        );
    }
}

export default Contencion;