import React from 'react';

class Links extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '100%',
            color: 'white',
            textAlign: 'left',
            padding: '2em',
            fontFamily: 'Arvo',
        }
        const linkStyle = {
            color: 'white'
        }
        return (
            <div style={FullWidth}>
                <a href="" style={linkStyle}>Prevencion</a> ·
                <a href="" style={linkStyle}> Accion</a> ·
                <a href="" style={linkStyle}> Contencion</a> ·
                <a href="" style={linkStyle}> Reportes</a> ·
                <a href="" style={linkStyle}> Noticias</a>
            </div>
        );
    }
}

export default Links;