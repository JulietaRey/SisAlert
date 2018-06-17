import Iconos from './Components/Iconos'
import Titulo from './Components/Titulo'
import ContenidoAlerta from './Components/ContenidoAlerta'
import React from "react";
import { Row, Col } from 'antd'
class Alerta extends React.Component{
    render(){
        const alertStyle= {
            background: 'rgba(180, 0, 0, 0.8117647058823529)',
            borderRadius: '20px',
            padding: '20px'            
        }
        const backstyle= {
            padding: '3em'
        }
        const separador= {
            borderBottom: '1px solid black'
        }
        return(
            <div style= {backstyle}>
                <a tabIndex="0" className="alerta" href="/details">
                    <Row align="middle" style= {alertStyle}>
                        <Row justify="space-between" type="flex" style={separador}>
                            <Col xs={24} sm={7} md={8} lg={6} xl={10}>
                                <div className="titulo">
                                        <Titulo />
                                </div>
                            </Col>
                            <Col xs={24} sm={10} md={8} lg={6} xl={4} >
                                <Row align="middle" >
                                    <Col xs={24} >
                                        <Iconos />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row type="flex" justify="center" align="middle" >
                        <Col>
                            <ContenidoAlerta />
                        </Col>
                        </Row>
                    </Row>
                </a>
            </div>
        );
    }
}

export default Alerta;