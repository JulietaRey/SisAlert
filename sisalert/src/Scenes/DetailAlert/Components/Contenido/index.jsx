import React from 'react';
import {Layout, Col, Row} from 'antd';
import Title from '../Title'
import Detalles from '../Contenido/Detalles'
import Precauciones from '../Contenido/Precauciones'
import Numeros from '../Contenido/Numeros'
import Iconos from '../Contenido/Iconos'
import Satelital from '../Contenido/Satelital'
const {Content} = Layout;

class Contenido extends React.Component{
    render(){
        return (
            <Content>
                <Row>
                    <Col xs={24} xl={24}>
                        <Title />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} xl={18}>
                        <Detalles/>
                        {/* <Precauciones />
                        <Numeros /> */}
                    </Col>
                    <Col xs={24} xl={6}>
                        {/* <Iconos/>
                        <Satelital /> */}
                    </Col>
                </Row>
            </Content>
        );
    }
}

export default Contenido;