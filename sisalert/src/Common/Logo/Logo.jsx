import React from 'react';
import Image from './Logo.png';

class Logo extends React.Component{
    render(){
        return (
            <a href="/"><img width="100%" src={Image} alt="SisAlert"/></a>
        );
    }
}

export default Logo;