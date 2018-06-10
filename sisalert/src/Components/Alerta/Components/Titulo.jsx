import React from 'react';

class Titulo extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '150%',
            textAlign: 'center'

        }
        return (
            <div style={FullWidth}>
                Tormentas fuertes en GBA Sur
            </div>
        );
    }
}

export default Titulo;