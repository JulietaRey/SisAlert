import Encabezado from '../../Components/Encabezado';
import Footer from '../../Components/Footer';
import Contenido from './Components/Contenido'
import React from "react";
import {Layout} from 'antd';

class AdminAlert extends React.Component{
    render(){
        return(
            <Layout>
                <Encabezado />
                <Contenido />
                {/* <Footer /> */}
            </Layout>
        );
    }
}

export default AdminAlert;