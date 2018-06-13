import React from 'react';
import { Row, Col } from 'antd';
import Info from './Info'

class Detalles extends React.Component{
    render(){
        return(
            <div style={{fontSize:'18px'}}>
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
                    <div>
                        <b>Descripción:</b> <p>
                            Lorem ipsum dolor sit amet, consectetur adispscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non publinar lorem felis nec erat.
                        </p>
                        <a href="">Leer más</a>
                    </div>
                </Row>
                <Row>
                    <hr/>
                </Row>
            </div>
        );
    }
}

export default Detalles;