import React from 'react';
import Logo from './Logo/Logo';
import { Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Sesion extends React.Component{

    render(){
        return(
            <Row type="flex" justify="center" align="middle" style={{marginTop: '7.4em', marginBottom: '7.3em'}}>
                <Col xs={24} sm={7} md={8} lg={6} xl={6}>
                    <div className="logo">
                        <Logo />
                    </div> 
                </Col>

            <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Nombre" />
          
        </FormItem>
        <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Iniciar sesión
          </Button>
        </FormItem>
        <FormItem>
            <Checkbox>Recuerdame</Checkbox>
          <a className="login-form-forgot" href="/recover">Olvidé mi contraseña</a>
        </FormItem>
      </Form>
      </Row>
        );
    }
}

export default Sesion;