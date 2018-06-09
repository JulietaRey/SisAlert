import Encabezado from '../../Components/Encabezado';
import React from "react";
import {Layout} from 'antd'

class Index extends React.Component{
    render(){
        return(
            <Layout>
                <Encabezado />
            </Layout>
        );
    }
}

export default Index;