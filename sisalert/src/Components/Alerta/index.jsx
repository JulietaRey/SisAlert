import Iconos from './Components/Iconos'
import Titulo from './Components/Titulo'
import ContenidoAlerta from './Components/ContenidoAlerta'
import Logo from '../../Common/Logo/Logo'
import React from "react";
import { Row, Col } from 'antd'
class Alerta extends React.Component{
    render(){
        const alertStyle= {
            background: '#ff8284', 
        }
        const backstyle= {
            padding: '3em'  
        }
        const separador= {
            borderBottom: '1px solid black'
        }
        return(
            <container style= {backstyle}>
                <Row type="flex" justify="space-between" align="middle" style= {alertStyle}>
                    <Col xs={24} sm={7} md={8} lg={6} xl={6}>
                        <div className="titulo">
                                <Titulo />
                        </div>
                    </Col>
                    <Col xs={24} sm={10} md={8} lg={6} xl={4} >
                        <Row justify="center" align="middle" >
                            <Col xs={24}>
                                <Iconos />
                            </Col>
                        </Row>
                    </Col>
                    <Row justify="center" align="middle" >
                      <Col>
                        <ContenidoAlerta />
                      </Col>
                    </Row>
                </Row>
            </container>
        );
    }
}

export default Alerta;