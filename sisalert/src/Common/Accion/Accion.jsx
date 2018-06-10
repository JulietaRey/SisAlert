import React from 'react';
import Image from './accion.jpg';

class Accion extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="Alerta Accion"/>
        );
    }
}

export default Accion;