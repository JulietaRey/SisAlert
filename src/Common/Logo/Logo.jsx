import React from 'react';
import Image from './Logo.png';

class Logo extends React.Component{
    render(){
        let index= this.props.hide === true ? "-1" : "0";
        return (
            <a href="/" tabIndex={index}><img tabIndex="-1" width="100%" src={Image} alt="SisAlert"/></a>
        );
    }
}

export default Logo;