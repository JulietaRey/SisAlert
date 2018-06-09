import AdministrarAlertas from './Components/AdministrarAlertas';
import Welcome from './Components/Welcome'
import Logo from '../../Common/Logo/Logo'
import React from "react";
import { Row, Col  } from 'antd'
class Encabezado extends React.Component{
    render(){
        const headerStyle= {
            borderBottom: '1px solid black'
        }
        return(
            <header style= {headerStyle}>
                <Row type="flex" justify="space-between" align="middle">
                    <Col xs={24} sm={7} md={8} lg={6} xl={6}>
                        <div className="logo">
                                <Logo />
                        </div>
                    </Col>
                    <Col xs={24} sm={10} md={8} lg={6} xl={4} >
                        <Row justify="center" align="middle">
                            <Col xs={24}>
                                <AdministrarAlertas />
                            </Col>
                            <Col xs={24}>
                                <Welcome />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </header>
        );
    }
}

export default Encabezado;