import React from 'react';
import {Icon, Button} from 'antd';

class AdministrarAlertas extends React.Component{
    render(){
        const ButtonStyle = {
            width: '100%'
        }
        return (
            <Button href={'/admin'} type="primary" style={ButtonStyle}>
                <Icon type="plus" /> Administrar alertas
            </Button>
        );
    }
}

export default AdministrarAlertas;