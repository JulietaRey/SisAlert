import React from 'react';
import Logo from './Logo/Logo';
import { Row, Col, Icon, Input, Button, Checkbox } from 'antd';

class Sesion extends React.Component{

    render(){
        return(
            <Row type="flex"  align="middle" style={{marginTop: '7.4em', marginBottom: '7.3em'}}>
                <Col offset={3} xs={24} sm={7} md={8} lg={6} xl={6}>
                    <div className="logo">
                        <Logo tabIndex="-1" />
                    </div> 
                </Col>
                <Col offset={3} xs={24} xl={9} align="center">

                    <form className="login-form">
                        <Row justify="start">
        
                            <Col xl={24} xs={24}>
                                <label style={{color:'white', float:'left'}} htmlFor="usuario" id="usuarioLabel">Usuario</label>
                            </Col>
                            <Col xl={24} xs={24}>
                                <Input 
                                    aria-required="true" 
                                    aria-labelledby="usuarioLabel" 
                                    id="usuario"
                                    type="email"
                                    autoComplete="email"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="Mail" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={24} xs={24}>
                                <label style={{color:'white', float:'left'}} htmlFor="password" id="passwordLabel">Contraseña</label>
                            </Col>
                            <Col xl={24} xs={24}>
                                <Input 
                                    aria-required="true" 
                                    aria-labelledby="passwordLabel" 
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} 
                                    placeholder="Contraseña" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={24}>
                                <Button style={{width:'100%', marginTop:'10px'}} type="default" htmlType="submit" className="login-form-button" >
                                    Iniciar sesión
                                </Button>
                            </Col>
                            <Row>
                                <Col xl={24}>
                                    <Checkbox style={{color:'white'}}>Recuérdame</Checkbox>
                                    <a className="login-form-forgot" style={{color:"#ffcdcd"}} href="/recover">Olvidé mi contraseña</a>
                                </Col>
                            </Row>
                        </Row>
                    </form>
                </Col>
            </Row>
        );
    }
}

export default Sesion;