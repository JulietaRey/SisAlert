import React from 'react';
import { Row, Col } from 'antd';
import Accion from '../../Common/Accion/Accion';
import Prevencion from '../../Common/Prevencion/Prevencion';
import Contencion from '../../Common/Contencion/Contencion';
import Reportes from '../../Common/Reportes/Reporte';
import Noticias from '../../Common/Noticias/Noticia';





class Navbar extends React.Component{
    render(){
        const itemStyle={
            bottom: '-8px',
            right: '16px',
            position: 'absolute'
        }
        return(
            <nav>
                <Row type="flex" justify="center">
                    <Col>
                        <div style={{position:'relative'}}>
                            <Accion />
                            <h2 style={itemStyle}>Acción</h2>
                        </div>
                    </Col>
                    <Col>
                        <div style={{position:'relative'}}>
                            <Prevencion />
                            <h2 style={itemStyle}>Prevención</h2>
                        </div>
                    </Col>
                    <Col>
                        <div style={{position:'relative'}}>
                            <Contencion />
                            <h2 style={itemStyle}>Contención</h2>
                        </div>
                    </Col>
                    <Col>
                        <div style={{position:'relative'}}>
                            <Reportes />
                            <h2 style={itemStyle}>Reportes</h2>
                        </div>
                    </Col>
                    <Col>
                        <div style={{position:'relative'}}>
                            <Noticias />
                            <h2 style={itemStyle}>Noticias</h2>
                        </div>
                    </Col>
                    
                </Row>
            </nav>
        );
    }
}

export default Navbar