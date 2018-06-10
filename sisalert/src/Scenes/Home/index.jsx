import Encabezado from '../../Components/Encabezado';
import Columnas from '../../Components/Columnas';
import React from "react";
import {Layout} from 'antd'

class Index extends React.Component{
    render(){
        return(
            <Layout>
                <Encabezado />
                <Columnas />
            </Layout>
        );
    }
}

export default Index;