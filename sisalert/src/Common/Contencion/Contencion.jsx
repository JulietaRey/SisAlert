import React from 'react';
import Image from './contencion.jpg';

class Contencion extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="Alerta contencion"/>
        );
    }
}

export default Contencion;