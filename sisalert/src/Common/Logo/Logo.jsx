import React from 'react';
import Image from './Logo.png';

class Logo extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="SisAlert"/>
        );
    }
}

export default Logo;