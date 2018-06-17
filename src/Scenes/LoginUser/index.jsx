import Sesion from './Components/Sesion';
import React from "react";
import {Layout} from 'antd';

class LoginUser extends React.Component{
    render(){
        return(
            <Layout >
                <div style={{background: '#38618c', padding: '0px 20px'}}>
                    <a href="/" style={{color:"#ffcdcd"}}>Volver</a>
                    <Sesion />
                </div>
            </Layout>
        );
    }
}

export default LoginUser;