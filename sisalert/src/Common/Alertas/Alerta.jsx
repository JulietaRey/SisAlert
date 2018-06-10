import React from 'react';
import Image from './street.jpg';

class Alerta extends React.Component{
    render(){
        return (
            <img width="75%" src={Image} alt="Alerta"/>
        );
    }
}

export default Alerta;