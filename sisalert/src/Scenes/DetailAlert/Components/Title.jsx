import React from 'react'
class Titulo extends React.Component{
    render() {
        const titleStyle= {
            fontFamily: 'Arvo',
            color: '#153668', 
            fontWeight: 'bold',
            fontSize: '36px'
        }
        return (
            <h1 style={titleStyle}>Tormentas fuertes en GBA Sur</h1>
        );
    }
}
export default Titulo;