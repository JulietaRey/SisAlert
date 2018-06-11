import Encabezado from '../../Components/Encabezado';
import Alerta from '../../Components/Alerta';
import Columnas from '../../Components/Columnas';
import Menu from '../../Components/Menu';
import SobreNosotros from '../../Components/SobreNosotros';
import Footer from '../../Components/Footer';
import React from "react";
import {Layout} from 'antd'

class Index extends React.Component{
    render(){
        return(
            <Layout>
                <Encabezado />
                <Alerta />
                <Columnas />
                <Menu />
                <SobreNosotros />
                <Footer />
            </Layout>
        );
    }
}

export default Index;