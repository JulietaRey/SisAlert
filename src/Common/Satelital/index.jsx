import React from 'react';
import Image from './imgsatelital.png';

class Satelital extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="detalle satelital del evento"/>
        );
    }
}

export default Satelital;