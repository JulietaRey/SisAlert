import React from 'react';

class Copyright extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '90%',
            textAlign: 'center',
            color: '#a5a3a3',
        }
        return (
            <div style={FullWidth}>
                Copyright 2018 - Diseño de Interfaces y Diseño de Experiencia de Usuario - FI UNLP
            </div>
        );
    }
}

export default Copyright;
