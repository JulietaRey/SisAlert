import Encabezado from '../../Components/Encabezado';
import Footer from '../../Components/Footer';
import Contenido from './Components/Contenido';
import Volver from '../../Components/Volver';
import React from "react";
import {Layout, Col, Row} from 'antd';

class DetailAlert extends React.Component{
    render(){
        return(
            <Layout style={{marginBottom:'200px'}}>
                <Encabezado />
                <div style={{padding: '0px 20px'}}>
                    <Volver />
                    <Contenido />
                </div>
                <Footer /> 
            </Layout>
        );
    }
}

export default DetailAlert;