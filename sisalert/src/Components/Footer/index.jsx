import MapaSitio from './Components/MapaSitio'
import Links from './Components/Links'
import Copyright from './Components/Copyright'
import React from "react";
import { Row, Col, Layout } from 'antd';
const FooterAnt = Layout.Footer;
class Footer extends React.Component{
    render(){
        const alertStyle= {
            padding: '5px 0px'            
        }
        const footerStyle = {
            position: 'fixed',
            bottom: '0px',
            left: '0px',
            right: '0px',
            marginBottom: '0px'
        }
        return(
            <FooterAnt style={footerStyle} >
                <Row align="middle" style= {alertStyle}>
                    <Row type="flex" justify="center" align="middle" >
                        <Col>
                            <MapaSitio />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" >
                      <Col>
                        <Links />
                      </Col>
                    </Row>
                    <Row type="flex" justify="center" align="middle" >
                      <Col>
                        <Copyright />
                      </Col>
                    </Row>
                </Row>
            </FooterAnt>
        );
    }
}

export default Footer;
