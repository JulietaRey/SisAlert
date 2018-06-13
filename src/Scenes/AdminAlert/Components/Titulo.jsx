import React from 'react';

class Titulo extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '200%',
            textAlign: 'left',
            color: '38618c',
            fontFamily: 'Arvo',
            fontWeight: 'bold',
        }
        return (
            <div style={FullWidth}>
                Administrador de alertas
            </div>
        );
    }
}

export default Titulo;