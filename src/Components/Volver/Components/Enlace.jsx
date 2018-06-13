import React from 'react';

class Volver extends React.Component{
    render(){
        const FullWidth = {
            fontSize: '100%',
            textAlign: 'left'
        }

        return (
            <div style={FullWidth}>
                <a href={this.props.sendTo.path}> Volver</a>
            </div>
        );
    }
}

export default Volver;