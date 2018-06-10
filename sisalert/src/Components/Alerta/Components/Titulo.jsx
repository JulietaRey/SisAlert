import React from 'react';

class Titulo extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '200%',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Arvo',
            fontStyle: 'bold',
        }
        return (
            <div style={FullWidth}>
                Tormentas fuertes en GBA Sur
            </div>
        );
    }
}

export default Titulo;