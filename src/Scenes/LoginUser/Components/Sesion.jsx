import React from 'react';
import Logo from '../../../Common/Logo/Logo';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Sesion extends React.Component{
    render(){
        return(
            <div style={{fontSize:'18px'}}>
                <Row type="flex" justify="center" align="middle">
                    <Col xs={24} sm={7} md={8} lg={6} xl={6}>
                        <div className="logo">
                                <Logo />
                        </div> 
                    </Col>
                    <Col xs={24} sm={10} md={8} lg={6} xl={8} >
                        <Row justify="center" align="middle">
                            <Col xs={24}>
                                <div>
                                    <b>Descripción:</b> 
                                        <p>
                                            Lorem ipsum dolor sit amet
                                        </p>
                                    <a href="">Leer más</a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>  
            </div>
        );
    }
}

export default Sesion;