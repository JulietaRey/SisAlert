import React from 'react';

class Welcome extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '90%',
            textAlign: 'center'

        }
        return (
            <div style={FullWidth}>
                Bienvenido Admin |
                <a href={'/'}> Cerrar sesión</a>
            </div>
        );
    }
}

export default Welcome;