import React from 'react';

class Links extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '100%',
            color: 'white',
            textAlign: 'left',
            padding: '10px 0px',
        }
        const linkStyle = {
            color: 'white',
            padding: '0px 20px'
        }
        return (
            <div style={FullWidth}>
                <a href="" style={linkStyle}>Prevencion</a> <b>·</b> 
                <a href="" style={linkStyle}> Accion</a> <b>·</b> 
                <a href="" style={linkStyle}> Contencion</a> <b>·</b> 
                <a href="" style={linkStyle}> Reportes</a> <b>·</b> 
                <a href="" style={linkStyle}> Noticias</a>
            </div>
        );
    }
}

export default Links;