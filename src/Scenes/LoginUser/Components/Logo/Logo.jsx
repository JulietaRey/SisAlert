import React from 'react';
import Image from './Logo.png';

class Logo extends React.Component{
    render(){
        return (
            <a href="/" tabIndex="-1"><img tabIndex="-1" src={Image} alt="SisAlert"/></a>
        );
    }
}

export default Logo;