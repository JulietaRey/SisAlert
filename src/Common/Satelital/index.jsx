import React from 'react';
import Image from './imgsatelital.png';

class Satelital extends React.Component{
    render(){
        return (
            <img width={this.props.heigth} src={Image} alt="detalle satelital del evento"/>
        );
    }
}

export default Satelital;