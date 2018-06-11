import React from 'react';
import Image from './reportes.jpg';

class Reporte extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="ver reportes"/>
        );
    }
}

export default Reporte;