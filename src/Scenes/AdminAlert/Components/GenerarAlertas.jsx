import React from 'react';
import {Icon, Button} from 'antd';

class GenerarAlertas extends React.Component{
    render(){
        const ButtonStyle = {
            width: '100%'
        }
        return (
            <Button type="primary" style={ButtonStyle}>
                <Icon type="plus" /> Generar alertas
            </Button>
        );
    }
}

export default GenerarAlertas;