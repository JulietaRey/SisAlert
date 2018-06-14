import Footer from '../../Components/Footer';
import Volver from '../../Components/Volver';
import Sesion from './Components/Sesion';
import React from "react";
import {Layout} from 'antd';

class LoginUser extends React.Component{
    render(){
        return(
            <Layout >
                <div style={{background: '#38618c', padding: '0px 20px'}}>
                    <Volver />
                    <Sesion />
                </div>
                <Footer /> 
            </Layout>
        );
    }
}

export default LoginUser;