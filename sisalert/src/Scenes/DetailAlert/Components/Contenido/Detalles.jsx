import React from 'react';
import { Row, Col } from 'antd';
import Info from './Info'

class Detalles extends React.Component{
    render(){
        return(
            <div>
                <Row>
                    <Col xl={12} xs={24}>
                        <Info showInfo={{ title:'Gravedad', text:'Media', icon:'warning'}}/>
                    </Col>
                    <Col xl={12} xs={24}>
                        <Info showInfo={{ title:'Vigencia del alerta', text:'Próximas 6h', icon:'clock-circle-o'}}/>
                    </Col>                    
                </Row>
                    <Col xl={24}>
                        <Info showInfo={{ title:'Zonas afectadas', text:'GBA sur y zonas aledañas', icon:'environment-o'}}/>
                    </Col>
                <Row>
                </Row>
                <Row>
                </Row>
            </div>
        );
    }
}

export default Detalles;