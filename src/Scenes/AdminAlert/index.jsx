import Encabezado from '../../Components/Encabezado';
import Footer from '../../Components/Footer';
import Contenido from './Components/Contenido'
import Titulo from './Components/Titulo'
import GenerarAlertas from './Components/GenerarAlertas'
import Navbar from '../../Components/Navbar';
import Volver from '../../Components/Volver';
import React from "react";
import {Layout, Col, Row} from 'antd';

class AdminAlert extends React.Component{
    render(){
        return(
            <Layout>
                <Encabezado />
                <Navbar />
                <div style={{padding: '0px 20px'}}>
                <Volver />
                    <Row type="flex" justify="space-between" align="middle">
                        <Col xs={24} sm={7} md={8} lg={6} xl={8}>
                            <div className="titulo">
                                    <Titulo />
                            </div>
                        </Col>
                        <Col xs={24} sm={10} md={8} lg={6} xl={4} >
                            <Row justify="center" align="middle">
                                <Col xs={24}>
                                    <GenerarAlertas />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                <Contenido />
                </div>
                <Footer /> 
            </Layout>
        );
    }
}

export default AdminAlert;