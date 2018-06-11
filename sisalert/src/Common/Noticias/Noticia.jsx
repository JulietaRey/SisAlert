import React from 'react';
import Image from './noticias.jpg';

class Noticia extends React.Component{
    render(){
        return (
            <img width="100%" src={Image} alt="ver noticias"/>
        );
    }
}

export default Noticia;